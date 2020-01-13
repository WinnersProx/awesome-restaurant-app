import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  public restaurants:any[];

  constructor(private router: Router, private __restos : RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.__restos.fetchRestaurants();
  }

  showRestaurant(id)
  {
  	this.router.navigate(['/show']);
  }

}
