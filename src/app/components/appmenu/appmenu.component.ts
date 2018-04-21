import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../../global';
@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.scss']
})
export class AppmenuComponent implements OnInit {

  constructor(public g : Globals) { }

  ngOnInit() {
  }

}
