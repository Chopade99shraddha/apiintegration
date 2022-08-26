import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    private userService:UserService
  ) { }

 users:UserInterface[]=[]

  ngOnInit(): void {
  this.userService.getUser().subscribe(val=>this.users=val)
  }
}

