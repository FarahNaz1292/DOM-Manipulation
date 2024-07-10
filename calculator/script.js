//calculator
document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const keys = document.querySelectorAll(".num");
    const clearBtn=document.getElementById('clear')
    const operators=document.querySelectorAll('.operator')
    const equal=document.getElementById("equal")
    // console.log(keys);
    // console.log(clearBtn);
    let operatorInput='';
    for (let index = 0; index < keys.length; index++) {
      keys[index].addEventListener("click", function () {
        const keyValue = keys[index].innerHTML;
        console.log(keyValue);
        display.innerHTML = display.innerHTML+keyValue;
        if(operatorInput=='+'){
          const displayValue=display.innerHTML
          const numbers=displayValue.split('+');
          let sum=0;
          
          for (const num of numbers) {
            // console.log(parseFloat(num));
            sum+=parseFloat(num);
            console.log(sum);
          }
          equal.addEventListener("click", function(){
            display.innerHTML=sum
          })
        }
        if (operatorInput=='-') {
          const displayValue=display.innerHTML
          const numbers=displayValue.split('-');
          if (numbers.length > 2) {
            return alert("Please subtract with only two numbers");
          } 
          console.log(numbers);
          let subtraction=0;
          
          for (let i=0; i<numbers.length ; i++) {
          subtraction=numbers[0]- numbers[1]
          console.log(subtraction);
          }
          equal.addEventListener("click", function(){
            display.innerHTML=subtraction
          }) 
          
        }
        if(operatorInput=='/'){
          const displayValue=display.innerHTML
          const numbers=displayValue.split('/')
          if (numbers.length > 2) {
            return alert("Please Divide with only two numbers");
          } 
          console.log(numbers);
          let quotient=0;
          for(let i= 0; i<numbers.length ; i++) {
          quotient=numbers[0]/numbers[1]
          console.log(quotient);
          }
          equal.addEventListener("click", function(){
            display.innerHTML=quotient;
          }) 

        }
        if (operatorInput == "√") {
          // console.log(operatorInput);
          const displayValue = display.innerHTML;
          const numberInput = displayValue.slice(1);
          // const numberInput = displayValue.split("√");
          // const sqrtValue = Math.sqrt(parseFloat(numberInput[1]));
          const sqrtValue = Math.sqrt(parseFloat(numberInput));
          console.log(sqrtValue);
          equal.addEventListener("click", function () {
            display.innerHTML = sqrtValue;
          });
          equal.addEventListener("click", function(){
            display.innerHTML=sqrtValue;
          }) 
        }
          
      
        if (operatorInput=='*'){
          const displayValue=display.innerHTML
          const numbers=displayValue.split('*')
          let multiplication=1;
          for (let i = 0; i < numbers.length; i++) {
            multiplication*=parseFloat(numbers[i]);
            console.log(multiplication)
            
          }
          equal.addEventListener("click", function(){
            display.innerHTML=multiplication;
          }) 


        } 
      });

    }
    console.log(operatorInput)
    clearBtn.addEventListener("click",function(){
      // console.log("Hello button")
      display.innerHTML='';
    })
    for (let index = 0; index < operators.length; index++) {
      operators[index].addEventListener("click", function(){
        const operatorValue=operators[index].innerHTML
        display.innerHTML+=operatorValue;
        console.log(operatorValue)
        operatorInput=operatorValue;
      });

      
    }

    
    
  });
  