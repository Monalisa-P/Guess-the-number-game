let value=Math.floor(Math.random()*100) +1
let guess=[];
console.log(value);
let attempt=10;
let b=document.querySelector("#last")

function check(){
    let playgame=true
    if (playgame){
        b.addEventListener('click',(e)=>{
            e.preventDefault()})}

    let user_guess=document.getElementById("guess_num").value;
    user_guess=Number(user_guess);
    let resultpro;
    let left_attempt=attempt;
    if (isNaN(user_guess)){
        alert("Enter a valid number");
        resultpro="Guess";
    }
    else if (user_guess>100){
        alert("Your number is greater than 100");
        resultpro="Guess";
    }
    else if(user_guess<1){
        alert("your number is less than 1");
        resultpro="Guess";
    }
    else{
        if (attempt>=1){
            if (user_guess<value){
                resultpro="Your number is low";
                guess.push(user_guess);
                left_attempt=attempt-1;
            }
            else if (user_guess>value){
                resultpro="Your number is high";
                guess.push(user_guess);
                left_attempt=attempt-1;
            }
            else{
                resultpro="Your number is correct";
                playgame=false;
            }
            attempt=left_attempt;
        }
        else{
            window.AbortController();
        }
    }
    document.getElementById("result").innerText=resultpro;
    document.getElementById("gue").innerText=guess;
    document.getElementById("left").innerText=left_attempt;
    
}