import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ParentComponent} from './inheritance/parent/parent.component';
import {ChiledComponent} from './inheritance/chiled/chiled.component';
import {FirstComponent} from './inheritance/first/first.component';
import {OneComponent} from './inheritance/one/one.component';
import {TodoComponent} from './forms/todo/todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormComponent} from './forms/reactive-form/reactive-form.component';
import {TemplateDrivenFormComponent} from './forms/template-form/template-driven-form.component';
import {UserService} from './forms/service/user-service';
import {INgxSelectOptions, NgxSelectModule} from 'ngx-select-ex';
import { WjGridSheetModule } from '@grapecity/wijmo.angular2.grid.sheet';
import { HotTableModule } from 'ng2-handsontable';
import {ExcelService} from './excel.service';
import { HandsontableJSComponent } from './handsontable-js/handsontable-js.component';
import {HandsontableComponent} from './handsontable/handsontable.component';
import {UiDatepickerDirective} from './directive/ui-datepicker/ui-datepicker.directive';
import {DetectUnsavedChangesDirective} from './directive/Detect Unsaved Changes/detect-unsaved-changes.directive';
import { PTableComponent } from './p-table/p-table/p-table.component';
import { AuTabPanelComponent } from './Own-Library-Course/au-tab-panel/au-tab-panel.component';
import { MainTabPanelComponent } from './Own-Library-Course/main-tab-panel/main-tab-panel.component';
import { NgxSlelecExComponent } from './ngx-select-ex/ngx-slelec-ex.component';
import { FiltresExampleComponent } from './filtres-example/filtres-example.component';
import {HttpClientModule} from '@angular/common/http';
import {CardHoverDirective, JokeComponent} from './hostlistener-hostbinding-joke-list/joke/joke.component';
import {JokeListComponent} from './hostlistener-hostbinding-joke-list/joke-list/joke-list.component';
import {HostDirective} from './hostlistener-hostbinding/host.directive';
import {HostColorDirective} from './hostlistener-hostbinding/host-color.directive';
import {HostlintenerHostbindingComponent} from './hostlistener-hostbinding/hostlintener-hostbinding/hostlintener-hostbinding.component';
import { OnOffSwitchComponent } from './Observable/on-off-switch/on-off-switch.component';
const CustomSelectOptions: INgxSelectOptions = {
  optionValueField: 'id',
  optionTextField: 'text',
  keyCodeToRemoveSelected: 'Backspace',
  keyCodeToOptionsOpen: 'ArrowDown',
  keepSelectedItems: false
};
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChiledComponent,
    FirstComponent,
    OneComponent,
    TodoComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    HandsontableComponent,
    HandsontableJSComponent,
    UiDatepickerDirective,
    DetectUnsavedChangesDirective,
    PTableComponent,
    AuTabPanelComponent,
    MainTabPanelComponent,
    NgxSlelecExComponent,
    FiltresExampleComponent,
    JokeComponent,
    JokeListComponent,
    CardHoverDirective,
    HostDirective,
    HostColorDirective,
    HostlintenerHostbindingComponent,
    OnOffSwitchComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
    WjGridSheetModule,
    HttpClientModule,
    HotTableModule
  ],
  providers: [UserService, ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
