import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit, OnDestroy {

  searchTerm: string = "";

  @Input() widthClass: string = "";
  @Input() placeholder: string = "Search...";
  @Output() searchEvent = new EventEmitter<string>();

  searchSubject = new Subject<string>();
  private searchSub: Subscription;

  constructor() { }

  ngOnInit(): void {

    this.searchSub = this.searchSubject.pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(searchTerm => {
        this.searchEvent.emit(searchTerm);
      });

  }

  search(event?: any) { // search upon typing
    this.searchTerm = event.target.value;
    this.searchSubject.next(this.searchTerm);
  }

  onSearch() { // search by clicking button
    this.searchEvent.emit(this.searchTerm);
  }

  directSearch() { // search upon enter
    this.searchEvent.emit(this.searchTerm);
	}

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
}
