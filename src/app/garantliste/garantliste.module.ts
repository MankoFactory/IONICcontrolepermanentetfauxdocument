import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarantlistePageRoutingModule } from './garantliste-routing.module';

import { GarantlistePage } from './garantliste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarantlistePageRoutingModule
  ],
  declarations: [GarantlistePage]
})
export class GarantlistePageModule {}
