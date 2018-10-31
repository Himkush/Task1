import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../shared/data-storage.service';
import {FormModel} from '../shared/model/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(private dataService: DataStorageService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'postName': new FormControl(null, Validators.required),
      'postDate': new FormControl(null, Validators.required),
      'postUpdate': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'impDates': new FormGroup({
        'applicationBegin': new FormControl(null, Validators.required),
        'lastDate': new FormControl(null, Validators.required),
        'lastDateExamFees': new FormControl(null, Validators.required),
        'answerKey': new FormControl(null),
        'resultDeclare': new FormControl(null)
      }),
      'fees': new FormGroup({
        'general': new FormControl(null, Validators.required),
        'obc': new FormControl(null, Validators.required),
        'sc': new FormControl(null, Validators.required),
        'description': new FormControl(null),
      }),
      'vacancyDetails': new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    this.dataService.storeForm(this.form.value).subscribe((respose: Response) => {
      console.log(respose);
    });
    this.form.reset();
  }
  onGet() {
    // this.dataService.getForm().subscribe((er: FormModel[] ) => console.log(er));
  }
}
