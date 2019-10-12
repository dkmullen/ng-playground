import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service'; 

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.css']
})
export class FlexboxComponent implements OnInit {

  constructor(
    public layout: LayoutService
  ) {
    this.layout.sendMessage.subscribe(() => 
      alert('Got it')
    )
   }

  ngOnInit() {
  }

}
