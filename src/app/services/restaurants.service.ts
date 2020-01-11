import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

	private base_url = 'https://zomato.com/webapi';

	private httpOptions = {
    headears : new HttpHeaders({
      'Content-Type' : 'application/json',
      'user_key' : 'd28721418397281434f4de1a10c99219'
    })
  };

  constructor(private http : HttpClient) { }

  getRestaurants()
  {
  	// return this.http.get(`${this.base_url}/searchapi.php?62`);
  }
}
