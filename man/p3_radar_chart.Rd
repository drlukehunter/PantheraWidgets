% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/p3_radar_chart.R
\name{p3_radar_chart}
\alias{p3_radar_chart}
\title{Radar Chart}
\usage{
p3_radar_chart(
  dataset,
  axis_categories,
  data_names = NULL,
  colors = NULL,
  radar_levels = 5,
  width = NULL,
  height = NULL,
  elementId = NULL
)
}
\arguments{
\item{dataset}{List of numeric vectors containing the datasets to be
plotted.}

\item{axis_categories}{List of characters for the axis labels}

\item{data_names}{List of characters defining the actual names of each data
defined in the dataset}

\item{colors}{Named list with colors for the data series in the chart.
NULL results in an random automatically generated colors.}

\item{radar_levels}{Numeric value of the radar (circle) level for the chart}

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
Radar Chart.
}
\description{
Plots multivariate data in the form of a two-dimensional chart of three or
 more quantitative variables represented on axes starting from the same point
}
\examples{

data <- list(
  Aardwolf=c(77,77,77,69,89,20,85,77,100,41,37,98,58,80,100,61,26,43,61,66,14,
             76,60,10),
  Serval=c(93,70,95,1,29,83,11,55,21,76,40,62,41,99,89,4,20,17,23,85,89,9,79,17),
  Hyaena_Brown=c(44, 21, 56,73,70,66,8 ,85,45,35,82,61,40,43,58,46,33,94,46,90,
                 56,24,11,2 )
)

axis <- c("00:00","01:00", "02:00", "03:00","04:00","05:00","06:00","07:00","08:00"
          ,"09:00","10:00","11:00", "12:00","13:00","14:00","15:00","16:00","17:00"
          ,"18:00","19:00","20:00","21:00","22:00","23:00")

 data_names <- c(group="Species",axis="Time",values="Images")

 colors <- c("#1f77b4","#ff7f0e","#2ca02c","#9467bd","#8c564b",
             "#e377c2","#7f7f7f","#bcbd22","#17becf","#9e0142","#d53e4f",
             "#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598", "#abdda4",
             "#66c2a5", "#3288bd", "#5e4fa2","#d62728")

p3_radar_chart(dataset = data,axis_categories = axis, data_names = data_names,
                colors = colors,radar_levels = 4)

 p3_radar_chart(dataset = data,axis_categories = axis)

}
