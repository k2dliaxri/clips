import { ModalService } from './../../services/modal.service';
import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers: [ModalService]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalID = ''

  constructor(public modal: ModalService, public el: ElementRef) {
    console.log(el)
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  ngOnDestroy(): void {
      document.body.removeChild(this.el.nativeElement)
  }

  closeModal() {
    this.modal.toggleModal(this.modalID)
  }

}
