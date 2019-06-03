import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResearcherComponent } from './list-researcher.component';

describe('ListResearcherComponent', () => {
  let component: ListResearcherComponent;
  let fixture: ComponentFixture<ListResearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
