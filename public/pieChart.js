var PieChart = function(){
  var container = document.getElementById('pie-chart');
  var chart = new Highcharts.Chart({

    chart:{
      type: 'pie',
      renderTo: container
    },

    title:{
      text:"Pokemon Types I've Caught"
    },

    series: [{
      name: "Pokemon Type",
      data: [
        {
          name: "Fire",
          y: 74,
          color: "DodgerBlue"
          
        },
        {
          name: "Water",
          y: 25,
          color: '#ffac33'
        },
        {
          name: "Grass",
          y: 1,
          color: "tomato",
          sliced: true
        }
      ]
    }]

  });
}