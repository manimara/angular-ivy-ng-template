import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  formGroup: FormGroup;
  controls = [{ name: 'fname' }];
  val = '';
  array = {
    name: 'subjects',
    controls: [
      {
        name: 'subject'
      },
      {
        name: 'mark'
      }
    ]
  };
  subjects = [];
  constructor() {}
  ngOnInit() {
    this.formGroup = new FormGroup({
      fname: new FormControl(),
      subjects: new FormArray([])
    });
  }

  addSubjects() {
    this.subjects.push(
      new FormGroup({
        subject: new FormControl(''),
        mark: new FormControl('')
      })
    );
  }

  getFormValues() {
    this.val = this.formGroup.getRawValue();
  }
}
