import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']  
})

export class UserComponent implements OnInit{

  user: User;


  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  constructor() {
 

    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }

    this.foo = true;
    this.hasKids = true;
    this.numberArray = [1,2,3];
    this.stringArray = ['hello'];
    this.mixedArray = [true, 1];
    this.myTuple = ['hello', 1, true];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;

    console.log(this.addNumbers(2, 3));
  }
  ngOnInit(): void {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: ''      
    }
  }

  showAge(){
    //return this.age;
  }

  addNumbers(num1: number, num2: number): number{
    return num1 + num2;
  }
}