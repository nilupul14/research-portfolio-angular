import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddResearcherComponent } from './researcher/add-researcher/add-researcher.component';
import { ListResearcherComponent } from './researcher/list-researcher/list-researcher.component';
import { InfoResearcherComponent } from './researcher/info-researcher/info-researcher.component';
import { EditResearcherComponent } from './researcher/edit-researcher/edit-researcher.component';
import { EditAuthorComponent } from './author/edit-author/edit-author.component';
import { ListAuthorComponent } from './author/list-author/list-author.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { HomeComponent } from './home/home.component';
import { ListResearchPaperComponent } from './rePaper/list-research-paper/list-research-paper.component';
import { ListFundComponent } from './fund/list-fund/list-fund.component';
import { ListPublicationComponent } from './publication/list-publication/list-publication.component';
import { AddFundComponent } from './fund/add-fund/add-fund.component';
import { EditFundComponent } from './fund/edit-fund/edit-fund.component';
import { EditResearchPaperComponent } from './rePaper/edit-research-paper/edit-research-paper.component';
import { AddResearchPaperComponent } from './rePaper/add-research-paper/add-research-paper.component';
import { AddPublicationComponent } from './publication/add-publication/add-publication.component';
import { EditPublicationComponent } from './publication/edit-publication/edit-publication.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'researcher', component: ListResearcherComponent},
  { path: 'researcherCreate', component: AddResearcherComponent},
  { path: 'researcherInfo', component: InfoResearcherComponent},
  { path: 'researcherUpdate', component: EditResearcherComponent},
  { path: 'author', component: ListAuthorComponent},
  { path: 'authorCreate', component: AddAuthorComponent},
  // { path: 'authorInfo', component: ListResearcherComponent},
  { path: 'authorUpdate', component: EditAuthorComponent},
  { path: 'researchPaper', component: ListResearchPaperComponent},
  { path: 'researchPaperCreate', component: AddResearchPaperComponent},
  // { path: 'researcherInfo', component: InfoResearcherComponent},
  { path: 'researchPaperUpdate', component: EditResearchPaperComponent}, 
  { path: 'fund', component: ListFundComponent},
  { path: 'fundCreate', component: AddFundComponent},
  // { path: 'fundInfo', component:}
  { path: 'fundUpdate', component: EditFundComponent},
  { path: 'publication', component: ListPublicationComponent},
  { path: 'publicationCreate', component: AddPublicationComponent},
  { path: 'publicationUpdate', component: EditPublicationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
