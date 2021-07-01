/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
<list>
    <STUDENT>
        <name lang = "en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </STUDENT> 
    <STUDENT>
        <name lang = "ru">
            <first>Пётр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </STUDENT>   
</list>
`;
// console.log('xmlString', xmlString);
let list = {};
let arr = [];
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

for (let i = 0, j = 0; i < xmlDOM.getElementsByTagName("list")[0].children.length; i++) {
    var listNode = xmlDOM.getElementsByTagName("list")[0];
    var studentNode = xmlDOM.getElementsByTagName("STUDENT")[i];
    var nameNode = xmlDOM.getElementsByTagName("STUDENT")[i].children[j];
    var fnameNode = xmlDOM.getElementsByTagName("STUDENT")[i].childNodes[1].children[j];
    var lnameNode = xmlDOM.getElementsByTagName("STUDENT")[i].childNodes[1].children[j + 1];
    var ageNode = xmlDOM.getElementsByTagName("STUDENT")[i].children[j + 1];
    var profNode = xmlDOM.getElementsByTagName("STUDENT")[i].children[j + 2];
    var nameAttr = nameNode.getAttribute('lang');

    var student = {
        lang: nameAttr,
        fname: fnameNode.textContent,
        lname: lnameNode.textContent,
        age: Number(ageNode.textContent),
        prof: profNode.textContent,
    };
    arr[i] = student;
}
console.log("list", arr);