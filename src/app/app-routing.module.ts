import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightComponent } from './components/eight/eight.component';
import { ElevenComponent } from './components/eleven/eleven.component';
import { FifteenComponent } from './components/fifteen/fifteen.component';
import { FiveComponent } from './components/five/five.component';
import { FourComponent } from './components/four/four.component';
import { FourteenComponent } from './components/fourteen/fourteen.component';
import { NineComponent } from './components/nine/nine.component';
import { OneComponent } from './components/one/one.component';
import { SevenComponent } from './components/seven/seven.component';
import { SixComponent } from './components/six/six.component';
import { TenComponent } from './components/ten/ten.component';
import { ThirteenComponent } from './components/thirteen/thirteen.component';
import { ThreeComponent } from './components/three/three.component';
import { TwelveComponent } from './components/twelve/twelve.component';
import { TwoComponent } from './components/two/two.component';

const routes: Routes = [
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
  {path:'eleven', component:ElevenComponent},
  {path:'twelve', component:TwelveComponent},
  {path:'thirteen', component:ThirteenComponent},
  {path:'fourteen', component:FourteenComponent},
  {path:'fifteen', component:FifteenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
