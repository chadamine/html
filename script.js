var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");

var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");

var num = 0;

//simplest barchart
var fc = document.getElementById("fattyacids_canvas");
var ctx = fc.getContext("2d");
var width = 40; // bar width
var canvasHeight = Math.round(window.innerHeight / 5);

var qc = document.getElementById("quality_canvas");
var qctx = qc.getContext("2d");
var qcHeight = canvasHeight;

var lauric;
var lauricX;
var lauricY;
var lauricHeight;

var myristic;
var myristicX;
var myristicY;
var myristicHeight;

var linoleic;
var linoleicX;
var linoleicY;
var linoleicHeight;

var oleic;
var oleicX;
var oleicY;
var oleicHeight;

var palmitic;
var palmiticX;
var palmiticY;
var palmiticHeight;

var ricinoleic;
var ricinoleicX;
var ricinoleicY;
var ricinoleicHeight;

var stearic;
var stearicX;
var stearicY;
var stearicHeight;

var iodine;
var iodineX;
var iodineY;
var iodineHeight;

var oliveOil = new Oil("Olive Oil");
oliveOil.lauric = 0;
oliveOil.myristic = 0;
oliveOil.linoleic = 10;
oliveOil.oleic = 68;
oliveOil.palmitic = 12;
oliveOil.ricinoleic = 0;
oliveOil.stearic = 4;
oliveOil.iodine = 87;

var palmOil = new Oil("Palm Oil");
palmOil.lauric = 0;
palmOil.myristic = 0;
palmOil.linoleic = 8;
palmOil.oleic = 40;
palmOil.palmitic = 45;
palmOil.ricinoleic = 0;
palmOil.stearic = 5.5;
palmOil.iodine = 53;

var coconutOil = new Oil("Coconut Oil");
coconutOil.lauric = 48;
coconutOil.myristic = 20;
coconutOil.linoleic = 2;
coconutOil.oleic = 8;
coconutOil.palmitic = 9.5;
coconutOil.ricinoleic = 0;
coconutOil.stearic = 2;
coconutOil.iodine = 9.5;

var mangoButter = new Oil("Mango Butter");
mangoButter.naoh = 0.135;
mangoButter.koh = 0.190;
mangoButter.lauric = 0;
mangoButter.myristic = 0;
mangoButter.linoleic = 5;
mangoButter.oleic = 44;
mangoButter.palmitic = 14;
mangoButter.ricinoleic = 0;
mangoButter.stearic = 37.5;
mangoButter.iodine = 47.5;

var hardness;
var hardnessY;
var hardnessHeight;

var cleansing;
var cleansingY;
var cleansingHeight;

var conditioning;
var conditioningHeight;
var conditioningY;

var lather;
var latherY;
var latherHeight;

var creamy;
var creamyY;
var creamyHeight;

var iodine;
var iodineY;
var iodineHeight;

setValues(slider1, output1);
setValues(slider2, output2);
setValues(slider3, output3);
setValues(slider4, output4);

fc.height = canvasHeight;
fc.width = window.innerWidth * 0.7;

qc.height = canvasHeight;
qc.width = window.innerWidth * 0.7;

// Draw bar graph canvas outlines
ctx.strokeRect(0, 0, fc.width, fc.height);
qctx.strokeRect(0, 0, qc.width, qc.height);

drawRanges();
drawChart();


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

