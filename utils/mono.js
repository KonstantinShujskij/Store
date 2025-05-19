const https = require('https')
const config = require('config')
const crypto = require('crypto')


async function createMonoInvoice(id, amount) {
    const payload = JSON.stringify({
        amount: amount * 100,
        ccy: 980,                   
        redirectUrl: `${config.get('baseUrl')}/order/${id}`,
        webHookUrl:  `${config.get('serverUrl')}/api/orders/webhook/${id}`,
        description: `Оплата заказа #${id}`
    })

    const options = {
        hostname: 'api.monobank.ua',
        path: '/api/merchant/invoice/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(payload),
            'X-Token': config.get('monoToken')
        }
    }

    return new Promise((resolve, reject) => {
        const req = https.request(options, res => {
            let data = ''
            res.setEncoding('utf8')
            res.on('data', chunk => data += chunk)
            res.on('end', () => {
                if(res.statusCode >= 200 && res.statusCode < 300) {
                    try {
                        resolve(JSON.parse(data))
                    } catch (e) {
                        console.log('mono error json', e)
                        reject(new Error('Invalid JSON from Mono API'))
                    }
                } else {
                    reject(new Error(`Mono API error ${res.statusCode}: ${data}`))
                }
            })
        })

        req.on('error', reject)
        req.write(payload)
        req.end()
    })
}

let monoPubKey = null
async function fetchMonoPubKey() {
    return new Promise((resolve, reject) => {
        https.get('https://api.monobank.ua/api/merchant/pubkey', res => {
        let data = ''

        res.on('data', chunk => data += chunk)
        res.on('end', () => {
            monoPubKey = Buffer.from(data, 'base64').toString('utf8')
            resolve(monoPubKey)
        })
        }).on('error', reject)
    })
}

async function verifyMonoSignature(rawBody, signatureHex) {
  if(!monoPubKey) { await fetchMonoPubKey() }

  try {
    const verify = crypto.createVerify('SHA256')
    verify.update(rawBody)
    verify.end()
    const signature = Buffer.from(signatureHex, 'hex')
    return verify.verify(monoPubKey, signature);
  }
  catch(error) {
    console.log(error);
    return true
  }

}


module.exports = { 
    createMonoInvoice,
    verifyMonoSignature
}