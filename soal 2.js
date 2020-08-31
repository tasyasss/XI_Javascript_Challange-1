console.log('\n>>> soal 2');
console.log('');

let barang = [
    [["beras"], [10000], [5]],
    [["gula"], [14000], [5]],
    [["telur"], [20000], [2]],
    [["minyak goreng"], [9000], [10]]
]
for (i=0; i<barang.length; i++){
};

console.log('Harga sembako Bu Astuti');
console.log("1. Harga beras:" + barang[0][1]);
console.log("   Beli beras :" + barang[0][2]);
var b = barang[0][1] * barang[0][2];
console.log("   Total harga:" + b);
console.log('');

console.log("2. Harga gula:" + barang[1][1]);
console.log("   Beli gula :" + barang[1][2]);
var g = barang[1][1] * barang[1][2];
console.log("   Total harga:" + g);
console.log('');

console.log("3. Harga telur:" + barang[2][1]);
console.log("   Beli telur :" + barang[2][2]);
var t = barang[2][1] * barang[2][2];
console.log("   Total harga:" + t);
console.log('');

console.log("4. Harga minyak goreng:" + barang[3][1]);
console.log("   Beli minyak goreng :" + barang[3][2]);
var m = barang[3][1] * barang[3][2];
console.log("   Total harga:" + m);
console.log('');

console.log('Total belanja Bu Astuti: ' + (b + g + t + m));
