const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = document.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return ""; //if input is empty, return ""(Do nothing)
    else generateBtn.innerText = "Generating QR CODE..."
    //Paste API for qrcode, whatever value is enter, It will show its Specific QR Code
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    //Once QR Code img loaded
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generating QR CODE"
    })
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value) {
        wrapper.classList.remove("active")
    }
})