const principal = document.querySelector(".principal"),
qrInput = principal.querySelector(".form input"),
generateBtn = principal.querySelector(".form button"),
qrImg = principal.querySelector(".qrCode img");


generateBtn.addEventListener("click" , () =>{
    let qrValor = qrInput.value;
    if(!qrValor) return;
    generateBtn.innerText = "Gerando um QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValor}`;
    qrImg.addEventListener("load", () => {
        principal.classList.add("ativar");
        generateBtn.innerText = "QR Code gerado!";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        principal.classList.remove("active");
    }
});
