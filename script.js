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
      slider2.value = r1;

      output3.innerHTML = r2;
      slider3.value = r2;	
    
    } else if(num == 2) {
        var used = val2;
	var free = 100 - used;
	var addl = val1 + val3;

	var r1 = (val1 / addl) * free;
	r1 = round(r1);
	var r2 = (val3 / addl) * free;
	r2 = round(r2);

	output1.innerHTML = r1;
	slider1.value = r1;

	output3.innerHTML = r2;
	slider3.value = r2;

    } else if(num == 3) {
        var used = val3;
	var free = 100 - used;
	var addl = val1 + val2;

	var r1 = (val1 / addl) * free;
	r1 = round(r1);
	var r2 = (val2 / addl) * free;
	r2 = round(r2);

	output1.innerHTML = r1;
	slider1.value = r1;

	output2.innerHTML = r2;
	slider2.value = r2;

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
var fc = document.getElementById("fattyacids_canvas");
var ctx = fc.getContext("2d");
var width = 40; // bar width
var canvasHeight = Math.round(window.innerHeight / 5);

var qc = document.getElementById("quality_canvas");
var qctx = qc.getContext("2d");
var qcHeight = canvasHeight;

fc.height = canvasHeight;
fc.width = window.innerWidth;

qc.height = canvasHeight;
qc.width = window.innerWidth;

function Oil(name) {
	this.name = name;
	this.properties = function() {
		return "Oil: " + this.name + " " + this.lauric; 
	}
}

// COCONUT
// SAP NaOH/KOH: .178/.251
// Luaric: 48
// Myristic: 20
// Linoleic: 2 
// Oleic: 8
// Palmitic: 9.5
// Ricinoleic: 0
// Stearic: 2
// Iodine: 9.5

var coconutOil = new Oil("Coconut Oil");
coconutOil.lauric = 48;
coconutOil.myristic = 20;
coconutOil.linoleic = 2;
coconutOil.oleic = 8;
coconutOil.palmitic = 9.5;
coconutOil.ricinoleic = 0;
coconutOil.stearic = 2;
coconutOil.iodine = 9.5;

// OLIVE
// SAP NaOH/KOH: .135/.190
// Luaric: 0
// Myristic: 0
// Linoleic: 10 
// Oleic: 68
// Palmitic: 12
// Ricinoleic: 0
// Stearic: 4
// Iodine: 87

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

function calcHeight(value, canvasHeight) {
	var ratio = value / 100;
	return canvasHeight * ratio;
}

function calcY(value, height) {
	return height - value;
}

// Draw bar graph canvas outlines
ctx.strokeRect(0, 0, fc.width, fc.height);
qctx.strokeRect(0, 0, qc.width, qc.height);

function drawQualities() {
	drawHardness();
	drawCleansing();
	drawConditioning();
	drawLather();
	drawCreamy();
	//drawIodine();
}

var hardness;
var hardnessHeight;
var hardnessY;

function drawHardness() {

	var val1 = slider1.value;
	qctx.clearRect(5, hardnessY - 1, width, hardnessHeight);

	hardness = (oliveOil.lauric * val1) 
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
		+ (palmOil.stearic * val3); 

	hardnessHeight = calcHeight(hardness, qcHeight);
	hardnessY = calcY(hardnessHeight, qcHeight);
	qctx.fillRect(5, hardnessY, width, hardnessHeight);
}

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

var lauricY;
var lauric;
var lauricHeight;

var myristicY;
var myristic;
var myristicHeight;

var linoleic;
var linoleicY;
var linoleicHeight;

var oleic;
var oleicY;
var oleicHeight;

var palmitic;
var palmiticY;
var palmiticHeight;

var ricinoleic;
var ricinoleicY;
var ricinoleicHeight;

var stearic;
var stearicY;
var stearicHeight;

var iodine;
var iodineY;
var iodineHeight;

function drawLauric() {
	clearLauric();
	lauric = ((coconutOil.lauric * slider2.value) 
		+ (oliveOil.lauric * slider1.value)
		+ (palmOil.lauric * slider3.value)) / 100;
	lauricHeight = calcHeight(lauric, canvasHeight);
	lauricY = calcY(lauricHeight, canvasHeight);
	ctx.fillRect(5, lauricY, width, lauricHeight);
}

function clearLauric() {
	ctx.clearRect(5, lauricY - 1, width, lauricHeight);
}

function drawMyristic() {
	clearMyristic();
	myristic = ((oliveOil.lauric * slider1.value) 
		+ (coconutOil.myristic * slider2.value)
		+ (palmOil.myristic * slider3.value)) / 100;
	myristicHeight = calcHeight(myristic, canvasHeight);
	myristicY = calcY(myristicHeight, canvasHeight);
	ctx.fillRect(50, myristicY, width, myristicHeight);
}

function clearMyristic() {
	ctx.clearRect(50, myristicY - 1, width, myristicHeight);
}

function drawLinoleic() {
	clearLinoleic();
	linoleic = ((oliveOil.linoleic * slider1.value) 
		+ (coconutOil.linoleic * slider2.value)
		+ (palmOil.linoleic * slider3.value)) / 100;
	linoleicHeight = calcHeight(linoleic, canvasHeight);
	linoleicY = calcY(linoleicHeight, canvasHeight);
	ctx.fillRect(95, linoleicY, width, linoleicHeight);
}

function clearLinoleic() {
	ctx.clearRect(95, linoleicY - 1, width, linoleicHeight);
}

function drawOleic() {
	clearOleic();
	oleic = ((oliveOil.oleic * slider1.value) 
		+ (coconutOil.oleic * slider2.value) 
		+ (palmOil.oleic * slider3.value)) / 100;
	oleicHeight = calcHeight(oleic, canvasHeight);
	oleicY = calcY(oleicHeight, canvasHeight);
	ctx.fillRect(140, oleicY, width, oleicHeight);
}

function clearOleic() {
	ctx.clearRect(140, oleicY - 1, width, oleicHeight);
}

function drawPalmitic() {
	clearPalmitic();
	palmitic = ((oliveOil.palmitic * slider1.value)
		+ (coconutOil.palmitic * slider2.value)
		+ (palmOil.palmitic * slider3.value)) / 100;
	palmiticHeight = calcHeight(palmitic, canvasHeight);
	palmiticY = calcY(palmiticHeight, canvasHeight);
	ctx.fillRect(185, palmiticY, width, palmiticHeight);
}

function clearPalmitic() {
	ctx.clearRect(185, palmiticY - 1, width, palmiticHeight);
}

function drawRicinoleic() {
	clearRicinoleic();
	ricinoleic = ((oliveOil.ricinoleic * slider1.value)
		+ (coconutOil.ricinoleic * slider2.value)
		+ (palmOil.ricinoleic * slider3.value)) / 100;
	ricinoleicHeight = calcHeight(ricinoleic, canvasHeight);
	ricinoleicY = calcY(ricinoleicHeight, canvasHeight);
	ctx.fillRect(230, ricinoleicY, width, ricinoleicHeight);
}

function clearRicinoleic() {
	ctx.clearRect(230, ricinoleicY - 1, width, ricinoleicHeight);
}

function drawStearic() {
	clearStearic();
	stearic = ((oliveOil.stearic * slider1.value)
		+ (coconutOil.stearic * slider2.value)
		+ (palmOil.stearic * slider3.value)) / 100;
	stearicHeight = calcHeight(stearic, canvasHeight);
	stearicY = calcY(stearicHeight, canvasHeight);
	ctx.fillRect(275, stearicY, width, stearicHeight);
}

function clearStearic() {
	ctx.clearRect(275, stearicY - 1, width, stearicHeight);
}

drawChart();

function drawRanges() {

	hardnessLow = canvasHeight - (qc.height * 0.29);
	hardnessHigh = canvasHeight - (qc.height * 0.54);

	//ctx.moveTo(5,50);
	//ctx.lineTo(45,50);
	//ctx.strokeStyle="#FF0000";

	//ctx.moveTo(50,50);
	//ctx.lineTo(90,50);
	//ctx.stroke();

}

drawRanges();

//Hardness: Lauric, Myristic, Palmitic, Stearic
//29-54
//Cleansing: Lauric, Myristic
//12-22
//Lather(bubbly): Lauric, Myristic
//14-46
//Conditioning: Linoleic, Oleic
//44-69
//Creamy: Palmitic, Stearic
//16-48
//Iodine
//41-70
//INS
//136-165
