import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceScreenComponent } from './workspace-screen.component';

describe('WorkspaceScreenComponent', () => {
  let component: WorkspaceScreenComponent;
  let fixture: ComponentFixture<WorkspaceScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
