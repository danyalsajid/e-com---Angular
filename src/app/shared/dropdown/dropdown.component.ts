import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  showDropDown: boolean = false;

  @Input() selectedOption: string = "Select"
  @Input() options: string[] = [];
  @Input() listWidth: string = "";

  @Output() selectedOptionEvent = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit(): void {
  }

  selectOption(option: string) {
    this.showDropDown = false;
    this.selectedOption = option;
    this.selectedOptionEvent.emit(this.selectedOption);
  }

  onClickedOutside(e: Event) {
    this.showDropDown = false;
  }
}
