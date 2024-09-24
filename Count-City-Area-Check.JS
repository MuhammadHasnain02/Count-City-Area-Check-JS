//1. Feel free to put any Country|City|Area Code of your choice,
//   so that you can output your preferred Country|City|Area
//2. Ap apni marzi ka Country|City|Area Code ma Put kare takay 
//   output ma ap apni marzi sa Country|City|Area Dal sake.

//     First (Country)
var userinput = prompt('Enter Country Name [First Letter Capital]')
var arr  = ['Pakistan','India','China','Iran','Iraq']
var match = false

for(var i = 0; i < arr.length; i++){

if(userinput == arr[i]){
match = true
alert('Country Found')
break
}
    
}
if(match == false){
alert('Country Not Found [Put Your Country in Code]')
}

//     Second (City)
var userinput = prompt('Enter City Name [First Letter Capital]')
var arr2 = ['Karachi','Lahore','Islamabad','Peshawar','Quetta']
var match2 = false

for(var i = 0; i < arr2.length; i++){

if(userinput == arr2[i]){
match2 = true
alert('City Found')
break
}

}
if(match2 == false){
alert('City Not Found [Put Your City in Code]')
}

//     Third (Area)
var userinput = prompt('Enter Area Name [First Letter Capital]')
var arr3 = ['Defense','Nazimabad','Clifton','Bahria']
var match3 = false

for(var i = 0; i < arr3.length; i++){

if(userinput == arr3[i]){
match3 = true
alert('Area Found')
break
}

}
if(match3 == false){
alert('Area Not Found [Put Your Area in Code]')
}