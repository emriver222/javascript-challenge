


// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function buildTable(data){
  tbody.html("");

  data.forEach((tableData)=>{
    //console.log(tableData);
    let row = tbody.append('tr');
    Object.entries(tableData).forEach(([key,value])=>{
        //console.log(key,value);
        let td = tbody.append('td');
        td.text(value);

  });
});
  
}



// YOUR CODE HERE!

// Select the button
var button = d3.select("#filter-btn");


// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);





// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);


  //var Table = document.getElementById("ufo-table");
  //Table.innerHTML = "";

  var filteredData = tableData;
  
  if (inputValue){
  filteredData = filteredData.filter(record => record.datetime === inputValue);
  }
  buildTable(filteredData);

  //console.log(filteredData);
};


d3.selectAll("#filter-btn").on("click",runEnter);

buildTable(tableData);