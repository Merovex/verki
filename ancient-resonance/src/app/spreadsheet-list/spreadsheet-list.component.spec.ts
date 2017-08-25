import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetListComponent } from './spreadsheet-list.component';

describe('SpreadsheetListComponent', () => {
  let component: SpreadsheetListComponent;
  let fixture: ComponentFixture<SpreadsheetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
