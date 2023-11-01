function largernum(a,b){
  if(a == b){
    return 0;
  } 
  if(a>b){
    return a;
  }
  if(b>a){
    return b;
  }
}

let x = largernum(12,10);
console.log(x);