slider4.oninput = function() {
	setValues(slider4, output4);
	adjust(4);
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
	var val4 = 0;

  val1 = parseFloat(output1.innerHTML);
  val2 = parseFloat(output2.innerHTML);
  val3 = parseFloat(output3.innerHTML);
	val4 = parseFloat(output4.innerHTML);

	//TODO: foreach
  var total = 0;
  var total = val1 + val2 + val3 + val4;

  if(total > 100) {

		//TODO: case
		switch(num) {

		  case 1: {
				break;
			}

			default:

		}

    if(num == 1) {
      var used = val1;
      var free = 100 - used;
      var addl = val2 + val3 + val4;

      var r1 = (val2 / addl) * free; 
      r1 = round(r1);
      var r2 = (val3 / addl) * free;
      r2 = round(r2);
			var r3 = (val4 / addl) * free;
			r3 = round(r3);
                
      output2.innerHTML = r1;
      slider2.value = r1;

      output3.innerHTML = r2;
      slider3.value = r2;	

			output4.innerHTML = r3;
			slider4.value = r3;
    
    } else if(num == 2) {

      var used = val2;
      var free = 100 - used;
			var addl = val1 + val3 + val4;

			var r1 = (val1 / addl) * free;
			r1 = round(r1);
			var r2 = (val3 / addl) * free;
			r2 = round(r2);
			var r3 = (val4 / addl) * free;
			r3 - round(r3);

			output1.innerHTML = r1;
			slider1.value = r1;

			output3.innerHTML = r2;
			slider3.value = r2;

			output4.innerHTML = r3;
			slider4.value = r3;

    } else if(num == 3) {
        var used = val3;
				var free = 100 - used;
				var addl = val1 + val2 + val4;

				var r1 = (val1 / addl) * free;
				r1 = round(r1);
				var r2 = (val2 / addl) * free;
				r2 = round(r2);
		    var r3 = (val4 / addl) * free;
			  r3 = round(r3);

				output1.innerHTML = r1;
				slider1.value = r1;

				output2.innerHTML = r2;
				slider2.value = r2;

			  output4.innerHTML = r3;
			  slider4.value = r3;

		} else if(num == 4) {
			var used = val4;
			var free = 100 - used;
			var addl = val1 + val2 + val3;

			var r1 = (val1 / addl) * free;
			r1 = round(r1);
			var r2 = (val2 / addl) * free;
			r2 = round(r2);
			var r3 = (val3 / addl) * free;
			r3 = round(r3);

			output1.innerHTML = r1;
			slider1.value = r1;

			output2.innerHTML = r2;
			slider2.value = r2;

			output3.innerHTML = r3;
			slider3.value = r3;
		}
  }

	calcTotal();
	drawChart();
	drawQualities();
}

function calcTotal() {
  val1 = parseFloat(output1.innerHTML);
  val2 = parseFloat(output2.innerHTML);
  val3 = parseFloat(output3.innerHTML);
	val4 = parseFloat(output4.innerHTML);

	total = val1 + val2 + val3 + val4;

	document.getElementById("total").innerHTML = total;
}

// round results to 100ths
function round(number) {
	return Math.round(number * 10) / 10;
}

// Oil class
function Oil(name) {
	this.name = name;
	this.properties = function() {
		return "Oil: " + this.name + " " + this.lauric; 
	}
}

function calcHeight(value, canvasHeight) {
	var ratio = value / 100;
	return canvasHeight * ratio;
}

function calcY(value, height) {
	return height - value;
}

// Draw fatty acid graph bars
function drawChart() {
	drawLauric();
	drawMyristic();
	drawLinoleic();
	drawOleic();
	drawPalmitic();
	drawRicinoleic();
	drawStearic();
	//drawIodine();
}

function drawLauric() {

	// Clear lauric bar
	ctx.clearRect(5, lauricY - 1, width, lauricHeight);
	
	// find total percent of lauric
	lauric = ((coconutOil.lauric * slider2.value) 
		+ (oliveOil.lauric * slider1.value)
		+ (palmOil.lauric * slider3.value)
	  + (mangoButter.lauric * slider4.value)) / 100;
	
	// calculate height of lauric bar
	lauricHeight = calcHeight(lauric, canvasHeight);

	// calculate y location of graph bar top
	lauricY = calcY(lauricHeight, canvasHeight);

	// draw bar for lauric
	ctx.fillRect(5, lauricY, width, lauricHeight);
}

function drawMyristic() {

	ctx.clearRect(50, myristicY - 1, width, myristicHeight);

	myristic = ((oliveOil.lauric * slider1.value) 
		+ (coconutOil.myristic * slider2.value)
		+ (palmOil.myristic * slider3.value)
	  + (mangoButter.myristic * slider4.value)) / 100;

	myristicHeight = calcHeight(myristic, canvasHeight);
	myristicY = calcY(myristicHeight, canvasHeight);
	ctx.fillRect(50, myristicY, width, myristicHeight);
}

function drawLinoleic() {
	
	ctx.clearRect(95, linoleicY - 1, width, linoleicHeight);

	linoleic = ((oliveOil.linoleic * slider1.value) 
		+ (coconutOil.linoleic * slider2.value)
		+ (palmOil.linoleic * slider3.value)
	  + (mangoButter.linoleic * slider4.value)) / 100;

	linoleicHeight = calcHeight(linoleic, canvasHeight);
	linoleicY = calcY(linoleicHeight, canvasHeight);
	ctx.fillRect(95, linoleicY, width, linoleicHeight);
}

