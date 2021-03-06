% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/p3_bubble_chart.R
\name{p3_bubble_chart}
\alias{p3_bubble_chart}
\title{Bubble Chart Plot}
\usage{
p3_bubble_chart(
  dataset,
  data_names = NULL,
  axis_labels = NULL,
  width = NULL,
  height = NULL,
  elementId = NULL
)
}
\arguments{
\item{dataset}{List of numeric vectors containing the datasets to be
plotted.}

\item{data_names}{List of characters defining the actual names of each data
defined in the dataset}

\item{axis_labels}{Named list of characters defining the prefered chart
axis labels.}

\item{width, height}{Must be a valid CSS unit (like '100%', '400px', 'auto')
or a number, which will be coerced to a string and have
'px' appended.The default is NULL, which results in
intelligent automatic sizing based on the chart’s
container.}

\item{elementId}{Use an explicit element ID for the widget Useful if you
have other JavaScript that needs to explicitly discover
and interact with a specific widget instance. in any
other case leave as NULL which results in an
automatically generated one.}
}
\value{
Bubble Chart Plot.
}
\description{
Plots relationship between three variables or three dimensions of data
with one represented as a buble displays
}
\examples{
bubble_data <- data.frame(
  group= c("Aardwolf","Serval","Hyaena_Brown","Civet_African","Leopard_African",
           "Jackal_Black_Backed","Lion_African","Cheetah","Genet_Large_Spotted",
           "Hyaena_Spotted"),
  scaled_values=c(318899230,37600523,733333216,912420476,940301927,520434176,98199783,99708573,1750448339,100392226),
  xvalues=c(974,5937,6223,4797,12779,34435,36126,29796,1391,33692),
  yvalues=c(43,76,72,42,75,81,79,75,64,79)

)

data_names <- c(group="Species",scaled_values="pop",xvalues="captures",yvalues="weight")

p3_bubble_chart(dataset = bubble_data, data_names = data_names)
p3_bubble_chart(dataset = bubble_data)

}
