<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  name: 'levels_chart',
  data () {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Level1',
            data: [1, 6, 2, 3, 3, 1],
            borderColor: '#0074bf',
            fill: false,
            type: 'line',
            lineTension: 0.3,
          },
          {
            label: 'Level2',
            data: [0, 2, 3, 2, 4, 6],
            borderColor: '#c93a40',
            fill: false,
            type: 'line',
            lineTension: 0.3,
          },
          {
            label: 'Level3',
            data: [0, 0, 1, 1, 2, 3],
            borderColor: '#56a764',
            fill: false,
            type: 'line',
            lineTension: 0.3,
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 5,
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>