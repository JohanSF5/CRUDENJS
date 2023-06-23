import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomedPageRoutingModule } from './customed-routing.module';

import { CustomedPage } from './customed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomedPageRoutingModule
  ],
  declarations: [CustomedPage]
})
export class CustomedPageModule {}
