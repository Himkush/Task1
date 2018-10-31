import {HttpClient} from '@angular/common/http';
import {FormModel} from './model/form.model';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import {ShowService} from '../show/show.service ';
@Injectable()
export class DataStorageService {
  a = [1,2,3];
  constructor(private http: HttpClient, private show: ShowService) {
  }
  storeForm(data: FormModel) {
    return this.http.post('https://xetia-b79c6.firebaseio.com//data.json', data  );
  }
  getForm() {
   this.http.get<FormModel[]>('https://xetia-b79c6.firebaseio.com//data.json' ).pipe( map(data => _.values(data))).
   subscribe((posts: FormModel[]) => {
     this.show.setPosts(posts);
     console.log(posts);
   });
  }
}
interface ServerData {
  data: FormModel[];
}
