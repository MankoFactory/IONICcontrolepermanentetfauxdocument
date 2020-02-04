import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonneesPage } from './donnees.page';

const routes: Routes = [
  {
    path: '',
    component: DonneesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonneesPageRoutingModule {}
