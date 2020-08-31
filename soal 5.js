console.log('\n>>> soal 5');
console.log('');

class lingkaran {
    constructor(r){
        this.r = r;
    }

    luas = () => {
        return 3.14 * (this.r * this.r);
    }

    keliling = () => {
        return 3.14 * (this.r * 2);
    }
}

class bola extends lingkaran{
    constructor(r){
        super(r);
    }

    volume = () => {
        return 4/3 * 3.14 * this.r * this.r * this.r;
    }

    luasPermukaan = () => {
        return 4 * 3.14 * (this.r * this.r);
    }
}

class kerucut extends lingkaran{
    constructor(r,t,s){
        super(r);
        this.t = t;
        this.s = s;
    }

    volume = () => {
        return 3.14 * (this.r * this.r) * this.t / 3;
    }

    luasPermukaan = () => {
        return (3.14 * (this.r * this.r)) + (3.14 * this.r * this.s);
    }

    luasSelimut = () => {
        return 3.14 * this.r * this.s;
    }
}

class tabung extends lingkaran{
    constructor(r,t){
        super(r);
        this.t = t;
    }

    volume = () => {
        return (3.14 * (this.r * this.r)) * this.t;
    }

    luasPermukaan = () => {
        return ((3.14 * (this.r * 2) * this.t) + (2 *(3.14 * (this.r * this.r))));
    }

    luasSelimut = () => {
        return (3.14 * (this.r * 2)) * this.t;
    }
}

console.log('1. Bola');
let ball = new bola (15);
console.log('   Volume : ' + ball.volume());
console.log('   Luas Permukaan : ' + ball.luasPermukaan());
console.log('');

console.log('2. Cone');
let cone = new kerucut (10, 40, 22.3);
console.log('   Volume : ' + cone.volume());
console.log('   Luas Permukaan : ' + cone.luasPermukaan());
console.log('   Luas Selimut :' + cone.luasSelimut());
console.log('');

console.log('3. Gelas');
let gelas = new tabung (7.5, 50);
console.log('   Volume : ' + gelas.volume());
console.log('   Luas Permukaan :' + gelas.luasPermukaan());
console.log('   Luas Selimut : ' + gelas.luasSelimut());