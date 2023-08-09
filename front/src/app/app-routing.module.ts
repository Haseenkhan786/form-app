import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PersondataComponent } from './persondata/persondata.component';
import { Kpi3Component } from './kpi3/kpi3.component';
import { Kpi4Component } from './kpi4/kpi4.component';
import { Kpi6Component } from './kpi6/kpi6.component';

const routes: Routes = [
  { path:'register',component:RegisterComponent},

   { path:'persondata',component:PersondataComponent},
   { path:'kpi3',component:Kpi3Component},
   { path:'kpi4',component:Kpi4Component},
   { path:'kpi6',component:Kpi6Component}
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
