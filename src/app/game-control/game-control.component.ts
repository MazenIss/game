import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() started= new EventEmitter<number>();
 id!:ReturnType<typeof setTimeout>;
 count:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onStart(){
    this.id=setInterval(()=> {
        this.count++;
        this.started.emit(this.count);
    },1000);
  }
  onStop(){
    console.log('ss');
    clearInterval(this.id);
  }

}
