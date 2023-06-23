import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomedPage } from './customed.page';

const routes: Routes = [
  {
    path: '',
    component: CustomedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomedPageRoutingModule {}
