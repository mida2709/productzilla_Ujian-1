var hargaBaju = 75000;
var hargaCelana = 120000;
var hargaTas = 250000;

var jumlahBaju = 3;
var jumlahCelana = 2;
var jumlahTas = 1;


if (totalHarga > 500000) {
   
    var hargaSetelahDiskon = totalHarga * 0.9;
    console.log("Selamat, Anda mendapatkan diskon 10%!");
    console.log("Total harga belanjaan sebelum diskon: " + totalHarga + " rupiah");
    console.log("Total harga belanjaan setelah diskon: " + hargaSetelahDiskon + " rupiah");
} else {
    console.log("Total harga belanjaan: " + totalHarga + " rupiah");
}