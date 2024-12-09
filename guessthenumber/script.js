let guess_value =  document.getElementById('guess_number').value;
let guess_button = document.getElementById('guess_button');
let previous_guess = document.getElementById('Previous_guess');
let guess_hint = document.getElementById('guess_hint');
let Count_Counter =  document.getElementById('Count_Counter');
let Result = document.getElementById('Result');

let Random_number = Math.floor(Math.random()*100 + 1);
console.log(Random_number);

let Count = 1;


function guess_test(){
   
        Result.innerText = "You won the game";
        console.log(guess_value);
        if(guess_value == Random_number){
            alert("HEllo")
        }
   
}

guess_button.addEventListener('click', guess_test)

