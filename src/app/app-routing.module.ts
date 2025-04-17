import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PolygonComponent } from './polygon/polygon.component';

const routes: Routes = [
  { path: 'Polygon', component: PolygonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
