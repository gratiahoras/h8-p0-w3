function groupAnimals(animals) {
    // you can only write your code here!
    var hurufAwal = []
    var containerAnimals = []
    var container = []
    animals.sort(function(value1, value2) {return value1 > value2 });
    for (var i = 0; i < animals.length; i++) {
      hurufAwal.push(animals[i][0])
    }
    var current = null;
    var counter = 0;
    for (var j = 0; j < animals.length; j++) {
      if (hurufAwal[j] != current) {
        if (counter > 0) {
          container.push(current)
        }
      current = hurufAwal[j];
      counter = 1;
      }
    }
    if (counter > 0) {
      container.push(current)
    }
    for (var k = 0; k < container.length; k++) {
      containerAnimals.push([])
    }
    for (var l = 0; l < animals.length; l++) {
      for (var m = 0; m< animals.length - 1; m++) {
        if (animals[l][0] == container[m]) {
          containerAnimals[m].push(animals[l])
        }
      }
    }
    return containerAnimals;
  }
  // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]