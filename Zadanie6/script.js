function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let num = getRandomIntInclusive(0, 100);

console.log(num);

function numbers(num) {
    if (num != 0) {
        let n = num % 2;
        if (n > 0) {
            return false
        } else {
            return true;
        }
    }
};
// Внимательно посмотрите за очередностью выводимых в консоль данных

// Функция выполнения promise
function usePromise() {
    // Создаем promise
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numbers(num)) {
                resolve(`Сгенерированное число —  ${num}`);
            } else {
                reject(`Сгенерированное число —  ${num}`);
            }
        }, 3000);
    });

    // Выполняем promise
    myPromise
        .then((result) => {
            console.log('Завершено успешно.', result);
        })
        .catch((error) => {
            console.log('Завершено с ошибкой.', error);
        })
        .finally(() => {

        });
};

usePromise();