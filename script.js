function hitung(){

    let pelanggan = document.getElementById("pelanggan").value;
    let produk = document.getElementById("produk").value;
    let harga = document.getElementById("harga").value;
    let jumlah = document.getElementById("jumlah").value;

    if(pelanggan=="" || produk=="" || harga=="" || jumlah==""){
        alert("Semua input wajib diisi!");
        return;
    }

    harga = parseFloat(harga);
    jumlah = parseInt(jumlah);

    let totalBelanja = harga * jumlah;
    let potongan = 0;

    if(totalBelanja >= 400000){
        potongan = totalBelanja * 0.10;
    }else{
        potongan = 0;
    }

    let totalBayar = totalBelanja - potongan;

    document.getElementById("hasil").style.display="block";

    document.getElementById("hPelanggan").innerHTML = pelanggan;
    document.getElementById("hProduk").innerHTML = produk;

    document.getElementById("hTotal").innerHTML =
        "Rp " + totalBelanja.toLocaleString('id-ID');

    document.getElementById("hPotongan").innerHTML =
        "Rp " + potongan.toLocaleString('id-ID');

    document.getElementById("hBayar").innerHTML =
        "Rp " + totalBayar.toLocaleString('id-ID');

}

function resetHasil(){

    document.getElementById("hasil").style.display="none";

}