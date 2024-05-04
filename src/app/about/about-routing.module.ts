import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SecondAboutComponent } from './second-about/second-about.component'

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'child', component: SecondAboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
