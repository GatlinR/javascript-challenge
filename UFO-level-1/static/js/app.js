// from data.js
var tableData = data;
//console.log(tableData);

var tbody = d3.select("tbody");


//Append the data to a table
tableData.forEach(function(UFOdata) {
	var row = tbody.append("tr");
	Object.entries(UFOdata).forEach(function([key,value]){
		row.append("td").text(value);
		});
});

//Button and Input
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");

//Filter Function
function RunFilter(){
	//Prevent Page Refresh
    d3.event.preventDefault();
    
	//Input Date
	var inputDate = input.property("value");
	console.log(d3.event.target);

	var dateFiltered = tableData.filter(date => date.datetime === inputDate);
    tbody.html("");

    //Create new table from filter data
    dateFiltered.forEach(function(UFOdata) {
        var row = tbody.append("tr");
        Object.entries(UFOdata).forEach(function([key,value]){
            row.append("td").text(value);
            });
    });
}

button.on("click", RunFilter);