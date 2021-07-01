const pages = document.querySelector('.pages');
const limit = document.querySelector('.limit');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

let myUrl = localStorage.getItem('myUrl');
var url = 'https://picsum.photos/v2/list?';
var str = '';

function xmlHttpR() {

    // Создаем экзепляр класса XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // Инициализируем запрос
    xhr.open('GET', str);

    // Добавляем обрабочик ответа сервера
    xhr.onload = function() {
        if (xhr.status != 200) { // HTTP ошибка?
            // Если статус не 200 (указывает, что запрос выполнен успешно),
            // то обрабатываем отдельно
            console.log('Статус ответа: ', xhr.status);
        } else {
            // Ответ мы получаем в формате JSON, поэтому его надо распарсить
            // console.log('Ответ сервера JSON', xhr.response);

            // Парсим и выводим ответ сервера
            const data = JSON.parse(xhr.response);
            console.log('Результат: ', data);
            //Очищаем список
            //---------------------------------------------------------------
            while (result.firstChild) {
                result.removeChild(result.firstChild);
            }
            //Создаём динамически список фото по результату запроса
            //--------------------------------------------------------------
            for (let i = 0; i < data.length; i++) {
                var ul__List = document.createElement('ul');
                ul__List.className = "ullist";
                result.appendChild(ul__List);
                //-------------------------
                var li = document.createElement('li');
                li.className = "li__item";
                ul__List.appendChild(li);
                //-------------------
                var div__Info = document.createElement('div');
                div__Info.className = "div__info";
                li.appendChild(div__Info);
                //---------------
                var imgIndex = document.createElement('img');
                div__Info.appendChild(imgIndex);
                //---------------------
                imgIndex.src = data[i].download_url;
                imgIndex.alt = data[i].download_url;
                //Слишком большие размеры
                imgIndex.width = Number(data[i].width / 10);
                imgIndex.height = Number(data[i].height / 10);
            }
        }
    };

    // Добавляем обрабочик процесса загрузки
    xhr.onprogress = function(event) {
        // Выведем прогресс загрузки
        console.log(`Загружено ${event.loaded} из ${event.total}`)
    };

    // Добавляем обрабочик ошибки
    xhr.onerror = function() {
        // обработаем ошибку, не связанную с HTTP (например, нет соединения)
        console.log('Ошибка! Статус ответа: ', xhr.status);
    };

    // Отправляем запрос
    xhr.send();
}

function typeNumPages_Limit(x) {
    if (typeof x === 'number' && !isNaN(x) && x > 0) {
        return true
    } else {
        alert('Число вне диапазона 1 - 10 !!!!!!!');
        return false;
    }
};

function rangeNumPages_Limit(x) {
    if (x > 0 && x <= 10) {
        return true
    } else {
        alert('Число вне диапазона 1 - 10');
        return false;
    }
}

btn.addEventListener('click', () => {

    var numPages = Number(pages.value);
    var numLimit = Number(limit.value);
    if (typeNumPages_Limit(numPages) && rangeNumPages_Limit(numLimit)) {
        str = url + 'page=' + String(numPages) + '&' + 'limit=' + String(numLimit);
    }
    //Дбавляем в память адресс
    localStorage.setItem('myUrl', str);


    xmlHttpR();
});

if (myUrl) {
    // Если данные в localStorage есть - просто выводим их
    str = myUrl;
    xmlHttpR();
} else {
    // Записываем результат запроса в localStorage
    localStorage.setItem('myUrl', str);
};