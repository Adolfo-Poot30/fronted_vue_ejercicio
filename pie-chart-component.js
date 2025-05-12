const PieChartComponent = {
    name: 'pie-chart-component',
    template: `
        <div>
          <canvas id="doughnut-chart" width="400" height="400"></canvas>
        </div>
      `,
    mounted() {
        // Configuración de la gráfica circular
        const ctx = document.getElementById('doughnut-chart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Pink', 'Blue', 'Yellow'],
                datasets: [
                    {
                        label: 'Dataset 1',
                        data: [300, 50, 100],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });
    },

}