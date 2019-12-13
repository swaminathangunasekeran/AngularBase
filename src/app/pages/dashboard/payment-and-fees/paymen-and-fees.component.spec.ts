import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymenAndFeesComponent } from './paymen-and-fees.component';

describe('PaymenAndFeesComponent', () => {
  let component: PaymenAndFeesComponent;
  let fixture: ComponentFixture<PaymenAndFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymenAndFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymenAndFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
