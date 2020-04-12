import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRecievedComponent } from './service-recieved.component';

describe('ServiceRecievedComponent', () => {
  let component: ServiceRecievedComponent;
  let fixture: ComponentFixture<ServiceRecievedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceRecievedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
