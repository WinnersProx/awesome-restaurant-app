import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private __rests : RestaurantsService) { }

  ngOnInit() {
  }

}
