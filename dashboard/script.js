google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}



const ctx1 = document.getElementById('siteHealthChart').getContext('2d');
    new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Your site', ''],
            datasets: [{
                data: [84, 16],
                backgroundColor: ['#000', '#E0E0E0'],
                borderWidth: 0
            }]
        },
        options: {
            rotation: -1 * Math.PI,
            circumference: 1 * Math.PI,
            cutout: '70%',
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false }
            }
        }
    });

    // Online Sales Chart
    const ctx2 = document.getElementById('onlineSalesChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Mobile', ''],
            datasets: [{
                data: [80, 20],
                backgroundColor: ['#00C853', '#E0E0E0'],
                borderWidth: 0
            }]
        },
        options: {
            rotation: -1 * Math.PI,
            circumference: 2 * Math.PI,
            cutout: '70%',
            plugins: {
                tooltip: { enabled: false },
                legend: { display: false }
            }
        }
    });