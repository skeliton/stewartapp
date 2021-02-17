import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefultoolingComponent } from './usefultooling.component';

describe('UsefultoolingComponent', () => {
  let component: UsefultoolingComponent;
  let fixture: ComponentFixture<UsefultoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefultoolingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefultoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
