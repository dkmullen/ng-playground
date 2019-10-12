import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  public sendMessage = new EventEmitter<string>();
}
