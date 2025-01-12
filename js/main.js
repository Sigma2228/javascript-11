const bankAccount = {
    ownerName: 'Олександр',
    accountNumber: 'GGHJK12345',
    balance: 100,


    deposit(amount) {
        this.balance += amount
        alert(`Ви успішно поповнили рахунок поточний баланс ${this.balance}`)
    },

    withdraw(amount) {
        if (amount > this.balance) {
            alert(`не вистачає грошей на рахунку`)
        }
        else {
            this.balance -= amount
            alert(`Гроші знято! Поточний баланс: ${this.balance} грн`);
        }
    }
}

document.getElementById('plusButton').addEventListener('click', function () {
    const amount = Number.parseFloat(prompt('введіть суму поповнення'));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.deposit(amount)
    }
    else {
        alert('введіть коректну суму')
    }

})
document.getElementById('minusButton').addEventListener('click', function () {
    const amount = parseFloat(prompt('введіть суму зняття'));
    if (!isNaN(amount) && amount > 0) {
        bankAccount.withdraw(amount);
    } else {
        alert('Некоректна сума!');
    }
});


const weather = {
    temperature: 25,
    windSpeed: 7,
    humisity: 30,
}
function plusMinus(temperature) {
    const message = document.getElementById('message')
    if (temperature < 0) {
        message.textContent = 'температура нижче 0 градусів Цельсія'
        return true;
    }
    else {
        message.textContent = 'температура вижче 0 градусів Цельсія'
        return false;
    }
}

document.getElementById('confirmButton').addEventListener('click', function () {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    if (!isNaN(temperature)) {
        plusMinus(temperature)
    }
    else {
        message.textContent = 'введіть коректне число'
    }
})
const user = {
    name: 'Petro',
    email: 'sigmapetro666@gmail.com',
    password: 'Petro666',


   login(nameInput, emailInput, passwordInput) {
    if(this.name === nameInput && this.email === emailInput && this.password === passwordInput) {
        alert(`ласкаво просимо ${this.name}`);
    }
    else {
        alert('Не вірна інформація')
    }
  }
}

    document.getElementById('loginButton').addEventListener('click', function(){
        const nameInput = document.getElementById('nameInput').value
        const emailInput = document.getElementById('emailInput').value
        const passwordInput = document.getElementById('passwordInput').value
        user.login(nameInput, emailInput, passwordInput)
    })
 

const movie = {
    title: 'Oppenheimer',
    director: 'Christopher Nolan',
    rating: 9
}

function filmRating(rating) {
    if (rating > 8) {
        return true
    }

    else {
        return false
    }
}
document.getElementById('checkButton').addEventListener('click', function () {
document.getElementById('title').style.color = 'green'
const notice = document.getElementById('notice')
  notice.textContent = 'рейтинг фільму 9'
}
)




