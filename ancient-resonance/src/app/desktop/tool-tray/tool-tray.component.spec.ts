import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTrayComponent } from './tool-tray.component';

describe('ToolTrayComponent', () => {
  let component: ToolTrayComponent;
  let fixture: ComponentFixture<ToolTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
