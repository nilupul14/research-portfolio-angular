import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResearcherComponent } from './researcher/add-researcher/add-researcher.component';
import { ListResearcherComponent } from './researcher/list-researcher/list-researcher.component';
import { InfoResearcherComponent } from './researcher/info-researcher/info-researcher.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddResearcherComponent,
    ListResearcherComponent,
    InfoResearcherComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
