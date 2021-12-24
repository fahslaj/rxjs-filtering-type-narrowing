import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { MyUser, MyUserService } from '../state';

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
      .pipe(filter((myUser): myUser is MyUser => !!myUser))
      .subscribe((myUser) => {
        // No Error!
        this.name = myUser.name;
      });
  }
}
