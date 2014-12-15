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
		$.get('/petLocation', function(data) {
			var Location = [];
			var total = 0;
			var Eastern = 0.0;
			var Western = 0.0;
			var nullflag =0;
			for (var i in data) {
				Location.push(data[i].pet_OwnerLocation);
				total++;
				if(Location[i] == "eastern") Eastern++;
				else if (Location[i] == "western") Western++;
				else nullflag =1;
			}
			Eastern = Eastern / total * 100;
			Western = Western / total * 100;
			generatePieChart("Eastern", "Western", Eastern, Western, 'Location');
			if (nullflag == 1) alert("there is a location which is not easter nor western. Fix the database");
		});
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
        for (var i in data) {
			if(data[i].pet_Age){
				Age.push(parseInt(data[i].pet_Age));
				count++;
				
				if(num[count - 1] == null) num[count - 1] = 0;
				num[count - 1]++;
				console.log("num:" + num);
				console.log("num:" + num);
			}
			else if (data[i].pet_Age == null) numNull++;
			console.log("count:" + count);
			console.log("Age:" + Age);
			console.log("num:" + num);
        }
		ageinfo.sort(
			function(a,b){
				var aName = a["Age"];
				var bName = b["Age"];
				if( a < b ) return -1;
				if( a > b ) return 1;
				return 0;
			}
		);	
		console.log(ageinfo);

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
                categories : Age
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
               data : num
            }]
        });
    });
});

});

