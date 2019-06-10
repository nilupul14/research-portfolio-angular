import { TestBed } from '@angular/core/testing';

import { ResearchPaperService } from './research-paper.service';

describe('ResearchPaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResearchPaperService = TestBed.get(ResearchPaperService);
    expect(service).toBeTruthy();
  });
});
