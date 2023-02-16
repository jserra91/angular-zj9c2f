import { Component, OnInit } from '@angular/core';
import { User } from '../models/user-model';
import { UserService } from '../services/user.service';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  displayedColumns: string[] = ['Options','name', 'dateExpire', 'enabled'];


  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  edit(user: User): void {
    console.log('add user');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = {title:"EDIT USER", user: user};
    const dialogRef = this.dialog.open(UserAddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {console.log('The dialog was closed');});
    console.log('Edit user');
  }

  add(): void {
    console.log('add user');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.data = {title:"ADD USER", user: new User()};
    const dialogRef = this.dialog.open(UserAddComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {console.log('The dialog was closed');});
  }
}
