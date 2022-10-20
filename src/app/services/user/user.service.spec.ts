import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController : HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.inject(UserService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('check user logged', () => {
    const mockProfile = {
      identifier : 'ID1',
      email: 'mail@mail.com',
      username: 'username1'
    }

    service.checkUserLogged().subscribe((res) => {
      expect(res).toEqual(mockProfile)
    })

    const req = httpTestingController.expectOne('http://localhost:8080/me')
    expect(req.request.method).toEqual('GET')

    httpTestingController.verify()
  })
});
