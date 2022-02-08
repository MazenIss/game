import { Component, Input, OnInit } from '@angular/core';
interface elem {
  type:string;
  name:string;
  content:string;
}
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('element') element!:elem;

  constructor() { }

  ngOnInit(): void {
  }

}
