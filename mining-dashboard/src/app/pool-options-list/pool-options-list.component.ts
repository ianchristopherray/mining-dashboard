import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PoolConnectionService } from '../pools/pool-connection.service';
import { NanopoolPoolConnection } from '../pools/nanopool-pool-connection';
import { HttpClient } from '@angular/common/http';
import { PoolConfig } from '../pools/pool-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pool-options-list',
  templateUrl: './pool-options-list.component.html',
  styleUrls: ['./pool-options-list.component.css'],
  providers: [HttpClient]
})
export class PoolOptionsListComponent {
  constructor(public poolService: PoolConnectionService, public http: HttpClient, public router: Router) { 

  }

  connectToNanopool(data: string) {
    console.log(this)
    this.poolService.addPool(new NanopoolPoolConnection(this.http, { addr : data }))
    this.router.navigate([''])
  }
}
