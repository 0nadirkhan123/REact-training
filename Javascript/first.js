let a= 123;
let temp=a;
let rev=0;

while(temp>0){
    let rem=temp%10;
    rev=rev*10+rem;
    temp=Math.floor(temp/10);
}
console.log(rev); 