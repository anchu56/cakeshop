import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent  {
  foodItems: any[] = []; // Array to hold food items fetched from the API

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchFoodItems();
  }

  fetchFoodItems() {
    this.http.get<any[]>('http://localhost:8080/food')
      .subscribe(
        (data: any[]) => {
          this.foodItems = data;
        },
        (error) => {
          console.error('Error fetching food items:', error);
        }
      );
  }
  
}
