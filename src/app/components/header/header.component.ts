import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  title: string = 'Project Tracker';

  constructor() { }

  ngOnInit(): void {  }

  toggleAddProject() {
    console.log("Add");
  }

}
