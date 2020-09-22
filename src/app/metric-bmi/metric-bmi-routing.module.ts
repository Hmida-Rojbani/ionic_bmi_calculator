import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetricBmiPage } from './metric-bmi.page';

const routes: Routes = [
  {
    path: '',
    component: MetricBmiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MetricBmiPageRoutingModule {}
