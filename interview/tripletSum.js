function tripletSum(x, a) {
  var menor = [];
  for (var w = 0; w < a.length; w++) {
    if (a[w] < x) {
      menor.push(a[w]);
      var suma = 0;
      if (menor.length >= 3) {
        for (var z = 0; z < menor.length; z++) {
          for (var t = 0; t < menor.length; t++) {
            if (t === menor.length - 1) {
              break;
            }
            if (menor[t + 1] === a[w]) {
              break;
            }
            if(z === t + 1){
              break;
            }
            if(z === menor.length - 1){
              break;
            }
            suma = menor[z] + menor[t + 1] + a[w];
            if (suma === x) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
}

console.log(tripletSum(182, [589, 343, 609, 61, 222, 759, 955, 889, 147, 691, 950, 844, 431, 621, 749, 68, 537, 784, 36, 227, 186, 39, 854, 630, 225, 749, 924, 360, 258, 767, 945, 956, 319, 727, 412, 26, 356, 2, 550, 497, 585, 516, 965, 343, 76, 914, 143, 197, 949, 73]))
