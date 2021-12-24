import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MyUserService } from '../state';

@Component({
  selector: 'app-my-user-display',
  template: "My user's name is {{ name }}",
})
export class MyUserDisplayComponent implements OnInit {
  name = '-';

  constructor(private readonly myUserService: MyUserService) {}

  ngOnInit() {
    this.myUserService
      .selectMyUser()
      .pipe(filter((myUser) => !!myUser))
      .subscribe((myUser) => {
        this.name = myUser.name;
      });
  }
}
