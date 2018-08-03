var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  // output2.innerHTML = 100 - this.value;
  // myRange2.value = 100 - this.value;
  adjust();
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

function adjust() {

  var val1 = 0;
  var val2 = 0;
  var val3 = 0;

  val1 = parseFloat(output.innerHTML);
  val2 = parseFloat(output2.innerHTML);
  val3 = parseFloat(output3.innerHTML);

  total = val1 + val2 + val3;

  if(total > 100) {

    // alert("greater than 100");

    var used = val1;
    var free = 100 - used;
    var addl = val2 + val3;

    var r1 = (val2 / addl) * free; 
    var r2 = (val3 / addl) * free;
                
    // alert("r1 =" + r1);
    
    output2.innerHTML = r1;
    myRange2.value = r1;

    output3.innerHTML = r2;
    myRange3.value = r2;	
    }
}
