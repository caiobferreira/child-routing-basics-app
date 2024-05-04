import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecondHomeComponent } from './second-home/second-home.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'child', component: SecondHomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
