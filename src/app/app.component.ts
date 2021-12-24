import { Component, OnInit, VERSION } from '@angular/core';
import { MyUserService } from './state/my-user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private readonly myUserService: MyUserService) {}

  ngOnInit() {
    this.myUserService.setUser({
      id: '1',
      name: 'afahsl',
    });
  }
}
