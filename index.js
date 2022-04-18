let screen=document.getElementById("display");
let num1=0;
let num2=0;
let op="";
let numm;
function num(a){
    if (op=="")
    {
        num1=num1*10+a;
        display(num1);
    }
    else{
        num2=num2*10+a;
        display(num2);
    }
}
function display(a)
{
    screen.innerText=a;
}
function operator(m)
{
    op=m;
    display(op);
}
function solve()
{
    switch(op){
        case '+': {
            numm= num1+num2;
            num1=numm;
            num2=0;
        display(numm);
        break
        }
        case '-':{
            numm= num1-num2;
            num1=numm;
            num2=0;
            display(numm);
            break
        }
        case '*':{
            numm=num1*num2;
            num1=numm;
            num2=0;
            display(numm);
            break
        }
        case '/':
            {
                numm=num1/num2;
                num1=numm;
                 num2=0;
                display(numm)
                break
            }            
    }
}