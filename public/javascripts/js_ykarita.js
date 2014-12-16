$(function() {
//function to create piecharts. gets 2 strings and 2 numbers
function generatePieChart(Name1, Name2, num1, num2, dataname){
	$('#chart').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: 1,//null,
				plotShadow: false
			},
			title: {
				text: 'Pet '+ dataname + ' Distribution'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},
			series: [{
				type: 'pie',
				name: 'Pet '+ dataname + ' Distribution',
				data: [
					[Name1,   num1],
					[Name2,   num2],
				]
			}]
		});
	}
	
	//shows type distribution first
	$.get('/petType', function(data) {
			var Type = [];
			var total = 0;
			var dog = 0.0;
			var cat = 0.0;
			var nullflag =0;
			for (var i in data) {
				Type.push(data[i].pet_Type);
				total++;
				if(Type[i] == "cat") cat++;
				else if (Type[i] == "dog") dog++;
				else nullflag = 1;
			}
			dog = dog / total * 100;
			cat = cat / total * 100;
			generatePieChart("Dog", "Cat", dog, cat, 'Type');
			if (nullflag == 1) alert("there is a pet which is not cat nor dog. Fix the database");
		});
	//petTypebutton
	$('#petType').click(function() {
		$.get('/petType', function(data) {
			var Type = [];
			var total = 0;
			var dog = 0.0;
			var cat = 0.0;
			var nullflag =0;
			for (var i in data) {
				Type.push(data[i].pet_Type);
				total++;
				if(Type[i] == "cat") cat++;
				else if (Type[i] == "dog") dog++;
				else nullflag = 1;
			}
			dog = dog / total * 100;
			cat = cat / total * 100;
			generatePieChart("Dog", "Cat", dog, cat, 'Type');
			if (nullflag == 1) alert("there is a pet which is not cat nor dog. Fix the database");
		});
    });
	


	$('#petGender').click(function() {
		$.get('/petGender', function(data) {
			var Gender = [];
			var total = 0;
			var Male = 0.0;
			var Female = 0.0;
			var nullflag =0;
			for (var i in data) {
				Gender.push(data[i].pet_Gender);
				total++;
				if(Gender[i] == "M") Male++;
				else if (Gender[i] == "F") Female++;
				else nullflag =1;
			}
			
			Male = Male / total * 100;
			Female = Female / total * 100;
			generatePieChart("Male", "Female", Male, Female, 'Gender');
			if (nullflag == 1) alert("there is a gender which is not male nor female. Fix the database");
		});
    });
	
	
	
	$('#petLocation').click(function() {

        // Make codes uppercase to match the map data
		$.get('/petLocation', function(data) {
			$.each(data, function () {
            this.code = this.code.toUpperCase();
			});
console.log(data);
		var mapData1 = Highcharts.maps['countries/us/us-all'];
        // Instanciate the map
        var chart = new Highcharts.Map({

            chart: {
				renderTo: 'chart'
			},

            title : {
                text : 'Pet Location Map'
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EEEEFF',
                maxColor: '#000022',
                stops: [
                    [0, '#EFEFFF'],
                    [0.67, '#4444FF'],
                    [1, '#000022']
                ]
            },
            series : [{
                animation: {
                    duration: 1000
                },
                data : data,
                mapData: mapData1,
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: 'white',
                    format: '{point.code}'
                },
                name: 'Pet Distribution',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
                }
            }]
        });
    });
	$('#chart').highcharts('Map', chart);
    });
$('#petAge').click(function() {
	
	
    $.get('/petAge', function(data) {
		
		var Age = [];
		var num = [];
		num[0] = 0;
		var count = 0;
		var ageinfo = [Age, num];
		var numNull = 0;
		console.log(data);
		var k =0;
        for (var i in data) {
			if(data[i].pet_Age){
			k = 0;
				while (true){
					if(Age[k] == null){
						Age.push(parseInt(data[i].pet_Age));
						if(num[k] == null) num[k] = 0;
						num[k]++;
						console.log("num:" + num);
						console.log("num:" + num);
						break;
					}
					if(Age[k] == data[i].pet_Age){
						count++;
						if(num[k] == null) num[k] = 0;
						num[k]++;
						console.log("num:" + num);
						console.log("num:" + num);
						break;
					}
					k++;
				}
			}
			else if (data[i].pet_Age == null) numNull++;
			console.log("count:" + count);
			console.log("Age:" + Age);
			console.log("num:" + num);
        }
		console.log(ageinfo);
		ageinfo = ageinfo.sort(
			function(a,b){
				var aName = a[0];
				var bName = b[0];
				if( aName < bName ) return -1;
				if( aName > bName ) return 1;
				return 0;
			}
		);	
		console.log(ageinfo);
		var zero =0;
		var three =0; 
		var six =0;
		var nine = 0;
		var more = 0;
		for( var i in Age){
			if (Age[i] < 3) zero ++;
			else if (Age[i] < 6) three ++;
			else if (Age[i] < 9) six ++;
			else if (Age[i] < 12) nine ++;
			else more++;
		}
        $('#chart').highcharts({
            chart : {
                type : 'column'
            },
            title : {
                text : 'Age Distribution'
            },
            xAxis : {
                title : {
                    text : 'Age'
                },
                categories : ['0 ~ 2', '3 ~ 5','6 ~ 8','9 ~ 11','12 ~']
            },
            yAxis : {
                title : {
                    text : 'Number'
                },
                
            },
            tooltip : {
                crosshairs : true,
                shared : true,
                valueSuffix : ''
            },
            plotOptions : {
                spline : {
                    marker : {
                        radius : 4,
                        lineColor : '#666666',
                        lineWidth : 1
                    }
                }
            },
            series : [{

               name : 'Number',
               data : [zero, three, six, nine, more]
            }]
        });
    });
});

});

