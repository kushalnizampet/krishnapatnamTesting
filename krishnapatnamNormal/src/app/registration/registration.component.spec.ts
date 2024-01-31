import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  let service: any

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent,HeaderComponent],
      imports:[HttpClientTestingModule,ReactiveFormsModule],
      providers:[RegistrationService]
    });
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service = TestBed.inject(RegistrationService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('Name input invalid test case',()=>{
      let name = component.myform.controls['name'];
      expect(name.invalid).toBeTruthy();
      expect(name.untouched).toBeTruthy()
    });
    it('mobile input invalid test case',()=>{
      let mobile = component.myform.controls['mobile'];
      expect(mobile.invalid).toBeTruthy();
      expect(mobile.untouched).toBeTruthy()
    });
    it(' username invalid test case',()=>{
      let username = component.myform.controls['username'];
      expect(username.invalid).toBeTruthy();
      expect(username.untouched).toBeTruthy()
    });
    it(' password invalid test case',()=>{
      let password = component.myform.controls['password'];
      expect(password.invalid).toBeTruthy();
      expect(password.untouched).toBeTruthy()
    });
    it(' name test case',()=>{
      let name = component.myform.controls['name'];
      name.setValue('kushal Nizampet');
      expect(name.valid).toBeTruthy();
      expect(name.value).toEqual('kushal Nizampet')
    });
    it(' password test case',()=>{
      let password = component.myform.controls['password'];
      password.setValue('kushalnizam');
      expect(password.valid).toBeTruthy();
      expect(password.value).toEqual('kushalnizam')
    });

    it('Subscribe method testing',fakeAsync(()=>{
      const data = [
        {
          "name": "kushal",
          "mobile": 234567890,
          "username": "kushal",
          "password": "1",
          "id": 1
        }
      ]
      let spy = spyOn(service,'postData').and.returnValue(of([]));
      let subSpy = spyOn(service.postData(data),'subscribe');
      component.submitData();
      tick();
      expect(spy).toHaveBeenCalledBefore(subSpy);
      expect(subSpy).toHaveBeenCalled()
    }));
});
