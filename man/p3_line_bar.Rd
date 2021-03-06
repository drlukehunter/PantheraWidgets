% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/p3_line_bar.R
\name{p3_line_bar}
\alias{p3_line_bar}
\title{Line Bar Chart}
\usage{
p3_line_bar(
  dataset,
  colors = NULL,
  axis_labels = NULL,
  labels_pos = NULL,
  show_y2 = TRUE,
  subChart = TRUE,
  zoom = TRUE,
  width = NULL,
  height = NULL,
  elementId = NULL
)
}
\arguments{
\item{dataset}{Vector containing the datasets to be plotted.}

\item{colors}{Named list with colors for the data series in the chart.
NULL results in an random automatically generated colors}

\item{axis_labels}{Named list of characters defining the prefered chart axis
labels.}

\item{labels_pos}{Named list of characters defining the prefered position
of the axis labels  e.g for x-axis ( inner-center,
inner-left,outer-right, outer-center, outer-left,
inner-right [default] ) and y-axis ( inner-middle,
inner-bottom, outer-top, outer-middle, outer-bottom,
inner-top [default] ).}

\item{show_y2}{Boolean option to show a second y-axis on the chart axis.}

\item{subChart}{Boolean option to show sub chart for zoom and selection
range.Default set to False.}

\item{zoom}{Boolean option to Zoom by mouse wheel event and
slide by drag. Default set to True.}

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
Line Bar Chart
}
\description{
Plots a Bar Chart for a specified set of data.
}
\examples{
dataset <- list(
Time=c("2016-01-05","2016-01-12","2016-01-24","2016-02-05","2016-02-12","2016-02-24"),
Total=c(200, 130, 90, 240, 130, 220)
)
colors <- list(Total="orange")
axis_labels <- list(x_axis="species",y_axis="frequency")
labels_pos <- list(xpos="outer-center",ypos="outer-middle")

p3_line_bar(dataset, colors,axis_labels,labels_pos,FALSE,TRUE,TRUE)

}
