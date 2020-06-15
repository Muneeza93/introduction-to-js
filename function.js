//function with parameters
function add(num1,num2){
    var ans= num1 + num2;
    console.log(ans);
}

//function with static values
function add2(){
    var num1 = 24, num2= 32;
    var ans= num1 + num2;
    console.log(ans);
}



/*add2();
add(24,32);
add(33,20);
add(10,20,10);
add(10,35,40);*/

function add(num1, num2){
    var ans = num1 + num2;
    return ans;
}

function sub(num1, num2){
    var ans = num1 - num2;
    return ans;
}

function diff(){
    var ans = add(10,15) + sub(20,9);
    console.log(ans);
}
diff()
