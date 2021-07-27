var temp = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(temp, {
			type: 'line',
			data: {
				labels: ['8 Juni 2021', '15 Juni 2021', '22 Juni 2021', '29 Juni 2021', '6 Juli 2021', '13 Juli 2021'],
				datasets: [{
					label: 'Temperature',
					data: [
						23.5,
						28,
						22,
						22,
						23,
						21
					],
					backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				tooltips:{
					enabled:true
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		});





var visitor = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(visitor, {
	type: 'pie',
	data: {
		labels: ['Red', 'Green', 'Blue'],
		datasets: [{
			label: 'Temperature',
			data: [
				23.5,
				28,
				21
			],
			backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
			'rgba(255,99,132,1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1,
		}]
	},
	options: {
		title:{
			display:true,
			text:'Pasien & Pengunjung',
			fontSize:25
		},
		tooltips:{
			enabled:true
		},
	}
});



var medic = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(medic, {
	type: 'pie',
	data: {
		labels: ['Red', 'Green', 'Blue'],
		datasets: [{
			label: 'Temperature',
			data: [
				23.5,
				28,
				21
			],
			backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
			'rgba(255,99,132,1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1,
		}]
	},
	options: {
		title:{
			display:true,
			text:'Tenaga Medis',
			fontSize:25
		},
		tooltips:{
			enabled:true
		},
	}
});


var nonmedic = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(nonmedic, {
	type: 'pie',
	data: {
		labels: ['Red', 'Green', 'Blue'],
		datasets: [{
			label: 'Temperature',
			data: [
				23.5,
				28,
				21
			],
			backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
			'rgba(255,99,132,1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1,
		}]
	},
	options: {
		title:{
			display:true,
			text:'Tenaga Non-medis',
			fontSize:25
		},
		tooltips:{
			enabled:true
		},
	}
});