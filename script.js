
// Data export functions
function exportToCSV() {
    const headers = ['Direction', '1995', '2000', '2005', '2010', '2015', '2020', '2024'];
    const rows = [
        ['West', 490500, 534600, 872100, 1976400, 1017900, 534600, 3784500],
        ['South-West', 1773000, 1127700, 1930500, 2544300, 1611000, 1127700, 3248100],
        ['South', 1659600, 1440900, 2134800, 2991600, 2541600, 1440900, 4527900],
        ['South-East', 310500, 262800, 436500, 666000, 406800, 262800, 834300],
        ['East', 1093500, 773100, 1351800, 2346300, 1484100, 773100, 2856600],
        ['North-West', 2458800, 2785500, 3346200, 4456800, 3932100, 2785500, 6745500],
        ['North-East', 2584800, 1986300, 3038400, 5173200, 3985200, 1986300, 8017200],
        ['North', 3219300, 2726100, 3493800, 4095000, 3621600, 2726100, 5770800]
    ];

    let csvContent = headers.join(',') + '\n';
    rows.forEach(row => {
        csvContent += row.join(',') + '\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'areaflow_data.csv');
    link.click();
}

function exportToExcel() {
    const data = [
        {
            Direction: 'West',
            '1995': 490500,
            '2000': 534600,
            '2005': 872100,
            '2010': 1976400,
            '2015': 1017900,
            '2020': 534600,
            '2024': 3784500
        },
        // ... other directions similarly
    ];
    
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', `https://api.ods.exceljs.io/convert/json-to-excel?data=${encodeURIComponent(json)}`);
    link.setAttribute('download', 'areaflow_data.xlsx');
    link.setAttribute('target', '_blank');
    link.click();
}

function exportToJSON() {
    const data = {
        description: "AreaFlow Directional Area Data 1995-2024",
        units: "square meters",
        data: [
            {
                direction: 'West',
                values: [490500, 534600, 872100, 1976400, 1017900, 534600, 3784500]
            },
            // ... other directions similarly
        ]
    };
    
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'areaflow_data.json');
    link.click();
}

document.addEventListener('DOMContentLoaded', function() {
// Line Chart
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['1995', '2000', '2005', '2010', '2015', '2020', '2024'],
            datasets: [
                {
                    label: 'West',
                    data: [490500, 534600, 872100, 1976400, 1017900, 534600, 3784500],
                    borderColor: '#6366F1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    tension: 0.3
                },
                {
                    label: 'South-West',
                    data: [1773000, 1127700, 1930500, 2544300, 1611000, 1127700, 3248100],
                    borderColor: '#EC4899',
                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                    tension: 0.3
                },
                // ... add other directions similarly
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw.toLocaleString() + ' m²';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + ' m²';
                        }
                    }
                }
            }
        }
    });
    // Area Comparison Chart (All Years)
    const areaCompCtx = document.getElementById('areaComparisonChart').getContext('2d');
    const areaComparisonChart = new Chart(areaCompCtx, {
        type: 'bar',
        data: {
            labels: ['1995', '2000', '2005', '2010', '2015', '2020', '2024'],
            datasets: [
                {
                    label: 'West',
                    data: [490500, 534600, 872100, 1976400, 1017900, 534600, 3784500],
                    backgroundColor: 'rgba(99, 102, 241, 0.7)',
                    borderColor: '#6366F1',
                    borderWidth: 1
                },
                {
                    label: 'South-West',
                    data: [1773000, 1127700, 1930500, 2544300, 1611000, 1127700, 3248100],
                    backgroundColor: 'rgba(236, 72, 153, 0.7)',
                    borderColor: '#EC4899',
                    borderWidth: 1
                },
                {
                    label: 'South',
                    data: [2529000, 1985400, 2967300, 3949200, 2948400, 1985400, 4527900],
                    backgroundColor: 'rgba(249, 168, 37, 0.7)',
                    borderColor: '#F9A825',
                    borderWidth: 1
                },
                {
                    label: 'South-East',
                    data: [621000, 459900, 621000, 918900, 459900, 459900, 834300],
                    backgroundColor: 'rgba(5, 150, 105, 0.7)',
                    borderColor: '#059669',
                    borderWidth: 1
                },
                {
                    label: 'East',
                    data: [1474200, 1182600, 1698300, 2295000, 1502100, 1182600, 2856600],
                    backgroundColor: 'rgba(6, 182, 212, 0.7)',
                    borderColor: '#06B6D4',
                    borderWidth: 1
                },
                {
                    label: 'North-West',
                    data: [2214000, 1784700, 2544300, 3638700, 2111400, 1784700, 6745500],
                    backgroundColor: 'rgba(132, 204, 22, 0.7)',
                    borderColor: '#84CC16',
                    borderWidth: 1
                },
                {
                    label: 'North-East',
                    data: [2749500, 2199600, 3083400, 4284900, 2559600, 2199600, 8017200],
                    backgroundColor: 'rgba(234, 88, 12, 0.7)',
                    borderColor: '#EA580C',
                    borderWidth: 1
                },
                {
                    label: 'North',
                    data: [2033100, 1603800, 2308500, 3288600, 1938600, 1603800, 5770800],
                    backgroundColor: 'rgba(139, 92, 246, 0.7)',
                    borderColor: '#8B5CF6',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw.toLocaleString() + ' m²';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: false,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + ' m²';
                        }
                    }
                },
                x: {
                    stacked: false
                }
            }
        }
    });
const barCtx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['West', 'South-West', 'South', 'South-East', 'East', 'North-West', 'North-East', 'North'],
            datasets: [{
                label: 'Area in 2024 (m²)',
                data: [3784500, 3248100, 4527900, 834300, 2856600, 6745500, 8017200, 5770800],
                backgroundColor: [
                    'rgba(99, 102, 241, 0.7)',
                    'rgba(236, 72, 153, 0.7)',
                    'rgba(249, 168, 37, 0.7)',
                    'rgba(5, 150, 105, 0.7)',
                    'rgba(6, 182, 212, 0.7)',
                    'rgba(132, 204, 22, 0.7)',
                    'rgba(234, 88, 12, 0.7)',
                    'rgba(139, 92, 246, 0.7)'
                ],
                borderColor: [
                    '#6366F1',
                    '#EC4899',
                    '#F9A825',
                    '#059669',
                    '#06B6D4',
                    '#84CC16',
                    '#EA580C',
                    '#8B5CF6'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.raw.toLocaleString() + ' m²';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + ' m²';
                        }
                    }
                }
            }
        }
    });
});