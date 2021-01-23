import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPubComponent } from './detail-pub.component';

describe('DetailPubComponent', () => {
  let component: DetailPubComponent;
  let fixture: ComponentFixture<DetailPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
