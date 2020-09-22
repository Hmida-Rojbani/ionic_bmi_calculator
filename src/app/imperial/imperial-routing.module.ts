import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImperialPage } from './imperial.page';

const routes: Routes = [
  {
    path: '',
    component: ImperialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImperialPageRoutingModule {}
