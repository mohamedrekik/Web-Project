import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEnseignantsComponent } from './details-enseignants.component';

describe('DetailsEnseignantsComponent', () => {
  let component: DetailsEnseignantsComponent;
  let fixture: ComponentFixture<DetailsEnseignantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEnseignantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
