function pagarComPix(){
let preco = Number(document.getElementById("preco").value)
let frete = Number(document.getElementById("frete").value)
valorAPagar = (preco * 0.90) + frete
document.innerText = `${valorAPagar}`
}
