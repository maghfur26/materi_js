export class Say{
    constructor(waktu, nama){
        this.nama = nama;
        this.waktu = waktu;
    }

    pagi() {
        return `selamat ${this.waktu} ${this.nama} 🧡`
    }

    malam(){
        return `selamat tidur ${this.nama}`
    }
}