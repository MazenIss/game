import { Component } from '@angular/core';

interface elem {
  type:string;
  name:string;
  content:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  serverElements:elem[] = [];
  counts:string[]=[];
  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }
  onStarted(count:number){
     (count%2===0) ? this.counts.push('even') : this.counts.push('odd'); 

  }
  

 
}
