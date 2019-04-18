// cODED By Nii-san Haxor

// Ingat Anda Nub kalo masih recode 

// modules

var shell = require('shelljs' );  // npm insatll shelljs
var warna = require('colors'  );  // npm install colors
var readl = require('readline');  // npm install readline
var ambil = require('request' );  // npm install request
var bacaf = require('fs');

// set colors

warna.setTheme({
  a: ['white', 'bgBlue'],
  b: 'red', c: 'yellow',
  d: 'blue', e: 'green'
});

show = shell.echo; jalan = shell.exec;

const tanya = readl.createInterface({
  input : process.stdin,
  output: process.stdout
});

// start

show('Harap tunggu ...'); jalan('clear');show('');

show('['.b + ' ============================ ' + ']'.b);
show('    ShellFin V.2 ');
show('    Coded By : Nii-sanHaxor ');
show('    Team     : IndoSec ');
show('['.b + ' ============================ ' + ']    '.b);
show('');
show('['.d + '1' + '] '.d + 'START FIND ');
show('['.d + '2' + '] '.d + 'ADD PATH LIST');
show('');
show('['.d + '99' + '] '.d + 'HELP');
show('['.d + '00' + '] '.d + 'QUIT');
show('');


tanya.question('[Root@Users]  > ', (select) => {
  if (`${select}` == 1 || `${select}` == 01) {
    show(''); show('======================='); show('');
    tanya.question('Domain  : ', (domain) => {
      tanya.question('Shell   : ', (shel) => {
        const baris = readl.createInterface({
          input : bacaf.createReadStream('path.txt'),
          crlfDelay : Infinity
        }); baris.on('line', (line) => {
           ambil('http://' + `${domain}` + `${line}` + `${shel}`, function (error, response, body) {
             if (response.statusCode == 200) {
                var berhasil = `[ http://${domain}${line}${shel} ]`;
                bacaf.appendFile('found.txt', berhasil, function (err) {
                  if (err) throw err;
                });
              show('');
              show(` DOMAIN    : ${domain}` );
              show(` SHELL     : ${shel}`   );
              show(` PATH      : ${line}`   );
              show(' STATUS    : ' + '200 (OK)'.e);
             } else {
              show('');
              show(` DOMAIN    : ${domain}`);
              show(` SHELL     : ${shel}`  );
              show(` PATH      : ${line}`  );
              show(' STATUS    : ' + '404 NOT FOUND'.b)
             }
           });
        }); tanya.close();
      });
    });
  } else if (`${select}` == 2 || `${select}` == 2) {
     show(''); show('======================='); show('');
     tanya.question('path   : ', (path) => {
       var isi = `\n${path}`
       bacaf.appendFile('path.txt', isi, function (err) {
         if (err) {
           show(` Gagal menyimpan path ${path}`)
         } else {
           show(''); show('     ['.e + ` ${path} ` + ']      '.e)
           show(''); show('  ' + `path berhasil disimpan`.a);
         }
       }); tanya.close();
     });
  } else if (`${select}` == 99) {
    jalan('clear');show('');
     show('');show('   ['.b + '  ShellFinder By Nii-sanHaxor  V.2' + ']   '.b);
     show(''); 
     show('  Masukan Angka 1 Untuk Menscan Shell Pada Web');
     show('  Masukan Angka 2 Untuk Memperbanyak Path Pada Web ');
     show('  Masukan Angka 99 Untuk Bantuan Menggunakan Tools Ini ');
     show('  Masukan Angka 00 Untuk Keluar Tools Ini '); tanya.close();
     show('');
  } else if (`${select}` == 00 || `${select}` == 0) {
     show(''); show('     ['.b + 'Kenapa Out Onii-chan >,<' + ']'.b);
     show(''); tanya.close();
  } else {
     show(''); show(' ['.c + '×' + '] '.c + '['.c + '  Command not found !  ' + ']'.c + ' ['.c + '×' + '] '.c);
     show(''); tanya.close();
  }
});
