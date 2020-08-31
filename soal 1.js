console.log('\n>>> soal 1');
console.log('');

var p = 20.5, l = 30;
console.log('Panjang tanah: '+ p +' meter');
console.log('Lebar tanah  : '+ l +' meter');
console.log('');

var lu = p * l;
console.log('Luas tanah   : '+ lu +' meter2');

var h = 1500000;
console.log('Harga tanah  : '+ h +'/meter2');
console.log('');

var ppn = 0.15;
var exc = lu * h;
var inc = exc * ppn;
var ttl = exc + inc;
console.log('Harga tanah (exc ppn)  : ');
console.log('   '+ exc +'/meter2');
console.log('Harga tanah (exc ppn)  : ');
console.log('   '+ ttl +'/meter2');
