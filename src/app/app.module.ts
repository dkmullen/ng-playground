import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { MatButtonModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomBreakPointsProvider } from './custom-breakpoints';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { FxflexComponent } from './fxflex/fxflex.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { MaskComponent } from './mask/mask.component';

const appRoutes: Routes = [
  { path: '', component: PageoneComponent },
  { path: 'p2', component: PagetwoComponent },
  { path: 'p3', component: FlexboxComponent },
  { path: 'p4', component: FxflexComponent },
  { path: 'p5', component: MatTableComponent },
  { path: 'p6', component: MaskComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    PagetwoComponent,
    NavComponent,
    FlexboxComponent,
    FxflexComponent,
    MatTableComponent,
    DialogComponent,
    MaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    NgxDatatableModule,
    TextMaskModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
