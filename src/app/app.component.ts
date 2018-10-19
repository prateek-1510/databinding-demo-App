import { Component } from '@angular/core';
import { UsersComponent } from './users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databindingDemo';
  emailid="";
  users=[];

  onUserAdded(email:string){
    console.log('onAddUser');
    var newUser={emailId:email};
    this.users.push(newUser);
    console.log(this.users);
  }


}
