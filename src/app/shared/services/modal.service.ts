import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalSource: Subject<any> = new Subject<any>();

  constructor() { }

  GetModalSource() : Observable<any> {
    return this.modalSource.asObservable();
  }

  ShowModal(type: string, params?: any) {
    this.modalSource.next({
      selector: type,
      params: params
    });
  }

  HideModal() {
    this.modalSource.next({
      selector: '',
    });
  }
}
