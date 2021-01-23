import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOutilComponent } from './detail-outil.component';

describe('DetailOutilComponent', () => {
  let component: DetailOutilComponent;
  let fixture: ComponentFixture<DetailOutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOutilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
