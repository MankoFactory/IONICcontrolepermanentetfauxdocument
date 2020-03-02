import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GarantupdatePageRoutingModule } from './garantupdate-routing.module';

import { GarantupdatePage } from './garantupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GarantupdatePageRoutingModule
  ],
  declarations: [GarantupdatePage]
})
export class GarantupdatePageModule {}
