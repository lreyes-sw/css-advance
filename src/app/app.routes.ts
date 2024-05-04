import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { SassExampleComponent } from './page/sass-example/sass-example.component';
import { FlexboxExampleComponent } from './page/flexbox-example/flexbox-example.component';
import { GridboxExampleComponent } from './page/gridbox-example/gridbox-example.component';
import { AnimationsExampleComponent } from './page/animations-example/animations-example.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sass', component: SassExampleComponent },
  { path: 'flexbox', component: FlexboxExampleComponent },
  { path: 'gridbox', component: GridboxExampleComponent },
  { path: 'animation', component: AnimationsExampleComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
