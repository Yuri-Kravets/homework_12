const num = +prompt('введите число');

if (num < 1) {
     console.log(NaN);
}
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      
      console.log(i);
      break;
    } 
    console.log(i);
  }
