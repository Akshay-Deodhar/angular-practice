import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleViewGridComponent } from './people-view-grid.component';

describe('PeopleViewGridComponent', () => {
  let component: PeopleViewGridComponent;
  let fixture: ComponentFixture<PeopleViewGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleViewGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleViewGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
