import { Component, Input, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data:any
  public lineChart: GoogleChartInterface = {
    chartType: GoogleChartType.LineChart,
    dataTable: [],
    firstRowIsData: true,
    options:{
      colors:["#635BFF"]
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.editData()
    this.editLineChart() 
  }

  editData() {
    console.log(this.data)
    this.data.values = this.data.values.map(function(obj:any) {
      return Object.keys(obj).sort().map(function(key) { 
        return obj[key];
      });
    });
    this.data.values.forEach(function (value:any) {
      value[0] = new Date(value[0] * 1000)
    }); 
  }

  editLineChart() {
    this.lineChart.dataTable = this.data.values
  }
}
