/*function sum(num1, num2){
    var ans= num1 % num2;
    console.log(ans);
    return ans;
}
sum(10, 6);

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
paye();


