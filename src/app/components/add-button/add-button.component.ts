import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {

  @Input() btnText: string = "";
  @Input() btnColor: string = "";
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClick() {
    this.btnClick.emit();
  }

}
