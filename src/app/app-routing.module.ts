import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddResearcherComponent } from './researcher/add-researcher/add-researcher.component';
import { ListResearcherComponent } from './researcher/list-researcher/list-researcher.component';
import { InfoResearcherComponent } from './researcher/info-researcher/info-researcher.component';
import { EditResearcherComponent } from './researcher/edit-researcher/edit-researcher.component';

const routes: Routes = [
  { path: '', redirectTo: 'researcher', pathMatch: 'full'},
  { path: 'researcher', component: ListResearcherComponent},
  { path: 'researcherCreate', component: AddResearcherComponent},
  // { path: 'researcherInfo', component: InfoResearcherComponent},
  { path: 'researcherUpdate', component: EditResearcherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
