let num1=prompt("Dime el primer numero");
let num2=prompt("Dime el segundo numero");
num1=parseInt(num1);
num2=parseInt(num2);
if (num1>num2)
  {
    let suma=num1+num2;
    let resta=num1-num2;
    document.write("La suma es "+suma+" y la resta es "+resta);
  }
  if(num1<num2)
  {
    let prod=num1*num2;
    let div=num1/num2;
    document.write("El producto es "+prod+" y la división es "+div);
  }