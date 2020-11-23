import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() formReady = new EventEmitter();

  householdMemberForm = this.formBuilder.group({
    name: this.initName(),
    description: '',
    fruit: ''
  });

  initName() {
    return this.formBuilder.group({
      first_name: '',
      middle_name: '',
      last_name: ''
    });
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {}

  submit() {
    this.formReady.emit(this.householdMemberForm.value);
    this.householdMemberForm.reset();
  }

}
