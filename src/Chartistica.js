/*!
 * Chartistica v0.1.5
 * (c) 2020 Wolfgang Hauptfleisch <dev@augmentedlogic.com>
 * Released under the MIT License
 */
var Chartistica = {

  getThemes: function()
  {

    var themes= [];
    themes['gray'] = [];
    themes['gray']['gridColor'] = "rgba(171,171,171,1)";
    themes['gray']['fontColor'] = "rgba(171,171,171,1)";
    themes['gray'][0] = [];
    themes['gray'][0]['backgroundColor'] = "rgba(200, 200, 200, 0.9)";
    themes['gray'][0]['borderColor'] = "rgba(200, 200, 200, 0.9)";
    themes['gray'][1] = [];
    themes['gray'][1]['backgroundColor'] = "rgba(160, 160, 160, 0.9)";
    themes['gray'][1]['borderColor'] = "rgba(160, 160, 160, 0.9)";

    themes['green'] = [];
    themes['green']['gridColor'] = "rgba(100,100,100,1)";
    themes['green']['fontColor'] = "rgba(171,171,171,1)";
    themes['green'][0] = [];
    themes['green'][0]['backgroundColor'] = "rgba(42,126, 67, 0.9)";
    themes['green'][0]['borderColor'] = "rgba(42,126, 67, 0.9)";
    themes['green'][1] = [];
    themes['green'][1]['backgroundColor'] = "rgba(126,189,145, 0.9)";
    themes['green'][1]['borderColor'] = "rgba(126,189,145, 0.9)";
    themes['green'][2] = [];
    themes['green'][2]['backgroundColor'] = "rgba(79,157,102, 0.9)";
    themes['green'][2]['borderColor'] = "rgba(79,157,102, 0.9)";


    themes['red'] = [];
    themes['red']['gridColor'] = "rgba(100,100,100,1)";
    themes['red']['fontColor'] = "rgba(171,171,171,1)";
    themes['red'][0] = [];
    themes['red'][0]['backgroundColor'] = "rgba(216,49,40, 0.9)";
    themes['red'][0]['borderColor'] = "rgba(216,49,40, 0.9)";
    themes['red'][1] = [];
    themes['red'][1]['backgroundColor'] = "rgba(219,69,61, 0.9)";
    themes['red'][1]['borderColor'] = "rgba(219,69,61, 0.9)";
    themes['red'][2] = [];
    themes['red'][2]['backgroundColor'] = "rgba(223,90,82, 0.9)";
    themes['red'][2]['borderColor'] = "rgba(223,90,82, 0.9)";

    themes['blue'] = [];
    themes['blue']['gridColor'] = "rgba(100,100,100,1)";
    themes['blue']['fontColor'] = "rgba(171,171,171,1)";
    themes['blue'][0] = [];
    themes['blue'][0]['backgroundColor'] = "rgba(102, 158, 212, 0.9)";
    themes['blue'][0]['borderColor'] = "rgba(102, 158, 212, 0.9)";
    themes['blue'][1] = [];
    themes['blue'][1]['backgroundColor'] = "rgba(112, 168, 20, 0.9)";
    themes['blue'][1]['borderColor'] = "rgba(112, 168, 222, 0.9)";
    themes['blue'][2] = [];
    themes['blue'][2]['backgroundColor'] = "rgba(112, 168, 20, 0.9)";
    themes['blue'][2]['borderColor'] = "rgba(112, 168, 222, 0.9)";
    themes['blue'][3] = [];
    themes['blue'][3]['backgroundColor'] = "rgba(65,105,225, 0.9)";
    themes['blue'][3]['borderColor'] = "rgba(65,105,225, 0.9)";
    themes['blue'][4] = [];
    themes['blue'][4]['backgroundColor'] = "rgba(0,0,139, 0.9)";
    themes['blue'][4]['borderColor'] = "rgba(0,0,139, 0.9)";
    themes['blue'][5] = [];
    themes['blue'][5]['backgroundColor'] = "rgba(25,25,112, 0.9)";
    themes['blue'][5]['borderColor'] = "rgba(25,25,112, 0.9)";


    themes['pink'] = [];
    themes['pink']['gridColor'] = "rgba(171,171,171,1)";
    themes['pink']['fontColor'] = "rgba(171,171,171,1)";
    themes['pink'][0] = [];
    themes['pink'][0]['backgroundColor'] = "rgba(204, 129, 203, 0.6)";
    themes['pink'][0]['borderColor'] = "rgba(204, 129, 203, 0.9)";
    themes['pink'][1] = [];
    themes['pink'][1]['backgroundColor'] = "rgba(204,0,102, 0.6)";
    themes['pink'][1]['borderColor'] = "rgba(204,0,102, 0.9)";
    themes['pink'][2] = [];
    themes['pink'][2]['backgroundColor'] = "rgba(255,0,128, 0.6)";
    themes['pink'][2]['borderColor'] = "rgba(255,0,128, 0.9)";


    themes['night_gray'] = [];
    themes['night_gray']['gridColor'] = "rgba(240,240,240,1)";
    themes['night_gray']['fontColor'] = "rgba(240,240,240,1)";
    themes['night_gray'][0] = [];
    themes['night_gray'][0]['backgroundColor'] = "rgba(200, 200, 200, 0.9)";
    themes['night_gray'][0]['borderColor'] = "rgba(200, 200, 200, 0.9)";
    themes['night_gray'][1] = [];
    themes['night_gray'][1]['backgroundColor'] = "rgba(200, 100, 100, 0.9)";
    themes['night_gray'][1]['borderColor'] = "rgba(200, 100, 100, 0.9)";

    return themes;
  },

  drawChart: function(ctx_name, chart_type, theme, data, legend_setting)
  {


    theme = typeof theme !== 'undefined' ? theme : 'gray';
    var themes = Chartistica.getThemes();
    var selected_theme = themes[theme];
    var is_stacked = false;

   for (var i = 0; i < data.datasets.length; i++) {
        data.datasets[i].backgroundColor =  selected_theme[i]['backgroundColor'];
        data.datasets[i].borderColor = selected_theme[i]['borderColor'];

        if(chart_type == "bar") {
          data.datasets[i].borderWidth = 0;
          data.datasets[i].fill = false;
        }

        if(chart_type == "stackedbar") {
          data.datasets[i].borderWidth = 0;
          data.datasets[i].fill = false;
          chart_type = "bar";
          is_stacked = true;
        }

        if(chart_type == "line") {
          data.datasets[i].borderWidth = 4;
          data.datasets[i].fill = false;
        }
        if(chart_type == "filledline") {
          data.datasets[i].borderWidth = 4;
          data.datasets[i].fill = true;
          chart_type = "line";
        }
        if(chart_type == "steppedlinefilled") {
          data.datasets[i].borderWidth = 4;
          data.datasets[i].fill = true;
          data.datasets[i].steppedLine = true;
          chart_type = "line";
        }
        if(chart_type == "steppedline") {
          data.datasets[i].borderWidth = 4;
          data.datasets[i].fill = false;
          data.datasets[i].steppedLine = true;
          chart_type = "line";
        }
        if(chart_type == "pie") {
          data.datasets[i].borderWidth = 2;
          data.datasets[i].fill = true;
        }

   }


   var ctx = document.getElementById(ctx_name);


   if(chart_type == "bar" || chart_type == "line" || chart_type == "stackedbar") {

   var myChart = new Chart(ctx, {
      type: chart_type,
      data: {
         labels: data.labels,
         datasets: data.datasets,
      },
     options: {
        legend: {
            labels: {
                fontColor: selected_theme['fontColor'],
                fontSize: parseInt(legend_setting)
            }
        },
        scales: {
            yAxes: [{
                stacked: is_stacked,
                ticks: {
                    fontColor: selected_theme['fontColor'],
                    beginAtZero: true
                },
                gridLines: {
                   color: selected_theme['gridColor'],
                   lineWidth: 0.5
                }
             }],
            xAxes: [{
                stacked: is_stacked,
                ticks: {
                    fontColor: selected_theme['fontColor'],
                    beginAtZero: true
                },
                gridLines: {
                   color: selected_theme['gridColor'],
                   lineWidth: 0.5
                }
            }],
        }
     }
  });


   }



   /**
    * draw a simple sparkle bar
    *
    **/
   if(chart_type == "sparklebar") {

         chart_type = "bar";

   var myChart = new Chart(ctx, {
      type: chart_type,
      data: {
         labels: data.labels,
         datasets: data.datasets,
      },
     options: {
        showTooltips: false,
        events: [],
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(25,25,112, 0)",
                    beginAtZero: true
                },
                gridLines: {
                   display: false,
                   drawBorder: false,
                   color: "rgba(25,25,112, 0)",
                   lineWidth: 0
                }
             }],
            xAxes: [{
                ticks: {
                    fontColor: "rgba(25,25,112, 0)",
                    beginAtZero: true
                },
                categoryPercentage: 1.0,
                barPercentage: 0.97,
                gridLines: {
                   display: false,
                   drawBorder: false,
                   color: "rgba(25,25,112, 0)",
                   lineWidth: 0
                }
            }],
        }
     }
    });

   }

   if(chart_type == "radar") {

    var myRadarChart = new Chart(ctx, {
       type: 'radar',
       data: {
         labels: data.labels,
         datasets: data.datasets,
       }
    });

   }

   /**
    * draw a simple sparkle line
    *
    **/
   if(chart_type == "filledsparkleline") {

         chart_type = "line";

   var myChart = new Chart(ctx, {
      type: chart_type,
      data: {
         labels: data.labels,
         datasets: data.datasets,
      },
     options: {
                elements: {
                    point:{
                        radius: 0
                    }
                },
        showTooltips: false,
        events: [],
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(25,25,112, 0)",
                    beginAtZero: true
                },
                gridLines: {
                   display: false,
                   drawBorder: false,
                   color: "rgba(25,25,112, 0)",
                   lineWidth: 0
                }
             }],
            xAxes: [{
                ticks: {
                    fontColor: "rgba(25,25,112, 0)",
                    beginAtZero: true
                },
                categoryPercentage: 1.0,
                barPercentage: 0.9,
                gridLines: {
                   display: false,
                   drawBorder: false,
                   color: "rgba(25,25,112, 0)",
                   lineWidth: 0
                }
            }],
        }
     }
    });

   }



   if(chart_type == "pie") {

      if(chart_type == "minimalbar") {
         chart_type = "bar";
      }

   var myChart = new Chart(ctx, {
      type: chart_type,
      data: {
         labels: data.labels,
         datasets: data.datasets,
      },
     options: {
        legend: {
            labels: {
                fontColor: selected_theme['fontColor'],
                fontSize: 18
            }
        },
        scales: {
        }
     }
  });

   }
  },


  render: function()
  {
   var elements = document.getElementsByClassName("chartistica");
   for (var i = 0; i < elements.length; i++) {

     (function(i){
       var data;
       var id = "chartistica-" + i;
           elements[i].id = id;
       var theme = elements[i].getAttribute('data-theme');
       var url = escape(elements[i].getAttribute('data-url'));
       var chart_type = elements[i].getAttribute('data-chart');
       var legend_setting = elements[i].getAttribute('data-legend') || 14 ;
       console.log("legend" + legend_setting);

       var xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
              data = JSON.parse(xhr.responseText);
              Chartistica.drawChart(id, chart_type, theme, data, legend_setting);
          }
       };
       xhr.open('GET', url);
       xhr.send();
     })(i);
    }
  },

};
