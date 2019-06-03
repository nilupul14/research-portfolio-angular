import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoResearcherComponent } from './info-researcher.component';

describe('InfoResearcherComponent', () => {
  let component: InfoResearcherComponent;
  let fixture: ComponentFixture<InfoResearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoResearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoResearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
