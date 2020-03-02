import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GarantupdatePage } from './garantupdate.page';

const routes: Routes = [
  {
    path: '',
    component: GarantupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GarantupdatePageRoutingModule {}
