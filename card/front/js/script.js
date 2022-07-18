let user = JSON.parse(localStorage.getItem('todos')) || []

let Email_user = document.querySelectorAll('.Email_user')
Email_user.forEach(item => {
    item.innerHTML = user.Email
})
let user_name = document.querySelector('.user_name')
user_name.innerHTML = user.name
let close = document.querySelector('.close')
close.onclick = () => {
    localStorage.clear()
}

let url_card = 'http://localhost:3001/cards'

function react() {
    axios.get(url_card)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                card(res.data)
            }
        })
}

react()

let main_my_cards = document.querySelector('.main_my_cards')

function card(arr) {
    main_my_cards.innerHTML = ""
    for (let item of arr) {
        main_my_cards.innerHTML += `
        <div class="cards">
        <div class="cards_top">
            <span class="span_Visa">${item.card}</span>
        </div>
        <div class="cards_bottom">
            <span class="span_valuta">${item.currency}</span>
        </div>
    </div>
        `
    }
}

// transactions

let url = 'http://localhost:3001/transactions'

function vue() {
    axios.get(url)
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                Money(res.data)
            }
        })
}

vue()

let footer_tranacsion_item = document.querySelector('.footer_tranacsion_item')

function Money(product) {
    footer_tranacsion_item.innerHTML = ""
    for (let item of product) {
        footer_tranacsion_item.innerHTML += `
        <div class="tranacsion_item">
            <div class="tranacsion_item_block">
            <div class="tranacsion_item_id">
                <span>${item.id}</span>
            </div>
            <div class="tranacsion_item_visa">
                <span>${item.cardName}</span>
            </div>
            <div class="tranacsion_item_category">
                <span>${item.category}</span>
            </div>
            <div class="tranacsion_item_money">
                <span>${item.TransactionAmount}</span>
            </div>
            <div class="tranacsion_item_time">
                <span>${item.time}</span>
            </div>
            </div>
            <div class="block_list">
                <hr>
            </div>
            </div>
        `
    }
}