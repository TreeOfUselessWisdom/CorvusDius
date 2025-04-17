import { Component } from '@angular/core';

@Component({
  selector: 'app-polygon',
  standalone: false,
  templateUrl: './polygon.component.html',
  styleUrl: './polygon.component.css'
})
export class PolygonComponent {
  Users = [
    { 
      id: 1, 
      name: 'John', 
      email: 'examplemail0@gmail.com', 
      location: 'USA',
      image: 'assets/F-22 Raptor.jpg' 
    },
    { 
      id: 2, 
      name: 'Jane', 
      email: 'examplemail1@gmail.com', 
      location: 'UK',
      image: 'assets/images/F-22 Raptor.jpg' 
    },
    { 
      id: 3, 
      name: 'Cane', 
      email: 'examplemail2@gmail.com', 
      location: 'USA',
      image: 'assets/images/F-22 Raptor.jpg' 
    },
    { 
      id: 4, 
      name: 'Plane', 
      email: 'examplemail3@gmail.com', 
      location: 'UK',
      image: 'assets/images/F-22 Raptor.jpg' 
    },
    { 
      id: 5, 
      name: 'Nane', 
      email: 'examplemail4@gmail.com', 
      location: 'USA',
      image: 'assets/images/F-22 Raptor.jpg' 
    },
  ];
}
