import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { PoolConfig } from "./pool-config";
import 'rxjs/add/operator/map';
import { IPoolConnection } from "./pool-connection";

@Injectable()
export class NanopoolPoolConnection implements IPoolConnection {
    http: HttpClient
    config: PoolConfig;
    
    constructor(http: HttpClient, config: PoolConfig) {
        this.http = http
        this.config = config
    } 

    getHashRate(): Observable<number> {
        let addr: string = this.config['addr']
        return this.http.get<number>(`https://api.nanopool.org/v1/eth/hashrate/${addr}`).map(
            res => {
                return res['data'] as number
            }
        )
    }
}
