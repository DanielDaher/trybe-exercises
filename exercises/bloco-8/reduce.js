const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumOfPairs = (array) => array.reduce((a, b) => {
        if (b % 2 !== 0) {
            b = 0;
        }
   return a + b;
});

console.log(sumOfPairs(numbers));
