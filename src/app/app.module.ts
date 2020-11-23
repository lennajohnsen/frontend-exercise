import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IdentifierComponent } from './components/identifier/identifier.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { InputTableComponent } from './components/input-table/input-table.component';
import { PageTitleComponent } from './components/page-content/page-title/page-title.component';
import { PageIntroComponent } from './components/page-content/page-intro/page-intro.component';
import { FormComponent } from './components/input-table/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IdentifierComponent,
    PageContentComponent,
    InputTableComponent,
    PageTitleComponent,
    PageIntroComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
