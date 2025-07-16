for(let i=0;i<1000;i++){
let temp=i;
let rev=0;

while(temp>0){
    let rem=temp%10;
    rev=rev*10+rem;
    temp=Math.floor(temp/10);
}
if(i==rev)
    {
        console.log(i);
    }
}