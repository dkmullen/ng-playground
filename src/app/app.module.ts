import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomBreakPointsProvider } from './custom-breakpoints';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FxflexComponent } from './fxflex/fxflex.component';

const appRoutes: Routes = [
  { path: '', component: PageoneComponent },
  { path: 'p2', component: PagetwoComponent },
  { path: 'p3', component: FlexboxComponent },
  { path: 'p4', component: FxflexComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    PagetwoComponent,
    NavComponent,
    FlexboxComponent,
    FxflexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    NgxDatatableModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
