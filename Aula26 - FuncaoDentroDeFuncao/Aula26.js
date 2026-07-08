const Ex1 = (...valores) =>{
  const Ex2 = val => {
    let res = 0;
    for (v of val) res += v;
    return res;
  };
return Ex2(valores)  
}
console.log(Ex1(12,12,15,15))