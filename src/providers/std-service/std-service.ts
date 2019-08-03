//import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student } from '../../models/student';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class StdServiceProvider {

  constructor(public http: Http) {}

  getStudent():Observable<{} | Student[]>{
    return this.http.get('http://192.168.88.158/apidata/get_data.php')
    .map((res:Response) => <Student[]> res.json())
    .catch(this.handlerError);
  }

  private handlerError(error:any){
    return Observable.throw(error.json().error || 'ไม่สามารถติดต่อ Server ได้');
  }

}
