import { Injectable } from '@angular/core';
import { IPoolConnection } from './pool-connection';

@Injectable()
export class PoolConnectionService {
  public pools: IPoolConnection[]
  constructor() {
    this.pools = []
  }

  addPool(pool: IPoolConnection): void {
    this.pools.push(pool)
  }
}
