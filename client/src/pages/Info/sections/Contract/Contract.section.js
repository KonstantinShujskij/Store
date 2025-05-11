import React, { useState } from 'react'
import styles from './Contract.module.css'
import { FRONT_URL } from '../../../../const'


function Contract() {
    const [toggleList, setToggleList] = useState({})

    const toggle = (key) => {
        setToggleList((prew) => {
            const newValue = {...prew}
            newValue[key] = newValue[key]? !newValue[key] : true
            return newValue
        })
    }


    return (
        <>
            <div className={styles.title}>
                <span>1.</span>
                <span>ТЕРМІНИ ТА ВИЗНАЧЕННЯ</span>
                <div className={`${styles.btn} ${toggleList['1']? null : styles.open}`} onClick={() => toggle('1')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>
            </div>
            <div className={`${styles.item} ${toggleList['1']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>У Договорі використовуються терміни і визначення відповідно до нижче наведеного:</div>
                        <div className={styles.list}>
                            <div className={styles.point}>
                                <div className={styles.label}>i.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>Веб-сайт – сайт, що належить Виконавцю та знаходиться за посиланням: [ï].</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>ii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>Товар – продукція, представлена на Веб-сайті, стосовно якої Замовник оформив або може оформити замовлення.</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>iii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        Товар – продукція, представлена на Веб-сайті, стосовно якої Замовник оформив або може оформити замовлення.
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.point}>
                                            <div className={styles.label}>1.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>
                                                    придбанням Товару, що перебуває у наявності у Виконавця (у визначених випадках з можливістю 
                                                    вибору (1) бажаної довжини Товару, та/або (2) кольору/кольорового поєднання, та/або (3) 
                                                    матеріалу, з якого виготовлений Товар (“Характеристики Товару”)); та/або
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>2.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>
                                                    наданням Виконавцю завдання на виконання роботи з пошиття Товару за індивідуальними параметрами Замовника; та
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>3.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>
                                                    оплатою ціни Товару, вказаної на Веб-сайті, у повному обсязі.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>iv.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>Наявність – перебування Товару, що не потребує індивідуального пошиття за завданням Замовника, у власності Виконавця.</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>v.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>Індивідуальне Пошиття – виконання роботи з виготовлення Товару Виконавцем за завданням Замовника відповідно до наданих ним індивідуальних параметрів.</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>vi.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        Товар – продукція, представлена на Веб-сайті, стосовно якої Замовник оформив або може оформити замовлення.
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.point}>
                                            <div className={styles.label}>1.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>
                                                    заміри, які вказує Замовник у відповідних полях Веб-сайту під час Замовлення 
                                                    (бажана довжина Товару, зріст, об’єм грудей, талії, стегон та інші заміри, 
                                                    які необхідні для Індивідуального Пошиття Товару), та/або
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>2.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>колір та/або кольорове поєднання, та/або</div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>3.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>матеріал, з якого буде виготовлятися Товар, та/або</div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>4.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>інші характеристики, які необхідні для Індивідуального Пошиття Товару.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>vii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>Перевізник – ТОВ “НОВА ПОШТА”, лише за попередньому домовленістю з Виконавцем у виключних випадках – інша компанія визначена за спільною згодою Сторін.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>2.</span>
                <span>ПРЕДМЕТ ТА ЦІНА ДОГОВОРУ </span>
                <div className={`${styles.btn} ${toggleList['2']? null : styles.open}`} onClick={() => toggle('2')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>

            </div>
            <div className={`${styles.item} ${toggleList['2']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            За Договором Виконавець зобов’язується здійснити Індивідуальне Пошиття Товару за завданням Замовника відповідно 
                            до наданих ним Індивідуальних Параметрів та передати Товар у власність Замовника та/або передати Товар 
                            у власність Замовника з Наявності, а Замовник оплачує ціну Товару та зобов’язується його прийняти.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>b.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Виконавець самостійно визначає ціну Товару та вказує її на Веб-сайті. Ціна Товару не 
                            включає вартість доставки від Виконавця до Замовника.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>c.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Виконавець має право в односторонньому порядку змінювати ціну Товару. 
                            Зміна ціни Товару не впливає жодним чином на оформлені Замовлення до зміни ціни Товару.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>d.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            У випадку очевидної технічної помилки при вказанні ціни на Веб-сайті, що була виявлена після 
                            оформлення Замовлення, Виконавець в односторонньому порядку розриває Договір, повідомляє про 
                            це Замовника та повертає сплачену ним суму грошових коштів за Товар.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>e.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Фотографії, на яких зображений Товар на моделі/моделях, публікується на Веб-сайті з ілюстративною 
                            метою, не гарантуючи, що Товар аналогічним чином буде виглядати на Замовнику чи будь-яких третіх 
                            особах. Колір Товару на Фотографії та фактично може незначно відрізнятися.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>f.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Виконавець надає основну інформацію про Товар в його описі на Веб-сайті та зобов’язується надати 
                            додаткову інформацію стосовно конкретного Товару за окремими запитами Замовника, у разі такої необхідності.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>g.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Перед оформленням Замовлення Замовник зобов’язується ознайомитися з описом Товару.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>3.</span>
                <span>НАБУТТЯ ЧИННОСТІ ДОГОВОРУ ТА СТРОК ЙОГО ДІЇ </span>
                <div className={`${styles.btn} ${toggleList['3']? null : styles.open}`} onClick={() => toggle('3')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>
            </div>
            <div className={`${styles.item} ${toggleList['3']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Розміщення Товару на Веб-сайті є пропозицією Виконавця укласти Договір.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>b.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Оформлення Замовлення Замовником означає прийняття ним пропозиції Виконавця укласти Договір. 
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>c.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Замовлення вважається оформленим з моменту зарахування суми грошових коштів, 
                            що відповідає ціні Товару, на банківський рахунок Виконавця.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>d.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            У момент оформлення Замовлення Договір набуває чинності автоматично без підписання 
                            Сторонами письмового примірника і має юридичну силу відповідно до положень статей 633, 634 
                            Цивільного кодексу України № 435-IV від 16 січня 2003 року (у редакції станом на момент оформлення Замовлення) 
                            та діє до повного виконання Сторонами своїх зобов’язань за Договором.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>4.</span>
                <span>ПОРЯДОК ОФОРМЛЕННЯ ЗАМОВЛЕННЯ ТА ОТРИМАННЯ ТОВАРУ </span>
                <div className={`${styles.btn} ${toggleList['4']? null : styles.open}`} onClick={() => toggle('4')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>                
            </div>
            <div className={`${styles.item} ${toggleList['4']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>Для оформлення Замовлення Замовник:</div>
                        <div className={styles.list}>
                            <div className={styles.point}>
                                <div className={styles.label}>i.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>обирає Товар на Веб-сайті;</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>ii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        зазначає у відповідних полях Індивідуальні Параметри, які необхідні для Індивідуального Пошиття Товару, 
                                        та/або Характеристики Товару при придбанні Товару з Наявності; 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>iii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>додає обраний Товар до віртуальної “Корзини”;</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>iv.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>перейшовши до корзини, у відповідних полях зазначає наступну інформацію:</div>
                                    <div className={styles.list}>
                                        <div className={styles.point}>
                                            <div className={styles.label}>1.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>прізвище та ім’я; </div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>2.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>місто доставки;</div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>3.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>номер телефону; </div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>4.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>номер поштового відділення/поштомату/адресу для доставки Товару;</div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>5.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>власний e-mail;</div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>6.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>нік у Instagram (у разі наявності); </div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>7.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>
                                                    будь-яку іншу додаткову інформацію, яка на думку Замовника повинна бути відома Виконавцю 
                                                    при виконанні Замовлення, у полі “Нотатка”;
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>v.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>натискає кнопку “Оплатити” та оплачує ціну Товару у повному обсязі.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>b.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Замовник несе будь-які ризики, пов’язанні з допущенням помилок при заповненні інформації відповідно 
                            до підпунктів 4.1.2 та 4.1.4 Договору та/або неповідомлення інформації та/або побажань, яку Виконавець 
                            повинен був знати при виконанні Замовлення.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>c.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>Виконавець зобов’язується:</div>
                        <div className={styles.list}>
                            <div className={styles.point}>
                                <div className={styles.label}>i.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        протягом 7 (семи) робочих днів з дня оформлення Замовлення здійснити Індивідуальне Пошиття Товару та на 7 
                                        (сьомий) або 8 (восьмий) робочий день передати Товар Перевізнику для доставки Замовнику; та/або
                                    </div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>ii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        протягом 3 (трьох) робочих днів з дня оформлення Замовлення передати Товар Перевізнику для 
                                        доставки Замовнику, якщо Замовлення стосується придбання Товару з Наявності.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>d.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            З моменту передачі Товару для Перевізника право власності на Товар та ризик його випадкового знищення 
                            або пошкодження переходить до Замовника.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>e.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>Доставка здійснюється за правилами Перевізника та за рахунок Замовника. </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>f.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Після отримання повідомлення про доставку Товару Замовник повинен прийняти Товар, отримавши його у 
                            Перевізника на відповідному складі/поштоматі/за адресою, вказаною при оформленні Замовлення.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>g.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            У день отримання Товару від Перевізника, який був індивідуально пошитим, Замовник зобов’язаний перевірити 
                            Товар на предмет дотримання Виконавцем Індивідуальних Параметрів та наявність істотних недоліків, які взагалі 
                            унеможливлюють використання Товару звичним способом.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>h.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Замовник може уповноважити отримати Товар третю особу – довірену особу. У будь-якому випадку отримання 
                            Товару довіреною особою свідчить про прийняття Товару самим Замовником та не звільняє від обов’язку, 
                            передбаченого пунктом 4.7 Договору.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>i.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            День (момент) отримання Товару Замовником визначається відповідно до інформації наданої/оновленої Перевізником.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>j.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            У випадку Індивідуального Пошиття, момент отримання Товару від Перевізника є моментом прийняття роботи по Індивідуальному Пошиттю Товару.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>5.</span>
                <span>ГАРАНТІЙНИЙ СТРОК ТА ЕКСПЛУАТАЦІЯ ТОВАРУ</span>
                <div className={`${styles.btn} ${toggleList['5']? null : styles.open}`} onClick={() => toggle('5')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>
            </div>
            <div className={`${styles.item} ${toggleList['5']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Виконавець встановлює гарантійний строк на експлуатацію Товару – 14 (чотирнадцять) днів з моменту отримання Товару.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>b.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Виконавець повинен надати Замовнику рекомендації стосовно експлуатації Товару та догляду за ним.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>c.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Замовник зобов’язаний використовувати Товар та доглядати за ним відповідно до рекомендацій, наданих Виконавцем.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>6.</span>
                <span>ВІДПОВІДАЛЬНІСТЬ СТОРІН</span>
                <div className={`${styles.btn} ${toggleList['6']? null : styles.open}`} onClick={() => toggle('6')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>
            </div>
            <div className={`${styles.item} ${toggleList['6']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>Виконавець не несе будь-якої відповідальності:</div>
                        <div className={styles.list}>
                            <div className={styles.point}>
                                <div className={styles.label}>i.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        за помилки Замовника при наданні інформації під час оформлення Замовлення, або неповідомлення 
                                        Замовником інформації та/або побажань, яку Виконавець повинен був знати при виконанні Замовлення;
                                    </div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>ii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>за будь-які дії чи бездіяльність Перевізника, пов’язані з доставкою Товару; та</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>iii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        за будь-які недоліки Товару, що виникли внаслідок умисних або недбалих дій 
                                        Замовника, у тому числі, але не виключно, у зв’язку з:
                                    </div>
                                    <div className={styles.list}>
                                        <div className={styles.point}>
                                            <div className={styles.label}>1.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>невиконанням обов’язку, передбаченого пунктом 6.3 Договору; та/або</div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>2.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>наявністю механічних пошкоджень Товару; та/або</div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>3.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>замочуванням, використанням відбілюючих або агресивних засобів при пранні Товару; та/або</div>
                                            </div>
                                        </div>
                                        <div className={styles.point}>
                                            <div className={styles.label}>4.</div>
                                            <div className={styles.content}>
                                                <div className={styles.info}>недотримання температурного режиму прання Товару, тощо.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>b.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>У випадку наявності порушень в діях Сторін, Сторони несуть відповідальність відповідно до Договору та законів України.</div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>7.</span>
                <span>ФОРС-МАЖОРНІ ОБСТАВИНИ</span>
                <div className={`${styles.btn} ${toggleList['7']? null : styles.open}`} onClick={() => toggle('7')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>
            </div>
            <div className={`${styles.item} ${toggleList['7']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Сторони звільняються від відповідальності за порушення зобов’язань, передбачених Договором, 
                            якщо вони сталися внаслідок випадку або непереборної сили (форс-мажорні обставини).
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>b.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Форс-мажорними обставинами є надзвичайні та невідворотні обставини, що об’єктивно унеможливлюють виконання 
                            зобов’язань, передбачених Договором, а саме: 
                        </div>
                        <div className={styles.list}>
                            <div className={styles.point}>
                                <div className={styles.label}>i.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        обставини, передбачені частиною 2 статті 14-1 Закону України “Про торгово-промислові палати в Україні” 
                                        № 671/97-ВР від 2 грудня 1997 року (із змінами та доповненнями); а також 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>ii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        загроза тимчасової окупації, тимчасова окупація, ескалація воєнних дій, відсутність електропостачання, 
                                        знищення або пошкодження виробничих потужностей Виконавця, призупинення надання логістичних послуг Перевізником.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>c.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>У разі виникнення форс-мажорних обставин, Сторона, яка не може виконати зобов’язання, передбачені Договором, зобов’язана:</div>
                        <div className={styles.list}>
                            <div className={styles.point}>
                                <div className={styles.label}>i.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>повідомити іншу Сторону про це протягом 2 (двох) днів з дня їх виникнення; та</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>ii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>виконати зобов’язання за Договором після припинення дії форс-мажорних обставин.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>d.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Наявність форс-мажорних обставин може доводиться різними доказами, у тому числі, але не виключно, виданим 
                            сертифікатом Торгово-промислової палати України та/або уповноважених нею регіональних торгово-промислових палат.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>e.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Якщо форс-мажорні обставини тривають більше 15 (п’ятнадцяти) днів за спільною згодою Сторін договір може бути 
                            припиненим. Якщо до цього моменту Виконавець не передав Товар Перевізнику для доставки Замовнику, Виконавець 
                            зобов’язаний повернути Замовнику суму грошових коштів, сплачених за Товар.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>8.</span>
                <span>ЗМІНА ТА РОЗІРВАННЯ ДОГОВОРУ</span>
                <div className={`${styles.btn} ${toggleList['8']? null : styles.open}`} onClick={() => toggle('8')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>
            </div>
            <div className={`${styles.item} ${toggleList['8']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>Замовник приєднується до Договору та не може запропонувати свої умови Договору.</div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>b.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Виконавець може в односторонньому порядку переглянути та змінити умови Договору. 
                            Нова редакція Договору набуває чинності з моменту її опублікування на Веб-сайті у розділі [“ï”].
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>c.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>Договір може бути розірваним за спільною згодою Сторін, а також в односторонньому порядку:</div>
                        <div className={styles.list}>
                            <div className={styles.point}>
                                <div className={styles.label}>i.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>У випадку, передбаченому пунктом 2.4 Договору;</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>ii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        За ініціативою Виконавця, якщо він не може виконати Замовлення у звʼязку з наявністю об’єктивних перешкод 
                                        для цього, про що він повинен невідкладно повідомити Замовника з наданням відповідного обґрунтування та 
                                        повернути йому суму грошових коштів, сплачену за Товар;
                                    </div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>iii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        За ініціативою Замовника, у випадку Індивідуального Пошиття Товару, якщо Виконавець отримав повідомлення 
                                        про розірвання Договору від Замовника до початку виконання роботи з Індивідуального Пошиття Товару; та
                                    </div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>iv.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>
                                        За ініціативою Замовника, у випадку придбання Товару з Наявності та відмови отримати його у Перевізника, 
                                        за умови відшкодування Виконавцю його витрат на доставку Товару та інших витрат, пов’язаних з виконанням 
                                        Договору. Відшкодування вказаних витрат здійснюється шляхом відрахування з суми грошових коштів, 
                                        сплачених Замовником за Товар. Решта грошових коштів після відрахування підлягає поверненню Замовнику.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>9.</span>
                <span>ВИРІШЕННЯ СПОРІВ ТА ЗАСТОСОВНЕ ПРАВО</span>
                <div className={`${styles.btn} ${toggleList['9']? null : styles.open}`} onClick={() => toggle('9')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>
            </div>
            <div className={`${styles.item} ${toggleList['9']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Спори, що виникають у зв’язку із Договором та його виконанням, 
                            вирішуються шляхом переговорів та в порядку досудового врегулювання спорів.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>b.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            У разі неможливості вирішити спір відповідно до пункту 10.1 Договору, він підлягає вирішенню уповноваженими 
                            органами України відповідно до чинного законодавства України та з урахуванням положень Договору. 
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>c.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Неврегульовані питання Договором регулюються чинним законодавством України.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>10.</span>
                <span>КОНФІДЕНЦІЙНІСТЬ ТА ПЕРСОНАЛЬНІ ДАНІ</span>
                <div className={`${styles.btn} ${toggleList['10']? null : styles.open}`} onClick={() => toggle('10')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>
            </div>
            <div className={`${styles.item} ${toggleList['10']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Оформлюючи Замовлення, Замовник надає свою згоду на збір та обробку персональних даних відповідно до Закону 
                            України “Про захист персональних даних” № 2297-VI від 1 червня 2010 року.
                        </div>
                    </div>
                </div>
                <div className={styles.point}>
                    <div className={styles.label}>b.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            Виконавець має право використовувати інформацію, надану Замовником, при обробці Замовлення, 
                            а також для надсилання Замовнику комерційних пропозицій.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.title}>
                <span>11.</span>
                <span>ПОРЯДОК КОМУНІКАЦІЇ</span>
                <div className={`${styles.btn} ${toggleList['11']? null : styles.open}`} onClick={() => toggle('11')}>
                    <img src={`${FRONT_URL}/images/chevron.svg`} alt="ico" />
                </div>
            </div>
            <div className={`${styles.item} ${toggleList['11']? null : styles.hide}`}>
                <div className={styles.point}>
                    <div className={styles.label}>a.</div>
                    <div className={styles.content}>
                        <div className={styles.info}>Будь-яка комунікація у зв’язку з Договором та на його виконання здійснюється:</div>
                        <div className={styles.list}>
                            <div className={styles.point}>
                                <div className={styles.label}>i.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>У випадку Замовника: за контактними даними, вказаними при оформленні Замовлення; та</div>
                                </div>
                            </div>
                            <div className={styles.point}>
                                <div className={styles.label}>ii.</div>
                                <div className={styles.content}>
                                    <div className={styles.info}>У випадку Виконавця: за контактними даними, вказаними на Веб-сайті.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contract