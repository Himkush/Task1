import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormComponent} from './form/form.component';
import {ShowCardComponent} from './show/show-card/show-card.component';
import {ShowComponent} from './show/show.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'form', component: FormComponent },
  {path: 'posts', component: ShowComponent },
  {path: '**', redirectTo: '/posts'}
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
