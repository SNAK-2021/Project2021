import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdQueueComponent } from './opd-queue.component';

describe('OpdQueueComponent', () => {
  let component: OpdQueueComponent;
  let fixture: ComponentFixture<OpdQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
