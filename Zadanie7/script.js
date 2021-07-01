const btn = document.querySelector('.j-btn');
const input = document.querySelector('#input');
const userId = document.querySelector('.userID');

//let numId = Number(document.getElementById("input").value);

//console.log(input.value);
// Функция, которая возвращаем fetch
const useRequest = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/3/todos')
        .then((response) => {
            //console.log('response', response);
            return response.json();
        })
        .then((json) => {

            let numIdprompt = Number(prompt("Enter number"));

            for (let i = 0; i < json.length; i++) {
                if (numIdprompt == json[i].id) {
                    document.querySelector('.userID').innerHTML = Number(json[i].userId);
                    document.querySelector('.id').innerHTML = Number(json[i].id);
                    document.querySelector('.title').innerHTML = json[i].title;
                    document.querySelector('.completed').innerHTML = json[i].completed;
                    break;
                } else {
                    console.log('Пользователь с указанным id не найден');

                }

            }

            return json;
        })
        .catch(() => { console.log('error') });
}

btn.addEventListener('click', async() => {
    const requestResult = await useRequest();
});