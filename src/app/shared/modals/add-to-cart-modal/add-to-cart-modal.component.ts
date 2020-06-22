import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css']
})
export class AddToCartModalComponent implements OnInit {
  @Input() showModal: boolean = false; 

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit(this.showModal);
  }

  submit() {
    this.submitEvent.emit(true);
  }

}
