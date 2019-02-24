import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DataService } from './dataservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  count; data; init; loading;

  constructor(private serv: DataService) {

  }

  getData() {
    this.loading = true;
    if (this.count <= 0 ) {
      alert('Please enter a higher value than 0');
      return;
    }
    this.serv.getData(this.count)
      .subscribe(
        (response) => {
          console.log(response, 'resp');
          return this.data = response.data;
        },
        (error) => {
          alert('Something Went Wrong! Please Try Again.');
          console.log('Error :: ' + error);
        },
        () => {
          this.init = false;
          this.loading = false;
        }
      );
  }



  ngOnInit() {
    this.loading = false;
    this.init = true;
    this.count = null;
  }
}
