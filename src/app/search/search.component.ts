import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  public searching = false;
  public query = "";
  public restaurants:any[];

  constructor(private router: Router, private __restos : RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.__restos.fetchRestaurants();
  }

  performSearch(event)
  {
    this.query = event.target.value;
    this.searching = true;
  }

  showRestaurant(id)
  {
  	this.router.navigate(['/show']);
  }

}
