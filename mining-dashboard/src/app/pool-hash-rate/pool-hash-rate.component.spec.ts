import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolHashRateComponent } from './pool-hash-rate.component';

describe('PoolHashRateComponent', () => {
  let component: PoolHashRateComponent;
  let fixture: ComponentFixture<PoolHashRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolHashRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolHashRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
