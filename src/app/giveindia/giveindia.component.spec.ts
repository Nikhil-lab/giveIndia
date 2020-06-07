import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveindiaComponent } from './giveindia.component';

describe('GiveindiaComponent', () => {
  let component: GiveindiaComponent;
  let fixture: ComponentFixture<GiveindiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveindiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
