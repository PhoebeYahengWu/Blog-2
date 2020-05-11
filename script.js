var chart = new CanvasJS.Chart("chartContainer1", {
	animationEnabled: true,
	title: {
		text: "Python, Java and JavaScript Tutorials are Most Often Searched on Google"
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


var chart = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	
	title:{
		text:"JavaScript, Python and Java are Most Popular According To developers"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		// title: "Number of Companies"
	},
	data: [{
		type: "bar",
        name: "companies",
        yValueFormatString: "##0.00\"%\"",
		axisYType: "secondary",
		color: "#FFD395",
		dataPoints: [
            { y: 20.6, label: "C" },
            { y: 21.2, label: "TypeScript" },
            { y: 23.5, label: "c++" },
            { y: 26.4, label: "PHP" },
			{ y: 31, label: "C#" },
			{ y: 41.1, label: "Java" },
			{ y: 41.7, label: "Python" },
			{ y: 54.4, label: "SQL" },
            { y: 63.5, label: "HTML/CSS" },
            { y: 67.8, label: "JavaScript" }
		]
	}]
});
chart.render();


var chart = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
	title:{
		text: "Python and Java are Most In-demand With Employers, followed by JavaScript"
	},
	axisX: {
		valueFormatString: "MMM, YYYY"
	},
	axisY: {
		title: "Post Count",
		includeZero: true,
	},
	legend:{
		cursor: "pointer",
		fontSize: 16,
		itemclick: toggleDataSeries
	},
	toolTip:{
		shared: true
	},
	data: [{
		name: "Python",
		type: "spline",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017,1,31), y: 41000 },
			{ x: new Date(2018,1,31), y: 46000 },
			{ x: new Date(2019,1,31), y: 61818 },
			{ x: new Date(2020,1,31), y: 73733 } 
		]
	},
	{
		name: "Java",
		type: "spline",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017,1,31), y: 68000 },
			{ x: new Date(2018,1,31), y: 62000 },
			{ x: new Date(2019,1,31), y: 65986 },
			{ x: new Date(2020,1,31), y: 69410 }
		]
    },
    {
		name: "C++",
		type: "spline",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017,1,31), y: 33000 },
			{ x: new Date(2018,1,31), y: 31000 },
			{ x: new Date(2019,1,31), y: 36798 },
			{ x: new Date(2020,1,31), y: 41026 }
		]
    },
    {
		name: "C#",
		type: "spline",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017,1,31), y: 28000 },
			{ x: new Date(2018,1,31), y: 27000 },
			{ x: new Date(2019,1,31), y: 27521 },
			{ x: new Date(2020,1,31), y: 31929 }
		]
    },  
	{
		name: "JavaScript",
		type: "spline",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2017,1,31), y: 40000 },
			{ x: new Date(2018,1,31), y: 38000 },
			{ x: new Date(2019,1,31), y: 38018 },
			{ x: new Date(2020,1,31), y: 56499 }
		]
	}]
});
chart.render();

function toggleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

