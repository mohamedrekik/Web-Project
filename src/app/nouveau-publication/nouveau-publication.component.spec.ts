import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPublicationComponent } from './nouveau-publication.component';

describe('NouveauPublicationComponent', () => {
  let component: NouveauPublicationComponent;
  let fixture: ComponentFixture<NouveauPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
