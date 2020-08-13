import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacAddressesDetailsComponent } from './mac-addresses-details.component';

describe('MacAddressesDetailsComponent', () => {
  let component: MacAddressesDetailsComponent;
  let fixture: ComponentFixture<MacAddressesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacAddressesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacAddressesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
