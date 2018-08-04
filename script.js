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

// change oil values
function adjust(num) {

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
}

// round results to 100ths
function round(number) {
	return Math.round(number * 100) / 100;
}

//simplest barchart
var c = document.getElementById("results_canvas");
var ctx = c.getContext("2d");
ctx.fillRect(0,0,40,100);
ctx.fillRect(45,0,40,75);
ctx.fillRect(90, 0, 40, 50);

// BARCHART
var resultsCanvas = document.getElementById("myCanvas");
resultsCanvas.width = 300;
resultsCanvas.height = 300;

var ctx = resultsCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

var Barchart = function(options) {
	this.options = options;
	this.canvas = options.canvas;
	this.ctx = this.canvas.getContext("2d");
	this.colors = options.colors;

	this.draw = function(){
		var maxValue = 0;
		for(var categ in this.options.data){
			maxValue = Math.max(maxValue, this.options.data[categ]);
		}
		var canvasActualHeight = this.canvas.height - this.options.padding * 2;
		var canvastActualWidth = this.canvas.width = this.options.padding * 2;
    
		var barIndex = 0;
		var barQty = object.keys(this.options.data).length;
		var barSize = (canvasActualWidth)/numberOfBars;

		for (categ in this.options.data) {
			var val = this.options.data[categ];
			var barHeight = Math.round(canvasActualHeight * val/maxValue);
			drawBar(this.ctx,
			this.options.padding + barIndex * barSize,
			this.canvas.height - barHeight - this.options.padding,
			barSize, 
			barHeight,
			this.colors[barINdex%this.colors.length]);

			barIndex++;
		}

	}
}

var resultsBarchart = new Barchart({
	canvas:resultsCanvas,
	colors:["#a55ca5", "#67b6c7", "bccd7a", "#eb9743"]
});

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

