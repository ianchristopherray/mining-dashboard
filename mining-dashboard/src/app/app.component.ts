import { Component } from '@angular/core';
import { PoolConnectionService } from './pools/pool-connection.service';

@Component({
  selector : 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  providers: [PoolConnectionService]
})
export class AppComponent {
  title = 'Hashboard 0.0'
  constructor(public poolService: PoolConnectionService) { }
}