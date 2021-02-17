// 1. Use D3 fetch to read the JSON file.
// The Data from the JSON file is arbitrarily named importedData as the argument.

d3.json("samples.json").then(function (importedData) {

    var data = importedData;
    // console.log(data)
    
    var names = data.names;
    // console.log(names)

// Drop-down Menu. Test subject ID No. 
d3.select("#selDataset")
    .selectAll("option")
    .data(names)
    .enter()
        .append("option")
    .text(function (d) { return `${d}` })
    .attr("value", function (d) { return d });

var dropdownMenu = d3.select("#selDataset");
var selectedOption = dropdownMenu.node().value;
    console.log(selectedOption);

// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that invidual. 

// function unpack(rows,index){
//     return rows.map(function(row){
//         return row[index];
//     });
// }

var names = data.names;
    // console.log(names)

var sample_values = importedData.samples[0].sample_values;
    // console.log(sample_values)
var sample_values_slice = sample_values.slice(0,10).reverse();
    // console.lgo(sample_values_slice)

var otu_ids = importedData.samples[0].otu_ids;
    // console.log(otu_ids)
var otu_ids_slice = otu_ids.slice(0,10).reverse();
    // console.log(otu_ids_slice)

var otu_labels = importedData.samples[0].otu_labels;
    // console.log(otu_labels)
var otu_labels_slice = otu_labels.slice(0,10);
    // console.log(otu_labels_slice)

var metadata = importedData.metadata[0];
    // console.log(metadata)

var washFreq = importedData.metadata.map( d => d.wfreq);
    // console.log(washFreq)


function init() {

    // Trace 1 for the horizontal bar chart
    var trace1 = {
        type: "bar",
        orientation: 'h',
        x: sample_values_slice,
        y:otu_ids_slice.map( d => "OTU" + "" + d),
        text: otu_labels_slice,
        marker: {
            color: 'blue'},
    };

    var chartData = [trace1];

    var layout = {
        title: "OTUs .Slice 10 by Test Subject ID No.",
    }

    Plotly.newPlot("bar", chartData, layout);

    // Trace 2 for bubble chart.
    var trace2 = {
        x: otu_ids,
        y: sample_values,
        mode: "markers",
        marker: {
            size: sample_values,
            color: otu_ids,
        },
        text: otu_labels
    };

    var bubbleData = [trace2];

    var layout2 = {
        xaxis: {title: "Operational Taxonomic Units ID#"},
        yaxis: {title: "Sample Value Size"},
        height: 600, 
        width: 800,
        title: "OTUs vs. Sample Value Size by Test Subject ID No."
    }

    Plotly.newPlot("bubble", bubbleData, layout2)

}

init();

// 4. Display the sample metadata, i.e., an individual's demographic information. 
// 5. Display each key-value pair from the metadata JSON robject somewhere on the page.

var metadata = importedData.metadata[0];
    // console.log(metadata)

// Select panel to put data. 
d3.select("#sample-metadata");

// Empty panel after each use. 
d3.select("#sample-metadata").html("");

var panel_metadata = d3.select("#sample-metadata");
var panel_metadata_html = d3.select("#sample-metadata").html("");

// Display information to demographic info panel
var panel = Object.entries(metadata).forEach(([key, value]) => {
    d3.select("#sample-metadata")
    .append("h5")
    .text(`${key}: ${value}`)
    .append('hr')
});

// Link getData to Test Subject Id No. on "change".
// When the button is changed, run the update function 

d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
    var dropdownMenu = d3.select("#selDataset");
    var selectedOption = dropdownMenu.node().value;
        console.log(selectedOption)

    var newdata = importedData
    newdata = newdata.filter(x => x.otu_ids = selectedOption)

    updatePlotly(newdata);

};


// function update(importedData) {

// d3.selectAll("#selDataset").on("change", function(importedData) {
//     var selectedOption = d3.select(this).property("value")
//     update(selectedOption)
//     })}



//This closes the top d3 json; last item.     
});


