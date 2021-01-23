import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauOutilComponent } from './nouveau-outil.component';

describe('NouveauOutilComponent', () => {
  let component: NouveauOutilComponent;
  let fixture: ComponentFixture<NouveauOutilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauOutilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauOutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
