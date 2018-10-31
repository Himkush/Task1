import {Injectable} from '@angular/core';
import {FormModel} from '../shared/model/form.model';
import {DataStorageService} from '../shared/data-storage.service';
import {Subject} from 'rxjs';
import {Form} from '@angular/forms';

@Injectable()
export class ShowService {
  private posts: FormModel[];
  postChanged = new Subject<FormModel[]>();
  constructor() {
  }
  setPosts(posts: FormModel[]) {
    this.posts = posts;
    console.log(this.posts)
    this.postChanged.next(this.posts);
  }
}
