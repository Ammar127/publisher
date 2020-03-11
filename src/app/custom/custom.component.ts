import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings :IDropdownSettings = {};
  dropdownList2 = [];
  selectedItems2 = [];
  dropdownSettings2 :IDropdownSettings = {};
  model;
  model2;

  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Bahrain' },
      { item_id: 2, item_text: 'Saudi Arabia' },
      { item_id: 3, item_text: 'U.A.E' },
      { item_id: 4, item_text: 'Yemen' },
      { item_id: 5, item_text: 'Qatar' },
      { item_id: 6, item_text: 'Oman' },
      { item_id: 7, item_text: 'Bahrain' },
      { item_id: 8, item_text: 'Sudan' },
      { item_id: 9, item_text: 'India' },
      { item_id: 10, item_text: 'Syria' },
      { item_id: 11, item_text: 'Algeria' },
      { item_id: 12, item_text: 'Kuwait' },
      { item_id: 13, item_text: 'Jordan' },
      { item_id: 14, item_text: 'Lebanon' },
      { item_id: 15, item_text: 'Iraq' },
      { item_id: 16, item_text: 'Nigeria' },
      { item_id: 17, item_text: 'Libya' },
      { item_id: 18, item_text: 'Mauritania' },
      { item_id: 19, item_text: 'Morocco' },
      { item_id: 20, item_text: 'Tunisia' },
      { item_id: 21, item_text: 'Palestinian Terrorities' }
    ];
    this.dropdownList2 = [
      { item_id: 1, item_text: 'Bahrain' },
      { item_id: 2, item_text: 'Saudi Arabia' },
      { item_id: 3, item_text: 'U.A.E' },
      { item_id: 4, item_text: 'Yemen' },
      { item_id: 5, item_text: 'Qatar' },
    ];
    
    this.selectedItems = [
      { item_id: 3, item_text: 'U.A.E' },
      { item_id: 4, item_text: 'Yemen' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownList2 = [
      { item_id: 1, item_text: 'Jazz' },
      { item_id: 2, item_text: 'Ufone' },
      { item_id: 3, item_text: 'Warid' },
      { item_id: 4, item_text: 'Zong' },
      { item_id: 5, item_text: 'Telenor' },
    ];
    
    this.selectedItems2 = [
      { item_id: 3, item_text: 'Warid' },
      { item_id: 4, item_text: 'Zong' }
    ];
    this.dropdownSettings2 = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
