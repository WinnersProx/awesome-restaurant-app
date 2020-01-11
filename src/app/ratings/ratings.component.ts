import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewInfos()
  {
  	this.router.navigate(['show']);
  }

}
