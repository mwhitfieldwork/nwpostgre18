import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  public weeklyChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Green Trend',
        data: [95, 98, 92, 100, 105, 102, 110],
        backgroundColor: '#e6c9f5',
        tension: 0.4,
        borderWidth: 3
      },
      {
        label: 'Red Trend',
        data: [85, 88, 90, 87, 92, 95, 93],
        backgroundColor: '#c4a2f3',
        tension: 0.4,
        borderWidth: 3
      },
      {
        label: 'Blue Trend',
        data: [75, 80, 78, 82, 85, 88, 90], 
        backgroundColor: '#a855f7',
        tension: 0.4,
        borderWidth: 3
      }
    ]
  };
  
  public weeklyChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        min: 70,
        max: 110,
        grid: { display: false }
      },
      x: {
        grid: { display: false }
      }
    },
    plugins: {
      legend: { display: false }
    }
  };
  
  public monthlyAreaData = {
    labels: Array.from({ length: 10 }, (_, i) => `Jul ${i + 1}`),
    datasets: [
      {
        label: 'Monthly Trend',
        data: [
          20, 25, 22, 30, 28, 35, 40, 38, 45, 50,
          48, 55, 60, 58, 62, 65, 70, 68, 75, 80,
          78, 85, 90, 88, 95, 100, 98, 105, 110, 115, 120
        ],
        borderColor: '#673AB7',
        backgroundColor: 'rgba(103, 58, 183, 0.25)',
        fill: true,
        tension: 0.4
      }
    ]
  };
  
  public monthlyAreaOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false } }
    }
  };
  
}
