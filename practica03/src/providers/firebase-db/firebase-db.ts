import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
    }
}
