// Desafio 2 - Part I
document.querySelector("#album").addEventListener("click", () => {
  if (album.style.border === "") {
    album.style.border = "2px solid red";
    document.querySelector("#contenedorImg").style.background = "black";
  } else {
    album.style.border = "";
    document.querySelector("#contenedorImg").style.background = "white";
  }
});

// Desafio 2 - Part II
const input1 = document.querySelector("#o1");
const input2 = document.querySelector("#o2");
const input3 = document.querySelector("#o3");
/*  */
document.querySelector("#bCheck").addEventListener("click", () => {
  const suma = +input1.value + +input2.value + +input3.value;
  const cantidad = document.querySelector("#text");
  if (suma <= 10 && suma >= 1) {
    cantidad.textContent = `Llevas ${suma} stickers`;
  } else if (suma > 10) {
    cantidad.textContent = `Llevas demasiados stickers`;
  } else {
    cantidad.textContent = `Debes llevar al menos 1 Sticker`;
  }
});

// Desafio 2 - Part III
document.querySelector("#bAdd").addEventListener("click", () => {
  const s1 = document.querySelector("#s1");
  const s2 = document.querySelector("#s2");
  const s3 = document.querySelector("#s3");
  const message = document.querySelector("#message");

  const pass1 =
    s1.selectedIndex == 9 && s2.selectedIndex == 1 && s3.selectedIndex == 1;
  const pass2 =
    s1.selectedIndex == 7 && s2.selectedIndex == 1 && s3.selectedIndex == 4;
  const reset = [(s1.value = 0), (s2.value = 0), (s3.value = 0)];

  if (pass1 === true) {
    document.querySelector("#title").textContent = "FELICIDADES!!";
    document.querySelector("#title").style.fontWeight = "bold";
    document.querySelector(".d3P3").style.background = "black";
    document.querySelector(".d3P3").style.color = "white";
    message.textContent = `Password 1 correcto`;
    reset;
  } else if (pass2 === true) {
    document.querySelector("#title").textContent = "FELICIDADES!!";
    document.querySelector("#title").style.fontWeight = "bold";
    document.querySelector(".d3P3").style.background = "black";
    document.querySelector(".d3P3").style.color = "white";
    message.textContent = `Password 2 correcto`;
    reset;
  } else {
    document.querySelector("#title").textContent =
      "Ingresa nuevamente el password";
    document.querySelector("#title").style.fontWeight = "bold";
    message.textContent = `Password incorrecto`;
    reset;
  }
});
