// 1. Use the D3 library to read in `samples.json`.
// The data from the JSON file is arbitrarily named importedData as the argument

d3.json("samples.json").then(function Plotly(data) {

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Add Values to dropdown menu by Test Subject ID No.:
var samples_names = data.names;

// console.log(nameData);

d3.select("#selDataset")
    .selectAll("option")
    .data(samples_names)
    .enter()
    .append("option")
    .text(d => `${d}`);
var testsubject_menu = d3.select("#selDataset");
var samples_data = testsubject_menu.property("value");

var samples_index = samples_names.indexOf(samples_data);
d3.select("#sample-metadata").html("");
d3.select("#sample-metadata");
var demo_panel = d3.select("#sample-metadata");    
var metadata_info = data.metadata[index];
var demo_info_panel = Object.entries(metadata_info).forEach(([key,value]) => {
    demo_panel.append("p").text(`${key}: ${value}`);
});  


});
