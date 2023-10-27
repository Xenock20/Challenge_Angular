import { Component } from '@angular/core';

@Component({
  selector: 'app-view-two-page',
  templateUrl: './view-two-page.component.html',
  styleUrls: ['./view-two-page.component.css'],
})
export class ViewTwoPageComponent {
  data = [
    { ID: 1, Name: 'John', Age: 30 },
    { ID: 2, Name: 'Alice', Age: 25 },
    { ID: 3, Name: 'Bob', Age: 35 },
    { ID: 4, Name: 'Bob', Age: 45 },
    // Agrega más datos aquí
  ];
}
