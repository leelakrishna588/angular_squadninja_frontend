import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AutogenerateComponent } from './autogenerate/autogenerate.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path:'autogenerateteam',component:AutogenerateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const routingComponents = [HomepageComponent]
