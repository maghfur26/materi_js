import {Say} from "./script/say.mjs";

let waktu = prompt("sekarang pagi/siang/malam: ")
let nama = prompt("masukan nama: ")
const ucap = new Say(waktu, nama)

if(ucap.waktu == "pagi"){
    alert(ucap.pagi())
}else{
    alert(ucap.malam())
}

const h1 = document.querySelector('h1');
h1.textContent+= nama //hanya menambahkan saja
h1.innerHTML = `Hello ${nama}` //innerHTML untuk merubah semua kontennya