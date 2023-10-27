import { Component, ViewChild, OnInit } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { PersonaInterface } from 'src/app/interfaces/table-data-interface';
import { personasArr } from 'src/app/mocks/table-data.mock';

@Component({
  selector: 'app-view-two-page',
  templateUrl: './view-two-page.component.html',
  styleUrls: ['./view-two-page.component.css'],
})
export class ViewTwoPageComponent implements OnInit{
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1!: IgxGridComponent;  

  data: PersonaInterface[] = []

  ngOnInit(): void {
    this.data = personasArr;
  }
}
