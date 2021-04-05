// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

1
let arr = ['a', 'b', 'c'];

for(let i = 1; i <= 3; i++) {
    arr.push(i)
}
console.log(arr);




// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let num = [1, 2, 3];
let number = [];
for (let i = num.length - 1; i >= 0; i--) {
    number.push(num[i]);
}
console.log(number);




// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.


let numbers = [1, 2, 3];
for (let i = 4; i <= 6; i++) {
    numbers[numbers.length] = i;
}
console.log(numbers);





// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.


4
let num2 = [1, 2, 3];
for (let i = 6; i >= 4; i--) {
    num2.unshift(i);
}
console.log(num2);
















