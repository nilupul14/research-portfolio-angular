import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResearchPaperComponent } from './edit-research-paper.component';

describe('EditResearchPaperComponent', () => {
  let component: EditResearchPaperComponent;
  let fixture: ComponentFixture<EditResearchPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResearchPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResearchPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
