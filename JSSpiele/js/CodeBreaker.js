let random1;
let random2;
let random3;
random1 = Math.ceil(Math.random()*(9-0))-1;
random2 = Math.ceil(Math.random()*(9-0))-1;
random3 = Math.ceil(Math.random()*(9-0))-1;
console.log(random1, random2, random3);



    
function addCounter(){
  
    counter =document.getElementById('counterInput').value;
    if (counter < 1){



        addPopUp('Bitte geben Sie eine Zahl über 0 ein');

    }else {
        //document.getElementById('screen1').classList.add('hidden')
        //Propiere gerade was aus!
        
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
    }
}

function guess(){


    let code1 =document.getElementById('input1').value;
    let code2 =document.getElementById('input2').value;
    let code3 =document.getElementById('input3').value;

    let counterValue = document.getElementById('counterInput').value
    if(counterValue > 0)
        if(code1 == random1 && code2 == random2 && code3 == random3){
            counterValue--;
            
            document.getElementById("b").innerHTML += 
            "<h3>Correct - You win</h3>";
    
        }else if (code1 !=random1 && code2!= random2 && code3 != random3){
            counterValue--;
    
            document.getElementById("b").innerHTML += 
            "<h3>Complettly not Correct</h3>";
    
           
        }else if (code1 ==random1 && code2!= random2 && code3 != random3){
            counterValue--;
    
            document.getElementById("b").innerHTML += 
            "<h3>The first number is correct</h3>";
            
        }else if (code1 !=random1 && code2== random2 && code3 != random3){
            counterValue--;
    
            document.getElementById("b").innerHTML += 
            "<h3>The second number is correct</h3>";
    
        }else if (code1 !=random1 && code2!= random2 && code3 == random3){
            counterValue--;
    
            document.getElementById("b").innerHTML += 
            "<h3>The third number is correct</h3>";
    
        }else if (code1 !=random1 && code2== random2 && code3 == random3){
            counterValue--;
    
            document.getElementById("b").innerHTML += 
            "<h3>The second number anh the third numbeer are correct</h3>";
    
        }else if (code1 ==random1 && code2== random2 && code3 != random3){
            counterValue--;
    
            document.getElementById("b").innerHTML += 
            "<h3>The first number anh the second numbeer are correct</h3>";
    
        }else if (code1 ==random1 && code2!= random2 && code3 == random3){
            counterValue--;
    
            document.getElementById("b").innerHTML += 
            "<h3>The first number and the second numbeer are correct</h3>";
        }
        
       
    
}

    

    
    



function reset() {
    
    document.getElementById("input1").value = '';
    document.getElementById("input2").value = '';
    document.getElementById("input3").value = '';
     
}
function addPopUp(mytext, reload = false){

    
    let myPopup = document.createElement('div');
    myPopup.setAttribute('id', 'popUp');
    myPopup.append(mytext);
    
    let button = document.createElement('button');
    
    if(reload)
    button.addEventListener('click',reloadPage);
    else 
    button.addEventListener('click', closePopUp);
    
    button.append('OK');
    
    myPopup.append(button);
    
    document.getElementsByTagName('body')[0].append(myPopup);
    }
    
    function reloadPage(){
        location.reload();
    }
    function closePopUp(){
        popUp.remove();
    }

