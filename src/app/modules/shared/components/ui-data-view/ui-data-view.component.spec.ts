import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDataViewComponent } from './ui-data-view.component';

describe('UiDataViewComponent', () => {
  let component: UiDataViewComponent;
  let fixture: ComponentFixture<UiDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
