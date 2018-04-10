import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VjezbaComponent } from './vjezba.component';

describe('VjezbaComponent', () => {
  let component: VjezbaComponent;
  let fixture: ComponentFixture<VjezbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VjezbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VjezbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
