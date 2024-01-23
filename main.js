
let limitNumber = parseInt(prompt("Please enter number"));

if(!isNaN(limitNumber) && limitNumber> 0 && Number.isInteger(limitNumber)){

    let fib =[0,1];

    for( let i=2 ; i<=limitNumber ;i++){

        fib[i] = fib[i-1] + fib[i-2];

        console.log(fib.join(','));
    }

}else{
    console.log("Please enter valid number");
}