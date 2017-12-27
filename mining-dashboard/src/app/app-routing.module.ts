import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PoolOptionsListComponent } from './pool-options-list/pool-options-list.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'add', component: PoolOptionsListComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { 

}
