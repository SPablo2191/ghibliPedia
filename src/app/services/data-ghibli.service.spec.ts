import { TestBed } from '@angular/core/testing';

import { DataGhibliService } from './data-ghibli.service';

describe('DataGhibliService', () => {
  let service: DataGhibliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGhibliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
