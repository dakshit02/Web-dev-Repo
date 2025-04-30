//callback eg 2

function sum(x,y)
{
    return x+y ;
}

function Calculator(a,b,callbackSum)
{
    let result =callbackSum(a,b);
    console.log("The result is :",result);
}

Calculator(2,7,sum);