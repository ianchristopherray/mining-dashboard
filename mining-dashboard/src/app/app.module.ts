import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PoolHashRateComponent } from './pool-hash-rate/pool-hash-rate.component';
import { AppRoutingModule } from './/app-routing.module';
import { PoolOptionsListComponent } from './pool-options-list/pool-options-list.component';
import { PoolConnectionService } from './pools/pool-connection.service';


@NgModule({
  declarations: [
    AppComponent,
    PoolHashRateComponent,
    PoolOptionsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [HttpClient, PoolConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
    user:
      (instance . - * pool-connection): pool-connection[]

    pool-connection:
      (pool-options-service[idx]): pool-option
    
    pool-option
      connection-strategy

*/