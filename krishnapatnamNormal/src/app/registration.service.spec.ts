import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let httpController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(RegistrationService);
    httpController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Account Creation',()=>{
    const users=[
      {
      "name": "kushal Nizampet",
      "mobile": 9000235642,
      "username": "kushal",
      "password": "1",
      "id": 5
    },
    {
      "name": "Deepak Youtuber",
      "mobile": 1234567890,
      "username": "deepakYt",
      "password": "SaiPriya",
      "id": 6
    }
    ];
    
    service.postData(users).subscribe(
      (data:any)=>{
        expect(users).toEqual(data)
      }
    );

    const request = httpController.expectOne(service.postUrl);
    expect(request.cancelled).toBeFalsy();
    expect(request.request.responseType).toBe('json');
    
    request.flush(users);
    httpController.verify()
  })

});
