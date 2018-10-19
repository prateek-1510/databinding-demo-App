import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() usercreated=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onAddUser(email:string){
    this.usercreated.emit(email);
  }

}
