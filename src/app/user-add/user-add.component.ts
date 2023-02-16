import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from '../models/user-model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit{
  user: User;
  title: string;
  passRepeat: string;
  hide = true;
  hide2 = true;
  
  constructor(
    public dialogRef: MatDialogRef<UserAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.user = data.user;
    this.passRepeat = "";
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  resetUser() {
    this.user = new User();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
