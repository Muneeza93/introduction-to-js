/*function sum(num1, num2){
    var ans= num1 % num2;
    console.log(ans);
    return ans;
}

var sum1 = () =>{
    var num1 = 20;
    var num2 = 10;
    var sum1 = num1 + num2;
    console.log(ans);
    return ans;
}
sum(10, 6);
sum();

//ECMA style of function
var sub = () =>{
  var ans=sum(10,6) - 7;
  console.log(ans);  
}
sub();

function add(){

}*/

var add = () =>{

}

/*var paye = () =>{
    var tax = 30;
    var salary = 1000000;
    if (salary > 300000){
    var rate = 30/100;
    var total_tax = salary * rate;
    var net_pay = salary - total_tax;
    console.log(net_pay);
    return net_pay;
    }
}
paye();*/

function paye(){
    var tax = 30;
    var salary = 1000000;
    var rate = 30/100;
    var total_tax = salary * rate;
    var net_pay = salary - total_tax;
    console.log(net_pay);
    return net_pay;
    
}
function loan(){
    if (paye() <700000){
        console.log('you are not entitled to any loan')

    }
    else{
        console.log('you are entitled to a loan')
    }
}
loan();


