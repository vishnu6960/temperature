var count=0
function convert(){
    count++
    var output=0
    var value=document.getElementById("inputValue").value
    var intValue=parseInt(value)
    var from=document.getElementById("units1").value
    var to=document.getElementById("units2").value
    if(from=="Celsius" && to=="Fahrenheit"){
        output=(intValue * 9/5) + 32
        Result.innerHTML=output
        console.log(output)
    }
    if(from=="Celsius" && to=="Kelvin"){
        output=intValue + 273.15
        Result.innerHTML=output
        console.log(output)
    }
    if(from=="Fahrenheit" && to=="Celsius"){
        output=(intValue - 32) * 5/9
        Result.innerHTML=output
        console.log(output)
    }
    if(from=="Fahrenheit" && to=="Kelvin"){
        output=(intValue - 32) * 5/9 +273.15
        Result.innerHTML=output
        console.log(output)
    }
    if(from=="Kelvin" && to=="Fahrenheit"){
        output=(intValue - 273.15) * 9/5 + 32
        Result.innerHTML=output
        console.log(output)
    }
    if(from=="Kelvin" && to=="Celsius"){
        output=intValue - 273.15
        Result.innerHTML=output
        console.log(output)
    }
    if((from=="Celsius" && to=="Celsius") || (from=="Fahrenheit" && to=="Fahrenheit") || (from=="Kelvin" && to=="Kelvin") ){
        output=intValue
        Result.innerHTML=output
        console.log(intValue)
    }
    
    
    console.log(value)
    console.log(from)
    console.log(to)
}