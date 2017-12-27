import { PoolConfig } from "./pool-config";
import { Observable } from "rxjs/Observable";

export interface IPoolConnection {
   // using the configuration, attempts to get the hashrate
   getHashRate(): Observable<number>;
}
