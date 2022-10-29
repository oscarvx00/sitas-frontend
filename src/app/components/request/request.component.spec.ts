import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RequestService } from 'src/app/services/request/request.service';
import { UserService } from 'src/app/services/user/user.service';

import { RequestComponent } from './request.component';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
  let userServiceSpy = jasmine.createSpyObj('UserService', ['checkUserLogged']) //We dont need the method, but jasmine requires min one
  let requestServiceSpy = jasmine.createSpyObj('RequestService', ['sendRequest'])

  beforeEach(async () => {

    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
    userServiceSpy = jasmine.createSpyObj('UserService', ['checkUserLogged']) //We dont need the method, but jasmine requires min one
    requestServiceSpy = jasmine.createSpyObj('RequestService', ['sendRequest'])

    userServiceSpy.isUserLoggedIn = new BehaviorSubject<boolean>(true)

    await TestBed.configureTestingModule({
      declarations: [RequestComponent],
      providers: [
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: UserService,
          useValue: userServiceSpy
        },
        {
          provide: RequestService,
          userValue: requestServiceSpy
        }
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('download clicked, no data or invalid, alert must be shown', () => {
    component.data = [
      {
        name: ''
      },
      {
        name: '    '
      }
    ]

    spyOn(window, 'alert')

    component.downloadClicked()

    expect(requestServiceSpy.sendRequest).toHaveBeenCalledTimes(0)
    expect(alert).toHaveBeenCalledWith('No data intoduced')
  })

  /*it('download clicked, some data invalid, only ok data passed to service', () => {
    component.data = [
      {
        name: ''
      },
      {
        name: 'test1'
      },
      {
        name: 'test2'
      },
      {
        name: '   '
      }
    ]

    spyOn(window, 'alert')
    component.downloadClicked()

    expect(alert).toHaveBeenCalledTimes(0)
    expect(requestServiceSpy.sendRequest).toHaveBeenCalled()
  })*/

  it('remove', () => {
    component.data = [
      {
        name: 'test1'
      },
      {
        name: 'test2'
      },
      {
        name: 'test3'
      }
    ]

    component.remove(1)

    expect(component.data).toEqual([
      {
        name: 'test1'
      },
      {
        name: 'test3'
      }
    ])
  })

  it('add row ok', () => {
    const mockEvent = {
      preventDefault: () => { },
      target : {
        innerText : 'test2_modified'
      }
    }
    component.data = [
      {
        name: 'test1'
      },
      {
        name: 'test2'
      }
    ]

    component.addRow(mockEvent, 1)

    expect(component.data).toEqual([
      {
        name: 'test1'
      },
      {
        name: 'test2_modified'
      },
      {
        name: ''
      }
    ])

  })

  it('add row not last index', () => {
    const mockEvent = {
      preventDefault: () => { },
      target : {
        innerText : 'test1_modified'
      }
    }
    component.data = [
      {
        name: 'test1'
      },
      {
        name: 'test2'
      }
    ]

    component.addRow(mockEvent, 0)

    expect(component.data).toEqual([
      {
        name: 'test1_modified'
      },
      {
        name: 'test2'
      }
    ])
  })

  it('add row, last item empty', () => {
    const mockEvent = {
      preventDefault: () => { },
      target : {
        innerText : ''
      }
    }
    component.data = [
      {
        name: 'test1'
      },
      {
        name: 'test2'
      }
    ]

    component.addRow(mockEvent, 1)

    expect(component.data).toEqual([
      {
        name: 'test1'
      },
      {
        name: ''
      }
    ])
  })

  it('check user logger, user not logger, redirect', () => {
    
    userServiceSpy.isUserLoggedIn.next(false)

    component.checkUserLogged()

    const navArgs = routerSpy.navigateByUrl.calls.first().args[0];

    expect(navArgs).toEqual('/login')
  })

  it('focusOnLast', () => {
    component.focusOnLastFlag = true
    
    component.focusOnLast()

    expect(component.focusOnLastFlag).toBeFalse()
  })


  it('go to download clicked', () => {


    component.goToDownloadClicked()

    const navArgs = routerSpy.navigateByUrl.calls.first().args[0];

    expect(navArgs).toEqual('/download')
  })
});
