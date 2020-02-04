import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonneesPageRoutingModule } from './donnees-routing.module';

import { DonneesPage } from './donnees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonneesPageRoutingModule
  ],
  declarations: [DonneesPage]
})
export class DonneesPageModule {}
