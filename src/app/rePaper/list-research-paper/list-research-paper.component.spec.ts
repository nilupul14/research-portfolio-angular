import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResearchPaperComponent } from './list-research-paper.component';

describe('ListResearchPaperComponent', () => {
  let component: ListResearchPaperComponent;
  let fixture: ComponentFixture<ListResearchPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResearchPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResearchPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
