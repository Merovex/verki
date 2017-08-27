import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkspaceScreenComponent } from './workspace-screen.component';

describe('WorkspaceScreenComponent', () => {
    let component: WorkspaceScreenComponent;
    let fixture: ComponentFixture<WorkspaceScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkspaceScreenComponent],
            imports: [RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkspaceScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a title', () => {
        const title = fixture.debugElement.query(By.css('.hero-title')).nativeElement;
        expect(title.innerText.indexOf('One framework')).not.toEqual(-1);
        expect(title.innerText.indexOf('Mobile & desktop.')).not.toEqual(-1);
    });

    it('should render a button with text', () => {
        const btn = fixture.debugElement.query(By.css('.workspace-button')).nativeElement;
        expect(btn.innerText).toEqual('Get Started');
    });
});