function drawOleic() {

	ctx.clearRect(140, oleicY - 1, width, oleicHeight);

	oleic = ((oliveOil.oleic * slider1.value) 
		+ (coconutOil.oleic * slider2.value) 
		+ (palmOil.oleic * slider3.value)
	  + (mangoButter.oleic * slider4.value)) / 100;

	oleicHeight = calcHeight(oleic, canvasHeight);
	oleicY = calcY(oleicHeight, canvasHeight);
	ctx.fillRect(140, oleicY, width, oleicHeight);
}

function drawPalmitic() {

	ctx.clearRect(185, palmiticY - 1, width, palmiticHeight);

	palmitic = ((oliveOil.palmitic * slider1.value)
		+ (coconutOil.palmitic * slider2.value)
		+ (palmOil.palmitic * slider3.value)
	  + (mangoButter.palmitic * slider4.value)) / 100;

	palmiticHeight = calcHeight(palmitic, canvasHeight);
	palmiticY = calcY(palmiticHeight, canvasHeight);
	ctx.fillRect(185, palmiticY, width, palmiticHeight);
}

function drawRicinoleic() {

	ctx.clearRect(230, ricinoleicY - 1, width, ricinoleicHeight);

	ricinoleic = ((oliveOil.ricinoleic * slider1.value)
		+ (coconutOil.ricinoleic * slider2.value)
		+ (palmOil.ricinoleic * slider3.value)
	  + (mangoButter.ricinoleic * slider4.value)) / 100;

	ricinoleicHeight = calcHeight(ricinoleic, canvasHeight);
	ricinoleicY = calcY(ricinoleicHeight, canvasHeight);
	ctx.fillRect(230, ricinoleicY, width, ricinoleicHeight);
}

function drawStearic() {

	ctx.clearRect(275, stearicY - 1, width, stearicHeight);

	stearic = ((oliveOil.stearic * slider1.value)
		+ (coconutOil.stearic * slider2.value)
		+ (palmOil.stearic * slider3.value)
	  + (mangoButter.stearic * slider4.value)) / 100;

	stearicHeight = calcHeight(stearic, canvasHeight);
	stearicY = calcY(stearicHeight, canvasHeight);
	ctx.fillRect(275, stearicY, width, stearicHeight);
}

//Hardness: Lauric, Myristic, Palmitic, Stearic
//29-54
//Cleansing: Lauric, Myristic
//12-22
//Conditioning: Linoleic, Oleic
//44-69
//Lather(bubbly): Lauric, Myristic
//14-46
//Creamy: Palmitic, Stearic
//16-48
//Iodine
//41-70
//INS
//136-165
	
// Draw Soap Quality Chart Bars
function drawQualities() {
	drawHardness();
	drawCleansing();
	drawConditioning();
	drawLather();
	drawCreamy();
	//drawIodine();
	drawRanges();
}

// 1
function drawHardness() {

	var val1 = slider1.value / 100;
	var val2 = slider2.value / 100;
	var val3 = slider3.value / 100;
	var val4 = slider4.value / 100;

	qctx.clearRect(30, hardnessY - 1, width, hardnessHeight);

	hardness = 
		(oliveOil.lauric * val1) 
		+ (oliveOil.myristic * val1) 
		+ (oliveOil.palmitic * val1) 
		+ (oliveOil.stearic * val1) 

		+ (coconutOil.lauric * val2) 
		+ (coconutOil.myristic * val2) 
		+ (coconutOil.palmitic * val2) 
		+ (coconutOil.stearic * val2) 

		+ (palmOil.lauric * val3) 
		+ (palmOil.myristic * val3) 
		+ (palmOil.palmitic * val3)
		+ (palmOil.stearic * val3)
	
		+ (mangoButter.lauric * val4)
		+ (mangoButter.myristic * val4)
		+ (mangoButter.palmitic * val4)
		+ (mangoButter.stearic * val4);

	hardnessHeight = calcHeight(hardness, qcHeight);
	hardnessY = calcY(hardnessHeight, qcHeight);
	qctx.fillRect(30, hardnessY, width, hardnessHeight);
}

//2
function drawCleansing() {
	
	var val1 = slider1.value / 100;
	var val2 = slider2.value / 100;
	var val3 = slider3.value / 100;
	var val4 = slider4.value / 100;

	qctx.clearRect(135, cleansingY - 1, width, cleansingHeight);

	cleansing = (oliveOil.lauric * val1)
	+ (oliveOil.myristic * val1)
	+ (coconutOil.lauric * val2)
	+ (coconutOil.myristic * val2)
	+ (palmOil.lauric * val3)
	+ (palmOil.myristic * val3)
	+ (mangoButter.lauric * val4)
	+ (mangoButter.myristic * val4);

	cleansingHeight = calcHeight(cleansing, qcHeight);
	cleansingY = calcY(cleansingHeight, qcHeight);
	qctx.fillRect(135, cleansingY, width, cleansingHeight);
}

