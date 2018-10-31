import {Component, Input, OnInit} from '@angular/core';
import {FormModel} from '../../shared/model/form.model';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {
  @Input() post: FormModel;
  constructor() { }

  ngOnInit() {
  }

}
