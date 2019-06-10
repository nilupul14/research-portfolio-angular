import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddResearcherComponent } from './researcher/add-researcher/add-researcher.component';
import { ListResearcherComponent } from './researcher/list-researcher/list-researcher.component';
import { InfoResearcherComponent } from './researcher/info-researcher/info-researcher.component';
import { EditResearcherComponent } from './researcher/edit-researcher/edit-researcher.component';
import { EditAuthorComponent } from './author/edit-author/edit-author.component';
import { ListAuthorComponent } from './author/list-author/list-author.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';

const routes: Routes = [
  { path: '', redirectTo: 'researcher', pathMatch: 'full'},
  { path: 'researcher', component: ListResearcherComponent},
  { path: 'researcherCreate', component: AddResearcherComponent},
  { path: 'researcherInfo', component: InfoResearcherComponent},
  { path: 'researcherUpdate', component: EditResearcherComponent},
  { path: 'author', component: ListAuthorComponent},
  { path: 'authorCreate', component: AddAuthorComponent},
  // { path: 'authorInfo', component: ListResearcherComponent},
  { path: 'authorUpdate', component: EditAuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
