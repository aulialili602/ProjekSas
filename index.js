daftarPeserta =[
    {
        nama: "Vea Zahra", 
        kota:"Bandung",
        asalsekolah:"SMA 1 Darmawangsa",
        kontak:"08234335221",
        lomba: "Matematika",
       
    },
       {
        nama: "Redan Zari", 
        kota:"Bandung",
        asalsekolah:"SMA 1 Wisnu",
        kontak:"082345529768",
        lomba: "Bahasa Indonesia",
       },

       {
        nama: "Vaby Gahar", 
        kota:"Bandung",
        asalsekolah:"SMA 1 Cirasa",
        kontak:"08234119870",
        lomba: "PPKN",

       }
]
let mode ='tambah'

const tampilkanPeserta=() =>{
    const tblPeserta = document.getElementById('tblPeserta')
    tblPeserta.innerHTML =' <tr> <th>no</th><th>nama</th><th>kota</th><th>Sekolah</th><th>Kontak</th><th>lomba</th><th>Edit</th><th>hapus</th></tr> '
    // menambah
    for (let idx in  daftarPeserta) {
        console.log(`${parseInt(idx) + 1}.nama${daftarPeserta[idx].nama} kota ${daftarPeserta[idx].kota} asal sekolah${daftarPeserta[idx].asalsekolah} kontak${daftarPeserta[idx].kontak}lomba${daftarPeserta[idx].lomba}`)
       tblPeserta.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarPeserta[idx].nama}</td><td>${daftarPeserta[idx].kota}</td><td>${daftarPeserta[idx].asalsekolah}</td><td>${daftarPeserta[idx].kontak}</td><td>${daftarPeserta[idx].lomba}</td><td><button class="btn btn-warning" onclick="editPeserta('${daftarPeserta[idx].nama}')">Edit</button></td></td><td><button class= "btn btn-danger" onclick="hapusPeserta('${daftarPeserta[idx].nama}')">Delete</button></td></tr>`
    }
}
// tambah peserta
const tambahPeserta=() =>{
    const nama = document.getElementById('textNama').value;
    const kota = document.getElementById('textKota').value;
    const asalsekolah = document.getElementById('textAsalsekolah').value;
    const kontak = document.getElementById('textKontak').value;
    const lomba = document.getElementById('textLomba').value;

    const pesertaBaru ={
        nama: nama,
        kota: kota,
        asalsekolah: asalsekolah,
        kontak: kontak,
        lomba: lomba,
    }
    if (mode == 'tambah'){
      daftarPeserta.push(pesertaBaru)
     }else{
      // jika edit
      daftarPeserta[mode] = pesertaBaru
 } 
 document.getElementById('textNama').value;
 document.getElementById('textKota').value;
 document.getElementById('textAsalsekolah').value;
 document.getElementById('textKontak').value;
 document.getElementById('textLomba').value;
 mode ='tambah';

 tampilkanPeserta()
}

const cariIndex = (nama) => {
    for (let i = 0; i<daftarPeserta.length; i++) {
        if (daftarPeserta[i].nama == nama ) {
           return i
        
        }
    }
 }

  //delet
  const hapusPeserta = (target) => {
    const indexDihapus = cariIndex(target)
    if (indexDihapus !== -1){
    daftarPeserta.splice(indexDihapus, 1)
    tampilkanPeserta(); 
    }
 }

 const editPeserta =(target) => {
    const indexEdit = cariIndex(target)
    console.log(target)
    console.log(indexEdit)
    console.log(daftarPeserta[indexEdit])

    const pesertaDiedit = daftarPeserta[indexEdit]

    document.getElementById('textNama').value=pesertaDiedit.nama
    document.getElementById('textKota').value=pesertaDiedit.kota
    document.getElementById('textAsalsekolah').value=pesertaDiedit.asalsekolah
    document.getElementById('textKontak').value=pesertaDiedit.kontak
    document.getElementById('textLomba').value=pesertaDiedit.lomba
    
   mode = indexEdit
 }

 const batalEdit = () => {
    document.getElementById('textNama').value=""
    document.getElementById('textKota').value=""
    document.getElementById('textAsalsekolah').value=""
    document.getElementById('textKontak').value=""
    document.getElementById('textLomba').value=""
 }

 let daftarPeserta = 0;

 conts 