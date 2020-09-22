import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'metric-bmi',
    loadChildren: () => import('./metric-bmi/metric-bmi.module').then( m => m.MetricBmiPageModule)
  },
  {
    path: 'imperial',
    loadChildren: () => import('./imperial/imperial.module').then( m => m.ImperialPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
