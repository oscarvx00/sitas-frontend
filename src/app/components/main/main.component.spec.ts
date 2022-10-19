import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { MainComponent } from './main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])
  let userServiceSpy = jasmine.createSpyObj('UserService', ['checkUserLogged'])

  beforeEach(async () => {

    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl'])

    await TestBed.configureTestingModule({
      declarations: [MainComponent], 
      providers: [
        {
          provide: Router,
          useValue: routerSpy
        },
        {
          provide: UserService, 
          useValue: userServiceSpy
        }
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents(); 


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login', () => {
    component.loginClicked()
    const navArgs = routerSpy.navigateByUrl.calls.first().args[0];

    expect(navArgs).toEqual('/login')
  })

  it('should navigate to profile', () => {

    component.profileClicked()

    const navArgs = routerSpy.navigateByUrl.calls.first().args[0];

    expect(navArgs).toEqual('/me')
  })

  //IMPORTANT: module spotify must be disabled
  it('module disabled, shoud navigate to /notenabled', () => {
    component.moduleClicked('spotify')
    const navArgs = routerSpy.navigateByUrl.calls.first().args[0];

    expect(navArgs).toEqual('/notenabled')
  })

  //IMPORTANT: module soundcloud must be enabled
  it('module enabled, shoud navigate to /login in this case because user is not logged', () => {
    component.moduleClicked('soundcloud')
    const navArgs = routerSpy.navigateByUrl.calls.first().args[0];

    expect(navArgs).toEqual('/login')
  })
});
