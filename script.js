const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const emptyUserInput = () => {
    const userInput = document.getElementById("user-input").value;
    userInput.trim().length === 0 ? alert("Please provide a phone number"): validateNumber(userInput);
}

const clearUserInput  = () =>  document.getElementById("user-input").value ="";
const clearResult = () => document.getElementById("results-div").textContent = "";

const validateNumber = (userInput) => {
    const result = document.getElementById("results-div");
    const cleanInput = userInput.replace(/\D/g, "");
    console.log(cleanInput.length)
    console.log(cleanInput)
    const reg1 = /^(\({1}[0-9]{3}\){1})(\s)*([0-9]{3}(-)*(\s)*[0-9]{4})/g // matches () and - or () and \s
    const reg2 = /^[0-9]{3}(-)[0-9]{3}(-)[0-9]{4}/g //matches all - 
    const reg3 = /^[0-9]{3}(\s)[0-9]{3}(\s)[0-9]{4}/g //matches \s
    const reg4 = /^[0-9]{10}/g //the 10 numbers together
    console.log(reg4.test(userInput))
    console.log(userInput.match(reg4))
    
    if(cleanInput.length > 11 || cleanInput.length <10){
        result.textContent = `Invalid US number: ${userInput}`;
    }
    if(cleanInput.length === 11 && userInput[0]!== "1"){
        result.textContent = `Invalid US number: ${userInput}`;
    }
    if(userInput[0]==="1" && cleanInput.length===11){
        
        if(reg4.test(userInput.slice(1).trimStart())){
            result.textContent = `Valid US number: ${userInput}`;
        }
        else if(reg3.test(userInput.slice(1).trimStart())){
            result.textContent = `Valid US number: ${userInput}`;
        }
        else if(reg2.test(userInput.slice(1).trimStart())){
            result.textContent = `Valid US number: ${userInput}`;
        }
        else if(reg1.test(userInput.slice(1).trimStart())){
            result.textContent = `Valid US number: ${userInput}`;
        } 
        else{
            result.textContent = `Invalid US number: ${userInput}`;
        }
        
    
    }
    if(cleanInput.length === 10){
        if(reg1.test(userInput)){
            result.textContent = `Valid US number: ${userInput}`;
        }
        else if(reg2.test(userInput)){
            result.textContent = `Valid US number: ${userInput}`;
        }
        else if(reg3.test(userInput)){
            result.textContent = `Valid US number: ${userInput}`;
        }
        else if(reg4.test(userInput)){
            result.textContent = `Valid US number: ${userInput}`;
        }
        else{
            result.textContent = `Invalid US number: ${userInput}`;
        }
        
    }
    
    
}
checkBtn.addEventListener("click", emptyUserInput)
clearBtn.addEventListener("click", () => {clearUserInput(); 
    clearResult();})

