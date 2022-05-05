import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }
  steps = [
    {
      number : 1,
      step: "Select Food"
    },
    {
      number : 2,
      step: "Fill the details"
    },
    {
      number : 3,
      step: "Your order delivered in minute"
    }

  ]

}