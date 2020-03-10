import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addapp',
  templateUrl: './addapp.component.html',
  styleUrls: ['./addapp.component.css']
})
export class AddappComponent implements OnInit {

  @ViewChild('content', { static: true }) content: TemplateRef<any>;


constructor(private modalService: NgbModal) {

   }
  open(content) {
    this.modalService.open(content, {size: 'md'});
  }
  onClose() {
    this.modalService.dismissAll();
  }


  ngOnInit() {
  }


}
