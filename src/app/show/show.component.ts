import {Component, OnChanges, OnInit} from '@angular/core';
import {FormModel} from '../shared/model/form.model';
import {DataStorageService} from '../shared/data-storage.service';
import {ShowService} from './show.service ';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnChanges {
  posts: FormModel[] ;
  constructor(private showService: ShowService, private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.dataStorage.getForm();
    this.showService.postChanged.subscribe(
      (posts) => {
        this.posts = posts;
        console.log(this.posts);
      }
    )
    console.log(this.posts);
  }
  ngOnChanges() {

  }

}
