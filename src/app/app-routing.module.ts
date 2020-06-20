import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentComponent} from './inheritance/parent/parent.component';
import {ChiledComponent} from './inheritance/chiled/chiled.component';
import {FirstComponent} from './inheritance/first/first.component';
import {OneComponent} from './inheritance/one/one.component';
import {handsontableStyles} from 'ng2-handsontable/handsontable.component.css';
import {HandsontableComponent} from './handsontable/handsontable.component';
import {HandsontableJSComponent} from './handsontable-js/handsontable-js.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'chiled',
    component: ChiledComponent
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'one',
    component: OneComponent
  },
  {
    path: 'handsontable',
    component: HandsontableComponent
  },
  {
    path: 'handsontablejs',
    component: HandsontableJSComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
