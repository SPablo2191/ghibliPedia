import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-data-view',
  templateUrl: './ui-data-view.component.html',
  styleUrls: ['./ui-data-view.component.css']
})
export class UiDataViewComponent implements OnInit {
  @Input() items! : any[];
  constructor() { }

  ngOnInit(): void {
  }

}
