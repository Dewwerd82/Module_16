/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}
`;
// console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);
// console.log('data', data);
const book = data.book;
// console.log('book', book);


/* Этап 3. Запись данных в результирующий объект */
const student = {
    name: data.name,
    age: data.age,
    skills: data.skills[0] + " " + data.skills[1] + " " + data.skills[2],
    salary: Number(data.salary),
};
console.log(student);

let json = JSON.stringify(student);
console.log(json);