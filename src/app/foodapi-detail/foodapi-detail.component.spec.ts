import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodapiDetailComponent } from './foodapi-detail.component';

describe('FoodapiDetailComponent', () => {
  let component: FoodapiDetailComponent;
  let fixture: ComponentFixture<FoodapiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodapiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodapiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
