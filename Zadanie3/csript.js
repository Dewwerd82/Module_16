const spisokOne = document.querySelector('.first');
const spisokTwo = document.querySelector('.second');
const spisokThree = document.querySelector('.third');
const spisokFour = document.querySelector('.fourth');
const butOnLoad = document.querySelector('.onLoad');

var yearSelect = myForm.select;
//-------------------------------------------------------
function changeOption() {
    var selection = document.getElementById("selection");
    var selectedOption = yearSelect.options[yearSelect.selectedIndex];
    selection.textContent = "Вы выбрали: " + selectedOption.text;
    xmlHttpR(yearSelect.selectedIndex);
}
yearSelect.addEventListener("change", changeOption);

//----------------------------------------------------
function xmlHttpR(index) {

    // Создаем экзепляр класса XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // Инициализируем запрос
    xhr.open('GET', 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440');

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
            console.log('Результат: ', data[index]);
            console.log(data[index].sales.q1);
            spisokOne.innerHTML = data[index].sales.q1;
            spisokTwo.innerHTML = data[index].sales.q2;
            spisokThree.innerHTML = data[index].sales.q3;
            spisokFour.innerHTML = data[index].sales.q4;
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
//-----------------------------------------------------
butOnLoad.addEventListener('click', function() {
    xmlHttpR(yearSelect.selectedIndex);
});