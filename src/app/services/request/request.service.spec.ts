import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RequestService } from './request.service';

describe('RequestService', () => {
  let service: RequestService;
  let httpTestingController : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.inject(RequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check requests sent', () =>{
    const mockData = [
      'name1',
      'name2'
    ]

    service.sendRequest(mockData).subscribe((res) => {
      expect(res).toEqual({
        songNames : [
          'name1',
          'name2'
        ]
      })

      const req = httpTestingController.expectOne('http://localhost:8080/request')
      expect(req.request.method).toEqual('POST')

      httpTestingController.verify()
    })
  })
});
