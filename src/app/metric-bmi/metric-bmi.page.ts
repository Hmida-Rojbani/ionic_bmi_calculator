import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric-bmi',
  templateUrl: './metric-bmi.page.html',
  styleUrls: ['./metric-bmi.page.scss'],
})
export class MetricBmiPage implements OnInit {

  height: number;
  weight: number;
  bmi: number;
  constructor() { }

  ngOnInit() {
  }

  bmi_calculation_metric(){
    this.bmi = this.weight / (this.height * this.height) * 10000;
    console.log('bmi', this.bmi);
  }

}
