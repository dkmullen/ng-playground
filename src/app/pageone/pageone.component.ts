import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.css']
})
export class PageoneComponent implements OnInit {
  public myModel = '';
  // public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public mask = [/^h$/, /^e$/, /^e$/, /^l$/, /^i$/, /^t$/];
  placeholderChar = '-';
  me_msg = 'heelit';

  constructor(
    public layout: LayoutService
  ) { }

  ngOnInit() {
  }

  dialog() {
    console.log('dialog')
  }

  onClick() {
    console.log('click');
    this.layout.sendMessage.emit();
  }

}
