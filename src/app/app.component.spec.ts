import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';

describe('AppComponent', () => {

  let userServiceSpy = jasmine.createSpyObj('UserService', ['checkUserLogged'])

  beforeEach(async () => {
    userServiceSpy.isUserLoggedIn = new BehaviorSubject<boolean>(false)
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers : [
        {
          provide: UserService, 
          useValue: userServiceSpy
        }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sitas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('sitas');
  });

});
