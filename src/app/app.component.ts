import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private conService: ConnectionService){
    conService.getDittoWithPromise().then(ditto => console.log('ditto with promise', ditto));
  }

  title = 'rxjs-test';
}

