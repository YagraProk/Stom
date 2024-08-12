const price = {
    'Хирургический приём': [
        ['В01.003.004.001', 'Анестезия', '300'],
        ['А16.07.001.002', 'Удаление зуба (без анестезии)', '2500'],
        ['А16.07.001.096', 'Сложное удаление с пластикой дна гайморовой пазухи (без анестезии)', '5000'],
        ['А16.07.001.097', 'Сложное удаление с ушиванием слизистой полости рта (без анестезии)', '5000'],
        ['А16.07.001.003', 'Сложное удаление с разъединением корней (без анестезии)', '5000'],
        ['А16.07.024', 'Операция удаления ретинированного, дистопированного или сверхкомплектного зуба', '7000'],
        ['А16.07.054', 'Внутрикостная дентальная имплантация Medent', '20000'],
        ['А16.07.054', 'Внутрикостная дентальная имплантация Dentium', '25000'],
        ['А16.07.041.001', 'Костная пластика с использованием  искусственной кости  и мембран', '55000'],
        ['А16.07.040', 'Лоскутная операция, пластика мягких тканей полости рта', '10000'],
        ['А16.07.055', 'Синуслифтинг открытый', '55000'],
        ['А16.07.055', 'Синуслифтинг закрытый', '10000'],
        ['А16.07.058', 'Лечение перикоронарита (без анестезии)', '2000'],
        ['А16.07.012', 'Лечение периостита (без анестезии)', '2000'],
        ['А16.07.013', 'Лечение альвеолита (без анестезии)', '2000'],
        ['А16.07.041.001', 'Закрытие костных дефектов искуственной костью', '10000'],
        ['А16.07.059', 'Гемисекция', '10000'],
        ['А16.07.060', 'Коронаро-радикулярная сепарация', '10000'],
        ['А16.07.007', 'Рецекция верхушки корня', '10000'],
        ['А16.07.045', 'Вестибулоаластика', '10000'],
    ],
    'Рентген': [
        ['А06.07.012', 'Визиография  (снимок 1-2 зубов)', '500'],
        ['А06.07.004', 'Ортопантомография (панорамный снимок)', '1500'],
        ['А06.03.002', 'Компьютерная томография', '2500'],
    ],
    'Терапевтический приём': [
        ['А16.07.002.010.1', 'Пломбирование фотополимером (I,V,VI класс по Блэку) Charisma', '3500'],
        ['А16.07.002.010.2', 'Пломбирование фотополимером (I,V,VI класс по Блэку) Estelite, Gradia direct', '3500'],
        ['А16.07.002.010.3', 'Пломбирование фотополимером (I,V,VI класс по Блэку) enamel plus HRL', '6000'],
        ['А16.07.030', 'Инструментальная и медикаментозная обработка каналов', '?????'],
        ['А16.07.008.002', 'Пломбирование каналов гуттаперчевыми штифтами', '????'],
        ['А16.07.008.002', '– Резцы, клыки', '1500'],
        ['А16.07.008.002', '– Премоляры', '3000'],
        ['А16.07.008.002', '– Моляры', '4500'],
        ['А16.07.082.001', 'Распломбирование каналов (паста)', '3000'],
        ['А16.07.082.002', 'Распломбирование каналов (резорцин-формалин, фосфат цемент)', '3000'],
        ['А16.07.051.020', 'Профессиональная чистка полости рта (удаление зубн. камней, налёта)', '3500'],
        ['А16.07.050', 'Отбеливание (цена за один зуб)(не менее 6 зубов)', '500'],
        ['А16.07.092', 'Трепанация искусственной коронки', '1000'],
    ],
    'Ортопедический приём': [
        ['А16.07.035', 'Частичный съёмный протез', '15000'],
        ['А16.07.035', 'Армированный частичный съёмный протез', '20000'],
        ['А16.07.035', 'Гибкий частичный съёмный протез (Flexi Evolon) без металл. кламеров', '30000'],
        ['А16.07.035', 'Починка протеза', '1500'],
        ['А16.07.023', 'Полный съёмный протез', '20000'],
        ['А16.07.023', 'Армированный полный съёмный протез', '25000'],
        ['А16.07.023', 'Гибкий полный съёмный протез (Flexi Evolon)', '35000'],
        ['А16.07.023', 'Починка протеза', '2000'],
        ['А16.07.052.033', 'Вкладка культевая штифтовая', '2000'],
        ['А16.07.049', 'Повторная фиксация на постоянный цемент несъемных ортопедических конструкций', '700'],
        ['А16.07.034.1 ', 'Съемный мостовидный протез (протезирование на балке) (пластмасса)', '80000'],
        ['А16.07.034.1 ', 'Съемный мостовидный протез (протезирование на балке) (керамика)', '150000'],
    ],
    'Коронки': [
        ['А16.07.004', 'Металлокерамические', '8000'],
        ['А16.07.004', 'Металлические (литые)', '3500'],
        ['А16.07.004', 'Литые с напылением', '4000'],
        ['А16.07.004', 'Пластмассовые (временные)', '2500'],
        ['А16.07.004', 'Пресскерамика', '10000'],
        ['А16.07.004', 'Фасетка', '4500'],
    ],
    'Мостовидные протезы (несъёмные) . </br>Цена за единицу </br>(коронку или искусственный зуб)': [
        ['А16.07.005', 'Металлокерамические', '8000'],
        ['А16.07.005', 'Металлические (литые)', '3500'],
        ['А16.07.005', 'Литые с напылением', '4000'],
        ['А16.07.005', 'Пластмассовые (временные)', '2500'],
        ['А16.07.005', 'Пресскерамика', '10000'],
    ],
    'Коронка на импланте': [
        ['А16.07.006', 'Литая', '6500'],
        ['А16.07.006', 'Металлокерамическая', '12000'],
        ['А16.07.006', 'Литая с напылением', '8500'],
        ['А16.07.006', 'Пластмассовая', '5000'],
    ],
    'Подготовка к имплантации': [
        ['А06.07.004', 'Компьютерная томография', '2500'],
        ['А02.07.010.001', 'Снятие оттиска с одной челюсти альгинатом', '1000'],
        ['А16.17.035.01', 'Изготовление навигационного шаблона для имплантации', '5000'],
    ],
};

