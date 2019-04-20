import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyinfoNewComponent } from './babyinfo-new.component';

describe('BabyinfoNewComponent', () => {
  let component: BabyinfoNewComponent;
  let fixture: ComponentFixture<BabyinfoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyinfoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyinfoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
