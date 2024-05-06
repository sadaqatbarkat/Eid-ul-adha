


function abc (){
	
var eid =  new Date ("16 june 2024")
var currentDate =  new Date()
var find =  eid.getTime() -  currentDate.getTime()

var month =  Math.floor(find/(1000*60*60*24*30))
var days = Math.floor( find/(1000*60*60*24))
var hours = Math.floor(find/(1000*60*60))
var minutes =  Math.floor(find/(1000*60))
var seconds = Math.floor(find/(1000)) 
	document.getElementById("month").innerText = month
	document.getElementById("days").innerText = days
	document.getElementById("hours").innerText = hours
	document.getElementById("minutes").innerText = minutes
	document.getElementById("seconds").innerText = seconds

	
}

setInterval(abc,1000)

