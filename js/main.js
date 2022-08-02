let button1 = document.getElementById('dodaj');
let button2 = document.getElementById('usun');
let text = document.getElementById('tekst');

button1.onclick = function () {
    text.innerText = "Pewnego dnia młody programista obudził się wcześnie rano i wyjrzał przez okno...";
} 

button2.onclick = function () {
    text.innerText = "";
}
