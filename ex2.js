function balikString(input) {
    var row = input.length - 1;
    for (var i = 1; i <= 1;i++) {
        var kosong = '';
        for(var j = row; j >= 0; j--) {
        kosong += input[j];
        }
    }
return kosong;
}


console.log(balikString('Hello World!'))

console.log('----------');
