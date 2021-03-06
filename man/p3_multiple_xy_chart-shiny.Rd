% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/p3_multiple_xy_chart.R
\name{p3_multiple_xy_chart-shiny}
\alias{p3_multiple_xy_chart-shiny}
\alias{p3_multiple_xy_chartOutput}
\alias{renderP3_multiple_xy_chart}
\title{Shiny bindings for p3_multiple_xy_chart}
\usage{
p3_multiple_xy_chartOutput(outputId, width = "100\%", height = "400px")

renderP3_multiple_xy_chart(expr, env = parent.frame(), quoted = FALSE)
}
\arguments{
\item{outputId}{output variable to read from}

\item{width, height}{Must be a valid CSS unit (like \code{'100\%'},
\code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
string and have \code{'px'} appended.}

\item{expr}{An expression that generates a p3_multiple_xy_chart}

\item{env}{The environment in which to evaluate \code{expr}.}

\item{quoted}{Is \code{expr} a quoted expression (with \code{quote()})? This
is useful if you want to save an expression in a variable.}
}
\description{
Output and render functions for using p3_multiple_xy_chart within Shiny
applications and interactive Rmd documents.
}
