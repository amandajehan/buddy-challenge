/*
    ============
    Generate Bar 
    ============

    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan 
    - p => panjang 
    - t => tinggi 

*/

var p = 10;
var t = 14;

// CODE HERE
if (p > t) {
    for (var i = 0; i < t; i++) {               //Untuk tinggi persegi atau row baru sebanyak t kali
        var line = "";
        for (var j = 0; j < p; j++) {           //untuk panjang persegi atau column baru (menyamping) sebanyak p kali
            if (i === 0 || i === t - 1) {       //jika i awal atau akhir maka print 'o' sebanyak p kali
                line = line + 'o';
            } else {                            //jika 0 < i < t:
                if (j === 0 || j === p - 1) {   //jika j awal atau akhir: akan menambahkan 'o'
                    line = line + 'o';
                } else {                        // jika 0 < j < p: maka tambahkan spasi
                    line = line + " ";
                }
            } 
        }
        console.log(line);
    }
} else {
    console.log('panjang harus lebih besar daripada tinggi');
}



// input: p = 4, t = 3
/* output: 
    oooo
    o  o
    oooo
*/


// input: p = 10, t = 4
/* output: 
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

// input: p = 4, t = 5
// output: panjang harus lebih besar daripada tinggi 