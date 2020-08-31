console.log('\n>>> soal 3');
console.log('');

var tb = 1.7, bb = 90;
console.log('Tinggi badan: '+ tb +' m');
console.log('Berat badan : '+ bb +' kg');
console.log('');

var bmi = bb / (tb * tb);
console.log('BMI = bb/(tb*tb)');
console.log('    = ' + bb + "/(" + tb + "*" + tb + ")");
console.log('    = ' + bmi);
console.log('');

// tb 170 cm
// bb 90 kg
// bmi = bb / (tb * tb)

// bmi
if (bmi > 0 && bmi < 18.5) {
    console.log('Status BB Anda: Kekurangan berat badan');
}

else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log('Status BB Anda: Ideal');
}

else if (bmi >=25 && bmi <= 29.9) {
    console.log('Status BB Anda: Kelebihan berat badan');
}

else {
    console.log('Status BB Anda: Obesitas');
}