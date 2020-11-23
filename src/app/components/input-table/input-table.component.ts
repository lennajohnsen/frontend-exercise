import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.scss']
})
export class InputTableComponent implements OnInit {

  householdList = [
    {
      name: {
        first_name: 'Alexander',
        last_name: 'Hamilton',
      },
      description: 'Founding father',
      fruit: 'apple'
    }
  ];

  constructor() { }

  formInitialized(form) {
    this.householdList.push(form);
    // console.log(this.householdList, this.householdList.length);
  }

  ngOnInit(): void {
  }

}
