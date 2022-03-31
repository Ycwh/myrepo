var num = 12;
num > 0, num < 10 ? num++ : (num--, num == 0 ? (num++, num = num / 10) : null);
console.log(num);