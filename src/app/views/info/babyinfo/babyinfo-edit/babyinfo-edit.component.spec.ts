import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyinfoEditComponent } from './babyinfo-edit.component';

describe('BabyinfoEditComponent', () => {
  let component: BabyinfoEditComponent;
  let fixture: ComponentFixture<BabyinfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyinfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyinfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
