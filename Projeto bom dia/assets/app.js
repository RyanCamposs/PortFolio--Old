let buttonChange = document.getElementById('btn1');
buttonChange.addEventListener("click", function trocarTexto(){
    let texto = document.getElementById('texto');
    let textoValue = texto.value;
    let res = document.getElementById('changetext');
    res.innerHTML = `"${textoValue}"`
     
})

// Troca de imagens
let imagem = document.getElementById('img1');
let buttonIMG1 = document.getElementById('imagem1');
let buttonIMG2 = document.getElementById('imagem2');

buttonIMG1.addEventListener("click", function changeimg1(){
    imagem.src = 'assets/imagem1.jpg'
})

buttonIMG2.addEventListener("click", function changeimg2() {
   imagem.src = 'assets/imagem2.jpg';
   document.body.style.color = 'black'
   
 })
  