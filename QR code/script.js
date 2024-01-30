const generateBtn=document.querySelector("form button");
const qrCodeBox=document.querySelector(".qr-code")
const qrCodeInput=document.querySelector("form input")
const qrimage=document.querySelector(".qr-code img")


   generateBtn.addEventListener("click",  ()=>{
let qrvalue=qrCodeInput.value;
if(!qrvalue){
return alert("لطفا یک متن یا آدرس اینترنتی وارد کنید!")
}
generateBtn.innerHTML="درحال تولیدQR Code"

qrimage.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`

qrimage.addEventListener("load",()=>{
    qrCodeBox.classList.remove("hidden");
    generateBtn.innerHTML=" تولیدQR Code"
})
 qrCodeInput.addEventListener("keyup",()=>{
    if(!qrCodeInput.value){
        qrCodeBox.classList.add("hidden");
    }
 })
   })