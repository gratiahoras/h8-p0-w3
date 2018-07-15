function targetTerdekat(arr) {
    // you can only write your code here!
    var x = 0
    var temp = []
    var temp1 = 0
    var capek =0
    var hasil = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] == 'o'){
            temp[x] = i;
            temp1 = i
            x++;
        }if (arr[i] == 'x') {
            temp[x] = i
            x++;
        }
     }
    for (var j = 0; j < temp.length; j++) {
         if (temp[j] != temp1) {
             if(temp[j] < temp1){
                capek = temp1 - temp[j];
             }if(temp[j] > temp1){
                capek = temp[j] - temp1;
            }if(hasil == 0){
                hasil = capek;
            }if(capek < hasil){
                hasil = capek
            }
         }   
    }
    return hasil
  }

  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2