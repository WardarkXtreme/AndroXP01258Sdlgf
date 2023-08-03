const paidPrice = document.getElementById("render-cash");
const pricePound = document.getElementById("render-price");
const calc = document.getElementById("result")

const btnMoreCash = document.getElementById("btn_more1")
const btnLessCash = document.getElementById("btn_less1")
const valueCash = document.getElementById("cash_select")
const btnMorePrice = document.getElementById("btn_more2")
const btnLessPrice = document.getElementById("btn_less2")
const valuePrice = document.getElementById("price_select")

let paid =0;
let price =0;

btnMoreCash.addEventListener('click', (e) => {
    e.preventDefault()
    paid = paid + parseFloat(valueCash.value) * 100
    paidPrice.innerHTML = euro.format(paid /100).toString()
    console.log(paid)
})
btnLessCash.addEventListener('click', (e) => {
    e.preventDefault()
    paid = paid - parseFloat(valueCash.value) * 100
    paidPrice.innerHTML = euro.format(paid /100).toString()
    console.log(paid)
})

btnMorePrice.addEventListener('click', (e) => {
    e.preventDefault()
    price = price + parseFloat(valuePrice.value)
    pricePound.innerHTML = euro.format(price /100).toString()
    console.log(price)
})
btnLessPrice.addEventListener('click', (e) => {
    e.preventDefault()
    price = price - parseFloat(valuePrice.value) 
    pricePound.innerHTML = euro.format(price /100).toString()
    console.log(price)
})
const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
});



calc.addEventListener('click', (e) => {
    e.preventDefault()
    let result = paid * (100 / price) 
    result = (result/100).toFixed(2)
    document.getElementById("render").innerHTML= (result)
})