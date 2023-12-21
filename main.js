const imgBox = document.getElementById('imgBox')
const qrImage = document.getElementById('qrImage')
const myText = document.getElementById('qrtext')

function generateqr(){
    if(myText.value.length > 0){

        qrImage.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + myText.value ;
        imgBox.classList.add("show-img")
    }
}