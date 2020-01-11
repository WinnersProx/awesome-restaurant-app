import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { ShowComponent } from './show/show.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "dashboard" },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "search", component: SearchComponent },
	{ path: "show", component: ShowComponent },
	{ path: "ratings", component: RatingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
