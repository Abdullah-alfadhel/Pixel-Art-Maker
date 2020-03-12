//the table var
var mainTable = document.querySelector('#pixelCanvas');
//the color var
var color = document.getElementById("colorPicker");
//the height var
var heightEl = document.getElementById("inputHeight");
//the width var
var widthEl = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid() or remove Existing grid
document.querySelector('#sizePicker').addEventListener('submit', function (evt){
  evt.preventDefault();
  //clearing the grid
  if (mainTable.hasChildNodes()){
    while (mainTable.lastElementChild) {
   mainTable.removeChild(mainTable.lastElementChild);
 }
 // Select size input and creat Grid
 var height = heightEl.value;
 var width = widthEl.value;
 makeGrid(height,width);
  }else {
    // Select size input and creat Grid
    var height = heightEl.value;
    var width = widthEl.value;
    makeGrid(height,width);
  }



});
//addEventListener to color eatch cell
mainTable.addEventListener('click',function(evt){
    // Select color input
  evt.target.style.backgroundColor = color.value;
})
//afunction that makes a Grid
function makeGrid(height,width) {

for (let i = 0 ; i < height ; i++){
  const tableRow = document.createElement('tr');

      for (let x = 0; x < width ; x++){
        tableRow.appendChild(document.createElement('td'));
      }
      mainTable.appendChild(tableRow);
}
}
