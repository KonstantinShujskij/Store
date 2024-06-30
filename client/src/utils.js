export const getTempId = () => `${Date.now().toString(16)}-${parseInt(Math.random() * 1000000)}`
