import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsandprescpComponent } from './obsandprescp.component';

describe('ObsandprescpComponent', () => {
  let component: ObsandprescpComponent;
  let fixture: ComponentFixture<ObsandprescpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObsandprescpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsandprescpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
