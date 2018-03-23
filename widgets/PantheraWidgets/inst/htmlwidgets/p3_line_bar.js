HTMLWidgets.widget({

  name: 'p3_line_bar',

  type: 'output',

  factory: function(el, width, height) {

    // create an empty chart
    var chart = null;

    return {

      renderValue: function(x) {

        // if the chart does not exist, create it via c3.generate
        if(chart===null){

            keys = _.keys(x.dataset);

          	chart = c3.generate({

          	  // specify the container element we want the chart to render in
          		bindto: el,
          		data: {

          		  // intialize with an empty array
          			json: [],
          			keys: {
          			      // use Time for x-axis
          			      x: "Time",

          			  // use the remaining data for y-values
          				value: keys,
          			},
          			// set chart types
          			types: {

          		  	// default is line, we want totals to be displayed as bars
          				Total: 'bar'
          			},
          			axes: {
          			  // extra y-axis
          				Total: 'y2'
          			},
        		  },
          		axis: {
          			x: {
          			  //  x axis as timeseries
          				type: "timeseries",

          				// tick format x-asis
          				tick: {
          					format: "%Y-%m-%d"
          				}
          			},
          			y2: {
          			  // we want a second y-axis
          				show: true
          			}
          		},

          		// display a subchart - this will be used for brushing in a later stage
          		subchart: {
          			show: true,
                onbrush: debounce(function (domain) {Shiny.onInputChange(el.id, domain)},250)
          		}
          	});
        }

        // at this stage the chart always exists
        // get difference in keys
        var old_keys = _.keys(chart.x());
        var new_keys = _.keys(x.dataset);
        var diff     = _.difference(old_keys,new_keys);

        // update the data and colors
        chart.load({
          json  : x.dataset,
          colors: x.colors,

          // unload data that we don't need anymore
          unload: diff
        });
      },

      // this part will be called each time we resize the containing div element
      resize: function(el, width, height, instance) {

      },

      getChart: function(){
        return chart;
      }
    };
  }
});

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
