import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CapsulesComponent } from './capsules/capsules.component';
import { LancementsComponent } from './lancements/lancements.component';

const routes: Routes = [
  {path:'capsules', component:CapsulesComponent},
  {path:'lancements', component:LancementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
