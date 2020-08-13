import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedMacAddressesComponent } from './verified-mac-addresses.component';

describe('VerifiedMacAddressesComponent', () => {
  let component: VerifiedMacAddressesComponent;
  let fixture: ComponentFixture<VerifiedMacAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedMacAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedMacAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
