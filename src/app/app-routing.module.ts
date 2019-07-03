import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LogonComponent } from './logon/logon.component'

const routes: Routes = [
  { path: '', component: LogonComponent, pathMatch: 'full' },
  // { path: '/dashboard', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
