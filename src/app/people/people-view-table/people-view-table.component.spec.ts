import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleViewTableComponent } from './people-view-table.component';

describe('PeopleViewTableComponent', () => {
  let component: PeopleViewTableComponent;
  let fixture: ComponentFixture<PeopleViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleViewTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
