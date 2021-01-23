import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEnseignantComponent } from './nouveau-enseignant.component';

describe('NouveauEnseignantComponent', () => {
  let component: NouveauEnseignantComponent;
  let fixture: ComponentFixture<NouveauEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
