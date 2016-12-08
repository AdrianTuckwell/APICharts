window.onload = function(){
  var name = "Fave program";
  var d1 = 10;
  var d2 = 20;
  var d3 = 30;
  var d4 = 40;
  var cats = ['Javascript', 'Java', 'Ruby', 'Basic']

  new PieChart();
  //--------------name, data 1, data 2, data 3, data 4, column categories
  new ColumnChart(name, d1, d2, d3, d4, cats);


}