const wrapper = document.querySelector(".wrapper"),
qrInput = document.querySelector(".form input"),
generateBtn = document.querySelector(".form .generate-btn"),
qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    //if field is black then do nothing
    if(!qrValue) return"";
    else{generateBtn.innerText = "Generating QR Code..."}
    //qrImg will equal to this Api with value of whatever we type
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    
    //once QR Code Img loaded
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");//add class to show the qr-codeimage   
        generateBtn.innerText = "Generate QR Code";

        
    })
    
})

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})