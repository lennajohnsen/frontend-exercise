import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.scss']
})
export class PageIntroComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
