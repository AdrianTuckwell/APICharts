var ColumnChart = function(name, d1, d2, d3, d4, cats){
  var container = document.getElementById('column-chart');
  // capital C on Chart as its a constructor...
  var chart = new Highcharts.Chart({
    chart:{
      type: 'column',
      renderTo: container
    },
    title:{
      text: name
    },
    series: [{
      name: "Chort 7",
      data: [ {y:d1, color:"red"},
              {y:d2, color:"green"},
              {y:d3, color: "yellow"},
              {y:d4, color: "pink"}],
    }],
    xAxis: {
      categories: cats
    }
  })
}