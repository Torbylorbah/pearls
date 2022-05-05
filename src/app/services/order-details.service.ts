import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Paneer Sandwich is an easy-to-make breakfast recipe that you can make for your loved ones anytime, and it is truly delicious. This sandwich recipe is quite filling and wholesome at the same time and will be loved by kids and adults alike.",
      foodPrice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"This Vegetarian Pizza is loaded with fresh vegetables like bell peppers, mushrooms, tomatoes, onions, and more! Pizza with veggies is a great way to use up your favorite vegetables.",
      foodPrice:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"the patty of the burger is mainly of cooked spicy potatoes. As the name suggests, its core ingredient is paneer. We have covered the paneer pieces with spices and breadcrumbs. It will provide taste and crunchy texture to it.",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides chocolate.",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo cheesecake ice cream also known as cookies and cream can be easily made at home with just a few ingredients and oreo cookies.",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]
  
}
