funcion pagarcom pix(){
  let preco = document.getElementById("preco").value
  let frete = document.getElementById("frete").value
  let valorPix = (preco * 0.90) + frete
  document.innerText = '${valorPix}'
}
