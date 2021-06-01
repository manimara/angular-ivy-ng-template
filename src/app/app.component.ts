import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  get c() {
    return this.formGroup.controls;
  }
  get subjects() {
    return this.c.subjects as FormArray;
  }

  get subjectControls() {
    return this.subjects.controls;
  }
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formGroup = new FormGroup({
      fname: new FormControl(''),
      subjects: new FormArray([])
    });
  }

  addSubjects() {
    debugger;
    //     this.formBuilder.group({
    //   subject: new FormControl(''),
    //   mark: new FormControl('')
    // })
    this.subjects.push(
      new FormGroup({
        subject: new FormControl(''),
        mark: new FormControl('')
      })
    );
    // (this.subjects as FormArray).push
  }

  getFormValues() {
    debugger;
    this.val = this.formGroup.value;
  }
}
