import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>()
  
  categories = ['food','accessories'];


  onShowCategory(category:string):void{
    this.showCategory.emit(category);
  }
}
