/*!
 * Chartistica v0.1
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
    themes['pink'][1]['backgroundColor'] = "rgba(204, 129, 103, 0.6)";
    themes['pink'][1]['borderColor'] = "rgba(204, 129, 103, 0.9)";



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

  drawChart: function(ctx_name, chart_type, theme, data)
  {

    theme = typeof theme !== 'undefined' ? theme : 'gray';
    var themes = Chartistica.getThemes();
    var selected_theme = themes[theme];

   for (var i = 0; i < data.datasets.length; i++) {
        data.datasets[i].backgroundColor =  selected_theme[i]['backgroundColor'];
        data.datasets[i].borderColor = selected_theme[i]['borderColor'];

        if(chart_type == "bar") {
          data.datasets[i].borderWidth = 0;
          data.datasets[i].fill = false;
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
        if(chart_type == "pie") {
          data.datasets[i].borderWidth = 2;
          data.datasets[i].fill = true;
        }

   }


   var ctx = document.getElementById(ctx_name);


   if(chart_type == "bar" || chart_type == "line") {

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
            yAxes: [{
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
       var url = elements[i].getAttribute('data-url');
       var chart_type = elements[i].getAttribute('data-chart');

       var xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
              data = JSON.parse(xhr.responseText);
              Chartistica.drawChart(id, chart_type, theme, data);
          }
       };
       xhr.open('GET', url);
       xhr.send();
     })(i);
    }
  },

};
