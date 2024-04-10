function cocherImage() {
    if (document.getElementById('coche1').checked) {
        document.getElementById('image1').style.display="block";
    } else {
        document.getElementById("image1").style.display="none";
    }
    if (document.getElementById('coche2').checked) {
        document.getElementById('image2').style.display="block";
    } else {
        document.getElementById("image2").style.display="none";
    }
    if (document.getElementById('coche3').checked) {
        document.getElementById('image3').style.display="block";
    } else {
        document.getElementById("image3").style.display="none";
    }
}
