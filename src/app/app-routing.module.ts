import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightComponent } from './components/eight/eight.component';
import { FiveComponent } from './components/five/five.component';
import { FourComponent } from './components/four/four.component';
import { HomeComponent } from './components/home/home.component';
import { NineComponent } from './components/nine/nine.component';
import { OneComponent } from './components/one/one.component';
import { SevenComponent } from './components/seven/seven.component';
import { SixComponent } from './components/six/six.component';
import { TenComponent } from './components/ten/ten.component';
import { ThreeComponent } from './components/three/three.component';
import { TwoComponent } from './components/two/two.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'one', component:OneComponent},
  {path:'two', component:TwoComponent},
  {path:'three', component:ThreeComponent},
  {path:'four', component:FourComponent},
  {path:'five', component:FiveComponent},
  {path:'six', component:SixComponent},
  {path:'seven', component:SevenComponent},
  {path:'eight', component:EightComponent},
  {path:'nine', component:NineComponent},
  {path:'ten', component:TenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
