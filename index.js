const paidPrice = document.getElementById("render-cash");
const pricePound = document.getElementById("render-price");
const calc = document.getElementById("result")

let paid;
let price;

const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
});
function showVal(newVal){
    paidPrice.innerHTML = euro.format(newVal).toString();
    paid = parseFloat(newVal) * 100
}
function showVal2(newVal2){
    pricePound.innerHTML= euro.format(newVal2).toString();
    price = parseFloat(newVal2) * 100
}
calc.addEventListener('click', (e)=> {
    e.preventDefault()
    let result = paid * (100 / price) 
    result = (result/100).toFixed(2)
    document.getElementById("render").innerHTML= (result)
})