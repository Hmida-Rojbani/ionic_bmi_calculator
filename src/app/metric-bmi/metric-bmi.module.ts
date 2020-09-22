import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetricBmiPageRoutingModule } from './metric-bmi-routing.module';

import { MetricBmiPage } from './metric-bmi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetricBmiPageRoutingModule
  ],
  declarations: [MetricBmiPage]
})
export class MetricBmiPageModule {}
