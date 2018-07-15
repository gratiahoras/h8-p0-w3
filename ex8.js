function pasanganTerbesar(num) {
    // you can only write your code here!
    var temp =''
    var str = num.toString();
    var num1 = 0
    for (var i = 0; i < str.length-1; i++) {        
            temp = str[i] + str[i+1];
            if(num1 < temp){
                num1 = temp;
            }
    }
    return num1;  
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99