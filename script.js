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

function round(number) {
	return Math.round(number * 100) / 100
}
