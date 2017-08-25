import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetRowComponent } from './spreadsheet-row.component';

describe('SpreadsheetRowComponent', () => {
  let component: SpreadsheetRowComponent;
  let fixture: ComponentFixture<SpreadsheetRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
