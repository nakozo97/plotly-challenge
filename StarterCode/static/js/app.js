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
    
    // Assign the value of the dropdown menu option to a variable
    var selectedOption = dropdownMenu.property("value");
        console.log(selectedOption);

    /// WRITE THE CODE TO PLOT THE CHART HERE
    
    function buildPlot(selectedOption) {

        d3.json("samples.json").then(function (importedData) {
    
            var selectedOption = dropdownMenu.property("value");
            var filter = importedData.samples.filter(d => d.id == selectedOption)[0];
            var data = importedData;
            var names = data.names;

            var sample_values = importedData.samples[0].sample_values;
                // console.log(sample_values)
            var sample_values_slice = filter.sample_values.slice(0,10).reverse();
                // console.log(sample_values_slice)

            var otu_ids = importedData.samples[0].otu_ids;
                // console.log(otu_ids)
            var otu_ids_slice = filter.otu_ids.slice(0,10).reverse();
                // console.log(otu_ids_slice)

            var otu_labels = importedData.samples[0].otu_labels;
                // console.log(otu_labels)
            var otu_labels_slice = filter.otu_labels.slice(0,10);
                // console.log(otu_labels_slice)

            var metadata = importedData.metadata[0];
        
            var washFreq = importedData.metadata.map( d => d.wfreq);
    
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
                x: otu_ids_slice,
                y: sample_values_slice,
                mode: "markers",
                marker: {
                    size: sample_values_slice,
                    color: otu_ids_slice,
                },
                text: otu_labels_slice
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
    
        });
    }
    
    function buildDemoPanel(selectedOption) {

        d3.json("samples.json").then(function (importedData) {

            var data = importedData;
            // console.log(data)
            
            var names = data.names;
            // console.log(names)
            
            var metadata = importedData.metadata.filter(d => d.id == selectedOption)[0];

            // Select panel to put data. 
            d3.select("#sample-metadata");
        
            // Empty panel after each use. 
            d3.select("#sample-metadata").html("");
        
            // Display information to demographic info panel
            var panel = Object.entries(metadata).forEach(([key, value]) => {
                d3.select("#sample-metadata")
                .append("h5")
                .text(`${key}: ${value}`)
                .append('hr')
            });

        });
    }

    var optionChanged = function(selectedOption){
            
        d3.event.preventDefault();
        
        var dropdownMenu = d3.selectAll("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        var selectedOption = dropdownMenu.property("value");
        
        buildPlot(selectedOption);
        buildDemoPanel(selectedOption);
    
    };

    // Call optionChanged when a change takes place to the DOM. 
    d3.selectAll("#selDataset").on("change", optionChanged);

    function init() {

        d3.json("samples.json").then(function(importedData) {
    
            var data = importedData;
            // console.log(data)
            
            var names = data.names;
            // console.log(names)

            buildPlot(names[0]);
            buildDemoPanel(names[0]);
        
        });
    };
    
    init();

});