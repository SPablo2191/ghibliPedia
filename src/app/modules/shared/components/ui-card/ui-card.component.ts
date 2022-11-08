import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.css']
})
export class UiCardComponent implements OnInit {
  @Input() header! : string;
  @Input() subheader! : string;
  @Input() description! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
