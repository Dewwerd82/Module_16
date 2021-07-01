//localStorage.clear()
let a = {};
let date = new Date();


const myName = localStorage.getItem('myName');
let dateVisit = localStorage.getItem('dateVisit');

if (myName) {
    // Если данные в localStorage есть - просто выводим их
    //console.log('Name', myName);
    //console.log('dateVisit', dateVisit);

    alert(`Добрый день, ${myName} ! Давно не виделись. В последний раз вы были у нас  ${dateVisit}`);
    dateVisit = date.toString();
    localStorage.setItem('dateVisit', dateVisit)
} else {
    let name = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
    // Записываем результат запроса в localStorage
    localStorage.setItem('myName', name);
    dateVisit = date.toString();
    localStorage.setItem('dateVisit', dateVisit);
    console.log('Name', myName);
    console.log('dateVisit', dateVisit);
};