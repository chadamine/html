var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");

var num = 0;

setValues(slider1, output1);
setValues(slider2, output2);
setValues(slider3, output3);

function setValues(slider, output) {
  output.innerHTML = slider.value;
}

slider1.oninput = function() {
  setValues(slider1, output1);
  adjust(1);
}

slider2.oninput = function() {
  setValues(slider2, output2);
  adjust(2);
}

slider3.oninput = function() {
  setValues(slider3, output3);
  adjust(3);
}

function increment(slider, output, num) {
	var inc = parseFloat(slider.value) + 1;	
	slider.value = inc;
	output.innerHTML = inc;
	adjust(num);

}

function decrement(slider, output, num) {
	var val = parseFloat(slider.value);
	var dec = 0;

	if(val > 0)
		var dec = parseFloat(slider.value) - 1;

	slider.value = dec;
	output.innerHTML = dec;
	adjust(num);

}

// change oil values
function adjust(num) {

	//alert("num is " + num);
  var val1 = 0;
  var val2 = 0;
  var val3 = 0;

  val1 = parseFloat(output1.innerHTML);
  val2 = parseFloat(output2.innerHTML);
  val3 = parseFloat(output3.innerHTML);

  var total = 0;
  var total = val1 + val2 + val3;

  if(total > 100) {

    if(num == 1) {
      var used = val1;
      var free = 100 - used;
      var addl = val2 + val3;

      var r1 = (val2 / addl) * free; 
      r1 = round(r1);
      var r2 = (val3 / addl) * free;
      r2 = round(r2);
                
      output2.innerHTML = r1;
      myRange2.value = r1;

      output3.innerHTML = r2;
      myRange3.value = r2;	
    
    } else if(num == 2) {
        var used = val2;
	var free = 100 - used;
	var addl = val1 + val3;

	var r1 = (val1 / addl) * free;
	r1 = round(r1);
	var r2 = (val3 / addl) * free;
	r2 = round(r2);

	output1.innerHTML = r1;
	myRange1.value = r1;

	output3.innerHTML = r2;
	myRange3.value = r2;

    } else if(num == 3) {
        var used = val3;
	var free = 100 - used;
	var addl = val1 + val2;

	var r1 = (val1 / addl) * free;
	r1 = round(r1);
	var r2 = (val2 / addl) * free;
	r2 = round(r2);

	output1.innerHTML = r1;
	myRange1.value = r1;

	output2.innerHTML = r2;
	myRange2.value = r2;

    }
  }

	calcTotal();
}

function calcTotal() {
  val1 = parseFloat(output1.innerHTML);
  val2 = parseFloat(output2.innerHTML);
  val3 = parseFloat(output3.innerHTML);

	total = val1 + val2 + val3;

	document.getElementById("total").innerHTML = total;
}

// round results to 100ths
function round(number) {
	return Math.round(number * 10) / 10;
	//return Math.round(number);
	//return Math.round(number * 100) / 100;
}

//simplest barchart
var c = document.getElementById("results_canvas");
var ctx = c.getContext("2d");
var width = 40; // bar width
var canvasHeight = Math.round(window.innerHeight / 5);

c.height = canvasHeight;
c.width = window.innerWidth;

var lauric = 48;
var lauricHeight = calcHeight(lauric, canvasHeight);
var lauricY = calcY(lauricHeight, canvasHeight);

var myristic = 20;
var myristicHeight = calcHeight(myristic, canvasHeight);
var myristicY = calcY(myristic, canvasHeight);

var linoleic = 2;
var linoleicHeight = calcHeight(linoleic, canvasHeight);
var linoleicY = calcY(linoleic, canvasHeight);

function calcHeight(value, canvasHeight) {
	var ratio = value / 100;
	return canvasHeight * ratio;
}

function calcY(value, height) {
	return height - value;
}

//ctx.fillRect(x, y, width, height);
ctx.strokeRect(0, 0, c.width, c.height);

ctx.fillRect(5, lauricY, width, lauricHeight);
ctx.fillRect(50, myristicY, width, myristicHeight);
ctx.fillRect(95, linoleicY, width, linoleicHeight);

// Coconut
//
// SAP NaOH/KOH: .178/.251
// Luaric: 48
// Myristic: 20
// Linoleic: 2 
// Oleic: 8
// Palmitic: 9.5
// Ricinoleic: 0
// Stearic: 2
// Iodine: 9.5

