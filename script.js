function convertTemp(){
    let input_value=document.getElementById("inputvalue");
    let result=document.getElementById("result");
    let changeFrom=document.getElementById("changefrom");
    let changeTo=document.getElementById("changeto");
    
    let fromVal=changeFrom.value;
    let toVal=changeTo.value;
    let inputVal=parseFloat(input_value.value);
    let degree = "\u00B0";
// from celcius to other units
    if(fromVal=="celcius" && toVal=="farenhite"){
        let celciusToFarenhite=(inputVal*1.8)+32;
        result.value=celciusToFarenhite.toFixed(2)+"\u00B0F";
    }
    else if(fromVal=="celcius" && toVal=="kelvin"){
        let celciusToKelvin=inputVal+273.15;
        result.value=celciusToKelvin.toFixed(2)+"\u00B0K";
    }
    //from farenhite to other units 
    else if(fromVal=="farenhite" && toVal=="celcius"){
        let farenhiteToCelcius=(inputVal-32)*(5/9);
        result.value=farenhiteToCelcius.toFixed(2)+" \u00B0C";
    }
    else if(fromVal=="farenhite" && toVal=="kelvin"){
        let farenhiteToKelvin=((inputVal-32)*(5/9))+273.15;
        result.value=farenhiteToKelvin.toFixed(2)+"\u00B0K";
    }
    // from kelvin to other units
    else if(fromVal=="kelvin" && toVal=="celcius"){
        let kelvinToCelcius=inputVal-273.15;
        result.value=kelvinToCelcius.toFixed(2)+"\u00B0C";
    }
    else if(fromVal=="kelvin" && toVal=="farenhite"){
        let kelvinToFarenhite=((inputVal-273.15)*1.8)+32;
        result.value=kelvinToFarenhite.toFixed(2)+"\u00B0F";
    }
    else{
        result.value="Please select different options";
    }
}