/*
    ===========
    Bar X dan O
    ===========
    program ini berfungsi mengenerate Persegi Panjang dengan Character O dan X
    [INSTRUCTION]
    diberikan 2 buah parameter untuk mengenerate Bar 
    - p => panjang
    - t => tinggi 
    character yang pertama kali di cetak adalah x , 
    lalu o dan setelah itu o kemudian kembali lagi ke x 
    [EXAMPLE]
    input: p = 4, t = 3
    output: 
    xoox
    ooxo
    oxoo
    xoox

    input: p = 6, t = 4
    output: 
    xooxoo
    xooxoo
    xooxoo
    xooxoo
*/

var p = 6;
var t = 4;
var kata = 'xoo';
var hurufKe = 0;

//Baris
for (var i = 0; i < t; i++) {
    var baris = "";
    //Kolumn
    for ( var j = 0; j < p; j++) {
        baris += kata[hurufKe];
        hurufKe += 1;
        if (hurufKe === 3) {
            hurufKe = 0;
        }
    }
    console.log(baris);
}

// CODE HERE