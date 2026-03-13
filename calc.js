let history = document.querySelector(".history");
let answer = document.querySelector(".answer");
let buttons = document.querySelectorAll(".buttons button");
let input = document.querySelector(".input");

let num = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        if(btn.value === "CE"){
            num = "";
            answer.textContent = num;
            history.textContent = "";
            return;
        }
        else if(btn.value === "C"){
            num = num.slice(0, -1);
            answer.textContent = num;
            history.textContent = "";
        }
        else if(btn.value === "="){
            try{
                history.textContent = num;
                let ans = BigInt(eval(num));
                answer.textContent = ans;

                if(ans.toString().length > 10 && ans.toString().length < 30){
                    history.style.fontSize = "1.5rem";
                    history.style.wordBreak = "break-all";
                    history.style.padding = "5px";
                }
                else if(ans.toString().length >= 30 ){
                    history.style.fontSize = "1.2rem";
                    history.style.wordBreak = "break-all";
                    history.style.padding = "5px";
                    if(ans.toString().length > 50){
                        history.style.height = "0";
                        answer.style.fontSize = "1rem";
                    }
                }
                else{
                    history.style.fontSize = "26px";
                    history.style.height = "50%";
                    history.style.wordBreak = "normal";
                    history.style.padding = "0px";
                }
            }
            catch(err){
                answer.textContent = err.message;
            }
        }
        else{
            num += btn.value;
            answer.textContent = num;

            if(answer.textContent.length > 10 && answer.textContent.length < 30){
                answer.style.fontSize = "2.5rem";
                answer.style.wordBreak = "break-all";
            }
            else if(answer.textContent.length >= 30){
                answer.style.fontSize = "1.5rem";
                answer.style.padding = "5px"
            }
            else{
                answer.style.fontSize = "50px";
                answer.style.overflowWrap = "normal";
            }
        }   
    });
});


document.addEventListener("keydown", function(e){
    let key = e.key;
    if(!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/"){ 
        answer.textContent += key;
        num += key;

        if(answer.textContent.length > 10 && answer.textContent.length < 30){
            answer.style.fontSize = "2.5rem";
            answer.style.wordBreak = "break-all";
        }
        else if(answer.textContent.length >= 30){
            answer.style.fontSize = "1.5rem";
            answer.style.padding = "5px"
            answer.style.wordBreak = "break-all";
        }
        else{
            answer.style.fontSize = "50px";
            answer.style.overflowWrap = "normal";
        }
    }
    else if(key === "Delete"){
        num = "";
        answer.textContent = num;
        history.textContent = "";
    }
    else if(key === "Backspace"){
        num = num.slice(0, -1);
        answer.textContent = num;
        history.textContent = "";
    }
    else if(key === "Enter"){
        try{
                
                let ans = BigInt(eval(num));
                history.textContent = num;
                answer.textContent = ans;

                if(ans.toString().length > 10 && ans.toString().length < 30){
                    history.style.fontSize = "1.5rem";
                    history.style.wordBreak = "break-all";
                    history.style.padding = "5px";
                }
                else if(ans.toString().length >= 30 ){
                    history.style.fontSize = "1.2rem";
                    history.style.wordBreak = "break-all";
                    history.style.padding = "5px";
                    if(ans.toString().length > 50){
                        history.style.height = "0";
                        answer.style.fontSize = "1rem";
                    }
                }
                else{
                    history.style.height = "50%";
                    history.style.fontSize = "26px";
                    history.style.wordBreak = "normal";
                    history.style.padding = "0px";
                }
            }
        catch(err){
            answer.textContent = err.message;
        }

    }    
});