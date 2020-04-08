var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "How Often Language Tutorials are Searched on Google"
	},
	data: [{
		type: "pie",
		startAngle: 240,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{label} {y}",
		dataPoints: [
			{y: 30.61, label: "Python"},
			{y: 18.45, label: "Java"},
			{y: 7.91, label: "JavaScript"},
			{y: 7.27, label: "C#"},
            {y: 6.07, label: "PHP"},
            {y: 5.76, label: "C/C++"},
            {y: 3.8, label: "R"},
            {y: 2.23, label: "Swift"},
            {y: 1.85, label: "TypeScript"},
            {y: 16.05, label: "Other Languages"}
		]
	}]
});
chart.render();





var Bronx = {
    label: "Bronx",
    data: [1451277, 1424815, 1471701, 1168972, 1203789, 1332650, 1385108, 1446788],
    lineTension: 0,
    fill: false,
    borderColor: '#9AC2DB'
  };

var Brooklyn = {
    label: "Brooklyn",
    data: [2738175, 2627319, 2602012, 2230936, 2300664, 2465326, 2552911, 2648452],
    lineTension: 0,
    fill: false,
    borderColor: '#DEB9B4'
  };

  var Manhattan = {
    label: "Manhattan",
    data: [1960101, 1698281, 1539233, 1428285, 1487536, 1537195, 1585873, 1638281],
    lineTension: 0,
    fill: false,
    borderColor: '#F1C28E'
  };

  var Queens = {
    label: "Queens",
    data: [1550849, 1809578, 1986473, 1891325, 1951598, 2229379, 2250002, 2330295],
    lineTension: 0,
    fill: false,
    borderColor: '#96ACAC'
  };

  var StatenIsland = {
    label: "Staten Island",
    data: [191555, 221991, 295443, 352121, 378977, 443728, 468730, 487155], 
    lineTension: 0,
    fill: false,
    borderColor: '#988D8E'
  };





var Data = {
      labels: ['1950','1960','1970','1980','1990','2000','2010','2020'],
      datasets: [Bronx, Brooklyn, Manhattan, Queens, StatenIsland] 
    };
    

let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, { 
    type: 'line',
    data:  Data,
    options: {
        title: {
            text: "How Has the Population in Five Boroughs of New York City Changed Over Time?",
            display: true
        },
        responsive: true,
        maintainAspectRatio: true
    }
});


let labels1 = ['Bronx','Brooklyn','Manhattan','Queens','Staten Island'];
let data1 = [1446788, 2648452, 1638281, 2330295, 487155];
let colors1 = ['#9AC2DB','#DEB9B4','#F1C28E','#96ACAC','#988D8E']
let myChart1 = document.getElementById("myChart1").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title: {
            text: "New York City Population by Borough in 2020",
            display: true
        },
        responsive: true,
        maintainAspectRatio: true
    }
});