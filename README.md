# Plot.ly Homework - Belly Button Biodiversity

![Bacteria by filterforge.com](Images/bacteria.jpg)

In this assignment, I built an interactive flask dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset mentioned above reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. 

## Step 1: Plotly

1. Used the D3 library to read/import `samples.json`.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual by Test Subject ID No..

* Used `sample_values` as the values for the bar chart. <importedData.samples[0].sample_values;>

* Used `otu_ids` as the labels for the bar chart. <importedData.samples[0].otu_ids;>

* Used `otu_labels` as the hovertext for the chart. <importedData.samples[0].otu_labels;>

  ![bar Chart](Images/hw01.png)

3. Created a bubble chart that displays each sample by Test Subject ID No..

* Used `otu_ids` for the x values. <importedData.samples[0].otu_ids;>

* Used `sample_values` for the y values. <importedData.samples[0].sample_values;>

* Used `sample_values` for the marker size. <importedData.samples[0].sample_values;>

* Used `otu_ids` for the marker colors. <importedData.samples[0].otu_ids;>

* Used `otu_labels` for the text values. <importedData.samples[0].otu_labels;>

![Bubble Chart](Images/bubble_chart.png)

4. Displayed the sample metadata, i.e., an individual's demographic information by Test Subject ID No..

5. Displayed each key-value pair from the metadata JSON object somewhere on the page by Test Subject ID No..

![hw](Images/hw03.png)

6. Updated all of the plots so that any time a new sample is selected it will link to its respective plotly dataset Test Subject ID No.. 

![hw](Images/hw02.png)

## Deployment

* App was deployed using Cross-Origin Resource Sharing (Cors) flask application. To utilize documents, please use localhost 800. <python -m http.server>

### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)

