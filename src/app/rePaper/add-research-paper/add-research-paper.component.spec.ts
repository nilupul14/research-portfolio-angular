import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResearchPaperComponent } from './add-research-paper.component';

describe('AddResearchPaperComponent', () => {
  let component: AddResearchPaperComponent;
  let fixture: ComponentFixture<AddResearchPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResearchPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResearchPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
