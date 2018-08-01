# html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.slidecontainer {
    width: 100%;
}

.slider {
    -webkit-appearance: none;
    width: 30%;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
}
</style>
</head>
<body>

<h1>Round Range Slider</h1>

<div class="slidecontainer">
  <h2>Olive Oil</h2>
  <input type="range" min="0" max="100" value="0" class="slider" id="myRange">
  Value: <span id="demo"></span>
</div>

<div class="slidecontainer2">
  <h2>Coconut Oil</h2>
  <input type="range" min="0" max="100" value="0" class="slider" id="myRange2">
  Value: <span id="demo2"></span>
</div>

<div class="slidecontainer3">
  <h2>Palm Oil</h2>
  <input type="range" min="0" max="100" value="0" class="slider" id="myRange3">
  Value: <span id="demo3"></span>
</div>

<script>
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

    var used = output.innerHTML;
    var free = 100 - used;
    var addl = val2 + val3;

    var r1 = (val1 / addl) * free; 
    var r2 = (val2 / addl) * free;
                
    // alert("r1 =" + r1);
    
    output2.innerHTML = r1;
    myRange2.value = r1;

    output3.innerHTML = r2;
    myRange3.value = r2;	
    }
}


</script>

</body>
</html>
