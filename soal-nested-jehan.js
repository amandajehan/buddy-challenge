/**
 * Seorang gamer direpresentasikan oleh JavaScript memiliki variable nama dan
 * peran. Ia ingin masuk ke dalam permainan, namun permainan itu memiliki
 * kondisi sebagai berikut:
 *
 * 1. Jika nama tidak ada tampilkan di console "Nama harus diisi!"
 *    Jika nama tidak kosong lanjut ke step ke 2 
 * 2. Jika peran tidak ada tampilkan di console "Halo `nama`, Pilih peranmu
 *    untuk memulai game!"
 *    Jika peran tidak kosong lanjut ke step ke 3
 * 3. Jika peran 'ksatria' maka tampilkan "Selamat datang di Dunia Proxytia, 
 *    `nama`"
 *    Tampilkan juga "Halo `peran` `nama`, kamu dapat menyerang dengan
 *    senjatamu!"
 * 4. Jika peran 'tabib' maka tampilkan "Selamat datang di dunia Proxytia,
 *    `nama`"
 *    Tampilkan juga "Halo `peran` `nama`, kamu akan membantu temanmu yang
 *    terluka."
 * 5. Jika peran 'penyihir' maka tampilkan "Selamat datang di dunia Proxytia,
 *    `nama`"
 *    Tampilkan juga "Halo `peran` `nama`, ciptakan keajaiban yang membantu
 *    kemenanganmu!"
 * 6. Jika peran bukan ketiga itu maka tampilkan "Halo `nama`, Peran yang
 *    dapat kamu pilih adalah Ksatria, Tabib, atau Penyihir"
 */
let name = '';
let job = 'ksatria';


if (name) {
    if (job) {
        switch (job) {
            case 'ksatria':
                console.log('Selamat datang di Dunia Proxytia, ' + name);
                console.log('Halo ' + job + ' ' + name + ', kamu dapat menyerang dengan senjatamu!');
                break;
            case 'tabib':
                console.log('Selamat datang di dunia Proxytia, ' + name);
                console.log('Halo ' + job + ' ' + name +', kamu akan membantu temanmu yang terluka.');
                break;
            case 'penyihir':
                console.log('Selamat datang di dunia Proxytia, ' + name);
                console.log('Halo ' + job + ' ' + name +', ciptakan keajaiban yang membantu kemenanganmu!');
                break;
            default:
                console.log('Halo ' + name + ' , Peran yang dapat kamu pilih adalah Ksatria, Tabib, atau Penyihir');
                break;
        }
    } else {
        console.log('Halo ' + name + ', Pilih peranmu untuk memulai game!');
    }
} else {
    console.log('Nama harus diisi!');
}
