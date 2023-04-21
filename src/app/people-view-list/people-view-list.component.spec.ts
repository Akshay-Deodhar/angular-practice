import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleViewListComponent } from './people-view-list.component';

describe('PeopleViewListComponent', () => {
  let component: PeopleViewListComponent;
  let fixture: ComponentFixture<PeopleViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