//3
function drawConditioning() {

	var val1 = slider1.value / 100;
	var val2 = slider2.value / 100;
	var val3 = slider3.value / 100;
	var val4 = slider4.value / 100;

	qctx.clearRect(240, conditioningY - 1, width, conditioningHeight);

	conditioning = (oliveOil.linoleic * val1)
	+ (oliveOil.oleic * val1)
	+ (coconutOil.linoleic * val2)
	+ (coconutOil.oleic * val2)
	+ (palmOil.linoleic * val3)
	+ (palmOil.oleic * val3)
	+ (mangoButter.linoleic * val4)
	+ (mangoButter.oleic * val4);

	conditioningHeight = calcHeight(conditioning, qcHeight);
	conditioningY = calcY(conditioningHeight, qcHeight);
	qctx.fillRect(240, conditioningY, width, conditioningHeight);
}

//4
function drawLather() {

	var val1 = slider1.value / 100;
	var val2 = slider2.value / 100;
	var val3 = slider3.value / 100;
	var val4 = slider4.value / 100;
	
	qctx.clearRect(345, latherY - 1, width, latherHeight);

	lather = (oliveOil.lauric * val1)
	+ (oliveOil.myristic * val1)
	+ (coconutOil.lauric * val2)
	+ (coconutOil.myristic * val2)
	+ (palmOil.lauric * val3)
	+ (palmOil.myristic * val3)
	+ (mangoButter.lauric * val4)
	+ (mangoButter.myristic * val4);

	latherHeight = calcHeight(lather, qcHeight);
	latherY = calcY(latherHeight, qcHeight);
	qctx.fillRect(345, latherY, width, latherHeight);

}

//5
function drawCreamy() {

	var val1 = slider1.value / 100;
	var val2 = slider2.value / 100;
	var val3 = slider3.value / 100;
	var val4 = slider4.value / 100;
	
	qctx.clearRect(450, creamyY - 1, width, creamyHeight);

	creamy = (oliveOil.palmitic * val1)
	+ (oliveOil.stearic * val1)
	+ (coconutOil.palmitic * val2)
	+ (coconutOil.stearic * val2)
	+ (palmOil.palmitic * val3)
	+ (palmOil.stearic * val3)
	+ (mangoButter.palmitic * val4)
	+ (mangoButter.stearic * val4);

	creamyHeight = calcHeight(creamy, qcHeight);
	creamyY = calcY(creamyHeight, qcHeight);
	qctx.fillRect(450, creamyY, width, creamyHeight);

}

// Draw quality ranges in quality bar chart
function drawRanges() {

	var h = canvasHeight;
	var ch = qc.height;

	hardnessLow = h - (ch * 0.29);
	hardnessHigh = h - (ch * 0.54);

	cleansingLow = h - (ch * .12);
	cleansingHigh = h - (ch * .22);

	conditioningLow = h - (ch * .44);
	conditioningHigh = h - (ch * .69);
	
	latherLow = h - (ch * .14);
	latherHigh = h - (ch * .46);
	
	creamyLow = h - (ch * .16);
	creamyHigh = h - (ch * .48);

	qctx.strokeStyle="#FF0000";
	qctx.moveTo(30, hardnessLow);
	qctx.lineTo(70, hardnessLow);
	qctx.stroke();
	qctx.moveTo(30, hardnessHigh);
	qctx.lineTo(70, hardnessHigh);
	qctx.stroke();	

	qctx.moveTo(130, cleansingLow);
	qctx.lineTo(170, cleansingLow);
	qctx.stroke();	
	qctx.moveTo(130, cleansingHigh);
	qctx.lineTo(170, cleansingHigh);
	qctx.stroke();	

	qctx.moveTo(230, conditioningLow);
	qctx.lineTo(270, conditioningLow);
	qctx.stroke();	
	qctx.moveTo(230, conditioningHigh);
	qctx.lineTo(270, conditioningHigh);
	qctx.stroke();	

	qctx.moveTo(330, latherLow);
	qctx.lineTo(370, latherLow);
	qctx.stroke();	
	qctx.moveTo(330, latherHigh);
	qctx.lineTo(370, latherHigh);
	qctx.stroke();	
	
	qctx.moveTo(450, creamyLow);
	qctx.lineTo(490, creamyLow);
	qctx.stroke();	
	qctx.moveTo(450, creamyHigh);
	qctx.lineTo(490, creamyHigh);
	qctx.stroke();	
}
