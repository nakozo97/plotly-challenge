// Use d3.json() to fetch data from JSON file
d3.json(`samples.json`).then(function update(data) {
// console.log(data);

// // Create dropdown menu and Assign the value of its option to a variable 
// var nameData = data.names;
// // console.log(nameData);
// d3.select("#selDataset")
// .selectAll("option")
// .data(nameData)
// .enter().append("option")
// .text(function(d) { return `${d}` });
// var dropdownMenu = d3.select("#selDataset");
// var dataset = dropdownMenu.property("value");

// // Create Demographic Panel
// var index = nameData.indexOf(dataset);
// d3.select("#sample-metadata").html("");
// d3.select("#sample-metadata");
// var demographicPanel = d3.select("#sample-metadata");    
// var metaDataInfo = data.metadata[index];
// var metaDataInfoPanel = Object.entries(metaDataInfo).forEach(([key,value]) => {
// demographicPanel.append("p").text(`${key}: ${value}`);
});  