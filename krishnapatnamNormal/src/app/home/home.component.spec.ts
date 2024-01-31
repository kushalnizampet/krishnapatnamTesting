import { ComponentFixture, TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { of } from 'rxjs/internal/observable/of';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service:any
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports:[HttpClientTestingModule,FormsModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(LoginService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('username invalid and untouched for email', async(()=>{
    fixture.whenStable().then(()=>{
      let email = component.form.controls['username']
      expect(email.invalid).toBeTruthy();
      expect(email.untouched).toBeTruthy();
    })
  }));
  it('username invalid and untouched for password', async(()=>{
    fixture.whenStable().then(()=>{
      let password = component.form.controls['password']
      expect(password.invalid).toBeTruthy();

      expect(password.untouched).toBeTruthy();
    })
  }));

  it('subscribe method testing using spyon', fakeAsync(()=>{
    const data = [
      {
        "name": "kushal",
        "mobile": 234567890,
        "username": "kushal",
        "password": "1",
        "id": 1
      }
    ]
    let spy = spyOn(service,'getuserNameAndPassword').and.returnValue(of([])); // we have to give service method because it will be called first
    let subSpy = spyOn(service.getuserNameAndPassword(data),'subscribe'); // we have to write subscribe method
    component.login();
    tick();
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));
  
});
