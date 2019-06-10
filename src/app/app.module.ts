import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResearcherComponent } from './researcher/add-researcher/add-researcher.component';
import { ListResearcherComponent } from './researcher/list-researcher/list-researcher.component';
import { InfoResearcherComponent } from './researcher/info-researcher/info-researcher.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { EditResearcherComponent } from './researcher/edit-researcher/edit-researcher.component';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { ListAuthorComponent } from './author/list-author/list-author.component';
import { EditAuthorComponent } from './author/edit-author/edit-author.component';
import { AddFundComponent } from './fund/add-fund/add-fund.component';
import { ListFundComponent } from './fund/list-fund/list-fund.component';
import { EditFundComponent } from './fund/edit-fund/edit-fund.component';
import { AddResearchPaperComponent } from './rePaper/add-research-paper/add-research-paper.component';
import { ListResearchPaperComponent } from './rePaper/list-research-paper/list-research-paper.component';
import { EditResearchPaperComponent } from './rePaper/edit-research-paper/edit-research-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    AddResearcherComponent,
    ListResearcherComponent,
    InfoResearcherComponent,
    NavbarComponent,
    EditResearcherComponent,
    AddAuthorComponent,
    ListAuthorComponent,
    EditAuthorComponent,
    AddFundComponent,
    ListFundComponent,
    EditFundComponent,
    AddResearchPaperComponent,
    ListResearchPaperComponent,
    EditResearchPaperComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
