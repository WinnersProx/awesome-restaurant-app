import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "dashboard" },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "search", component: SearchComponent },
	{ path: "show", component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
