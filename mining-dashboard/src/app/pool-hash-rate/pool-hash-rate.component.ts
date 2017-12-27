import { Component, OnInit, Input } from '@angular/core';
import { PoolConfig } from '../pools/pool-config';
import { HttpClient } from '@angular/common/http';
import { IPoolConnection } from '../pools/pool-connection';

@Component({
  selector: 'app-pool-hash-rate',
  templateUrl: './pool-hash-rate.component.html',
  styleUrls: ['./pool-hash-rate.component.css'],
})
export class PoolHashRateComponent implements OnInit {
  @Input() pool: IPoolConnection
  hashRate: number
  
  constructor() { 
    //cfg['addr'] = '0xB0D2081f2d38010aecd45F3361D08Dbb4bBE5C60'
  }

  ngOnInit() {
    this.pool
      .getHashRate()
      .subscribe(data => this.hashRate = data)
  }
}
