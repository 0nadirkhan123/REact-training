let n= 1;
let flag = true;
if (n<= 1) {
  flag=false; 
} 
else 
{
  for(let i=2; i<n; i++){
    if (n%i==0){
      flag= false;  
      break;
    }
  }
}

if (flag){
  console.log("prime number");
} else{
  console.log("not prime number");
}
