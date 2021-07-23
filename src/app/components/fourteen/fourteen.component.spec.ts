import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourteenComponent } from './fourteen.component';

describe('FourteenComponent', () => {
  let component: FourteenComponent;
  let fixture: ComponentFixture<FourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
