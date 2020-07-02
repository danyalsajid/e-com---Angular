import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-dropdown',
  templateUrl: './sub-dropdown.component.html',
  styleUrls: ['./sub-dropdown.component.css']
})
export class SubDropdownComponent implements OnInit {
  @Input() selectedOption = "Select"
  @Input() options: { option: string; subOptions?: string[] }[] = [];
  @Input() listWidth = "";
  @Input() noBorder = false;
  @Input() noBackground = true;

  @Output() selectedOptionEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(option) {
    if (option.subOptions) {
      return;
    } else {
      this.selectedOptionEvent.emit(option.option);
    }
  }

  selectSubOption(subOption) {
    this.selectedOptionEvent.emit(subOption);
  }

}
