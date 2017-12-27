import { Observable } from "rxjs/Observable";
import { PoolConfig } from "./pool-config";

/// for connecting to pool
export interface PoolOption {
    // configuration tools for setting up pool    
    config: PoolConfig

    // using the configuration, attempts to get the hashrate
    getHashRate(): Observable<number>;
}
