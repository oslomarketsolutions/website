$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#highchart-live').highcharts({
            chart: {
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                spacing: [0, 0, 0, 0],
                backgroundColor: null,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: ''
            },
            plotOptions: {
                area: {
                    threshold: null
                },
                series: {

                    marker: {
                        enabled: false,
                        states: {
                            hover: {
                                enabled: false,
                                lineWidth: 0
                            },
                            select: {
                                enabled: false,
                                lineWidth: 0
                            }
                        }
                    },
                    states: {
                        hover: {
                            enabled: false,
                            lineWidth: 0
                        },
                        select: {
                            enabled: false,
                            lineWidth: 0
                        }
                    },
                    lineWidth: 3,
                    fillOpacity: 0.6
                }
            },
            xAxis: {
                lineColor: 'transparent',
                lineWidth: 2,
                labels: {
                    enabled: false
                },
                title: {
                    text: ''
                },
            },
            yAxis: {
                lineColor: 'transparent',
                gridLineColor: 'rgba(255, 255, 255, 0.2)',
                lineWidth: 0,
                labels: {
                    enabled: false
                },
                title: {
                    text: ''
                },
            },
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                type: 'area',
                name: 'Random data',
                color: '#1778C1',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    });

  function resize_iframe() {

      var height = window.innerWidth;//Firefox
      if (document.body.clientHeight) {
        height = document.body.clientHeight;//IE
      }
      //resize the iframe according to the size of the
      //window (all these should be on the same line)
      document.getElementById("glu").style.height = parseInt(height-
      document.getElementById("glu").offsetTop - 8) + "px";
  }

  // var norwegian = true;
  // if (window.location.pathname.indexOf('eng')) {
  //     norwegian = false;
  // }

  var windowWidth = $(window).width();
  if(windowWidth > 767){
    skrollr.init();
  } 


  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');
  sideslider.click(function(event){
      $(sideslider).toggleClass('fixed');
      $(sel).toggleClass('in');
      $(sel2).toggleClass('out');
  });


});


