import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StdServiceProvider } from '../../providers/std-service/std-service';
import { Student } from '../../models/student';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  students: {} | Student[];
  sub: Subscription;
  errorMessage: string;

  constructor(private stdServ: StdServiceProvider,
    public navparams: NavParams,
    public navCtrl: NavController) {}

    private getStudent(){
      this.sub = this.stdServ.getStudent().subscribe(
        (res) => this.students = res,
        (error) => this.errorMessage = <any> error
      );
    }

    ionViewWillEnter(){
      this.getStudent();
    }

    ionViewWillLeave(){
      this.sub.unsubscribe();
    }

}
