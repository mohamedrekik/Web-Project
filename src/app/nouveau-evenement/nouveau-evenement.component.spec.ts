import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEvenementComponent } from './nouveau-evenement.component';

describe('NouveauEvenementComponent', () => {
  let component: NouveauEvenementComponent;
  let fixture: ComponentFixture<NouveauEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
