import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	public restaurants:any[];

  constructor(private __restos : RestaurantsService, private router: Router) { }

  ngOnInit() {
  	this.restaurants = this.__restos.fetchRestaurants();
  }

  performQuery(event) {
    if(event.keyCode === 13 && event.target.value.length >= 3) 
      this.router.navigate(['/search']);
  }

  showRestaurant() {
  	this.router.navigate(['/show']);
  }

}
