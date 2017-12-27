import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolOptionsListComponent } from './pool-options-list.component';

describe('PoolOptionsListComponent', () => {
  let component: PoolOptionsListComponent;
  let fixture: ComponentFixture<PoolOptionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolOptionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
