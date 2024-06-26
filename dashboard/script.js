google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: {
      minValue: new Date(2003, 0, 1), // January 1, 2003
      maxValue: new Date(2008, 0, 1)  // January 1, 2008
    }
  }
  function resize() {
    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    var width = window.innerWidth < 420 ? 300 : '100%';
    document.getElementById('curve_chart').style.width = width + 'px';
    chart.draw(data, options);
  }

  window.onload = resize
  window.onresize = resize
};



window.onload = resize;
window.onresize = resize;


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




    function formatDoc(cmd, value=null) {
        if(value) {
            document.execCommand(cmd, false, value);
        } else {
            document.execCommand(cmd);
        }
    }
    
    function addLink() {
        const url = prompt('Insert url');
        formatDoc('createLink', url);
    }
    
    
    
    
    const content = document.getElementById('content');
    
    content.addEventListener('mouseenter', function () {
        const a = content.querySelectorAll('a');
        a.forEach(item=> {
            item.addEventListener('mouseenter', function () {
                content.setAttribute('contenteditable', false);
                item.target = '_blank';
            })
            item.addEventListener('mouseleave', function () {
                content.setAttribute('contenteditable', true);
            })
        })
    })
    
    
    const showCode = document.getElementById('show-code');
    let active = false;
    
    showCode.addEventListener('click', function () {
        showCode.dataset.active = !active;
        active = !active
        if(active) {
            content.textContent = content.innerHTML;
            content.setAttribute('contenteditable', false);
        } else {
            content.innerHTML = content.textContent;
            content.setAttribute('contenteditable', true);
        }
    })
    
    
    
    const filename = document.getElementById('filename');
    
    function fileHandle(value) {
        if(value === 'new') {
            content.innerHTML = '';
            filename.value = 'untitled';
        } else if(value === 'txt') {
            const blob = new Blob([content.innerText])
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a');
            link.href = url;
            link.download = `${filename.value}.txt`;
            link.click();
        } else if(value === 'pdf') {
            html2pdf(content).save(filename.value);
        }
    }




    function checkCheckboxBasedOnWidth() {
        const checkbox = document.getElementById('#nav-bar input');
        const mediaQuery = window.matchMedia('(max-width: 420px)');
    
        function handleWidthChange(e) {
          if (e.matches) {
            checkbox.checked = "check";
          } else {
            checkbox.checked = false;
          }
        }
    
        // Initial check
        handleWidthChange(mediaQuery);
    
        // Add listener for width changes
        mediaQuery.addEventListener(handleWidthChange);
      }
    
      // Run the function on page load
      document.addEventListener('DOMContentLoaded', checkCheckboxBasedOnWidth);

    