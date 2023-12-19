function addToDisplay(value){
    var display = document.forms['calc']['display']
    if(display){
        display.value += value;
    }
}


function clearDisplay(){
    var display=document.forms['calc']['display']
    if(display){
        display.value='';
    }
}

function Calculate(){
    var display=document.forms['calc']['display']
    console.log(display)
    try{
        if(display){
            var result = eval(display.value)
            display.value=result;
        }
    }
    catch(error){
        display.value=error;
    }
    
}

function BackSpace(){
    var display=document.forms['calc']['display']
    if(display){
        var cval=display.value;
        console.log(display.value);
        if(display && display.value.length>0){
            display.value=display.value.slice(0,-1);
        }
    }
    
}

function Negate(){
    var display=document.forms['calc']['display'] 
    display.value=display.value*-1;   
}
