import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacAddressDetailsComponent } from './mac-address-details.component';

describe('MacAddressDetailsComponent', () => {
  let component: MacAddressDetailsComponent;
  let fixture: ComponentFixture<MacAddressDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacAddressDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacAddressDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