for (let key in price) {
    let row = document.createElement('tr')
    row.innerHTML = `<td colspan="3" class="namecomm">${key}</td>`
    document.querySelector('.price__table-common').append(row)
    for (let i = 0; i < price[key].length; i++) {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${price[key][i][0]}</td>
        <td>${price[key][i][1]}</td>
        <td>${price[key][i][2]}</td>
        `
        document.querySelector('.price__table-common').append(row)
    }
};

const priceSpec = {
    '': [
        ['В01.065.007', 'Первичная консультация', '1000'],
    ],
    'Функциональная диагностика': [
        ['В01.065.007', 'Цифровой фотопротокол(получение вне и внутриротовых снимков)', '1000'],
        ['А02.07.010.001', 'Снятие оттиска с одной челюсти альгинатным слепочным материалом', '1000'],
        ['А02.07.001', 'Изготовление гипсовых разборных моделей', '2000'],
        ['А02.07.006.001', 'Определение положения верхней челюсти относительно внчс', '5000'],
        ['А01.07.006', 'Сравнительная мышечная пальпация', '1000'],
        ['А02.07.006.002', 'Депрограммирование положения нижней челюсти в суставе', '2000'],
        ['А02.07.010', 'Получение центрального соотношения нижней челюсти в суставе', '5000'],
        ['А06.30.002.001', 'Интерпретация КЛКТ сустава', '2000'],
        ['А02.07.006.01', 'Пространственное определение положения нижней челюсти в ВНЧС(с помощью силиконовых байтов в специальном приборе артикулятор)', '10000'],
        ['А02.07.006.03', 'Изготовление каппы', '10000'],
        ['А02.07.001.001', 'Диагностическое восковое моделирование (1единица)', '2000'],
        ['А02.07.001.002', 'Перенос воскового моделировавния в полость рта (1единица)', '2500'],
        ['А16.07.005', 'Корнки пластмассовые временные (1 единица)', '2500'],
        [' ', 'План лечения (по времени и по клиническим манипуляциям) и финансовый план лечения на основании диагноза', '0'],
        [' ', '    Выдача справок', '500'],
    ],
}

for (let key in priceSpec) {
    
    let row = document.createElement('tr')
    if (`${key}` !== ''){
    row.innerHTML = `<td colspan="3" class="namespec">${key}</td>`}
    document.querySelector('.price__table-spec').append(row)
    for (let i = 0; i < priceSpec[key].length; i++) {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${priceSpec[key][i][0]}</td>
        <td>${priceSpec[key][i][1]}</td>
        <td>${priceSpec[key][i][2]}</td>
        `
        document.querySelector('.price__table-spec').append(row)
    }
}

