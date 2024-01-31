import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { AppComponent } from "./app.component"
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { routes } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AboutUsComponent } from "./about-us/about-us.component";
import { HeaderComponent } from "./header/header.component";
import { Component } from "@angular/core";

describe('Routing',(()=>{
    let component:AppComponent; //we can access methods abd variables in .ts file
    let fixture:ComponentFixture<AppComponent> // we can access html file using fixture

    let homecomponent:HomeComponent;
    let homeFixture:ComponentFixture<HomeComponent>;

    let headercomponent: HeaderComponent;
    let headerFixture:ComponentFixture<HeaderComponent>;
    
    
    let router:Router;
    let location:Location

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[HomeComponent,AppComponent,HeaderComponent,AboutUsComponent],
            imports:[HttpClientTestingModule,RouterTestingModule.withRoutes(routes),FormsModule]
        })
    })

    beforeEach(()=>{
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance
        fixture.detectChanges()

        homeFixture = TestBed.createComponent(HomeComponent);
        homecomponent = homeFixture.componentInstance;
        
        headerFixture = TestBed.createComponent(HeaderComponent);
        headercomponent = headerFixture.componentInstance;

        router = TestBed.inject(Router);
        location = TestBed.inject(Location)
    })

    it('Default Route',fakeAsync(()=>{ //Async is used for http calls or u can use async
        homeFixture.detectChanges()
        router.navigate(['']);
        tick();
        expect(location.path()).toEqual('/home')
    }));
// Here we are checking in home component using id wether it is routing to maincomponent upon clicking loginbtn by giving id in html
    it('home Route',fakeAsync(()=>{ 
        homeFixture.detectChanges()
        router.navigate(['main']);
        let btn = homeFixture.debugElement.nativeElement.querySelector('#loginBtn');
        btn.click()
        tick(); //we use tick while using fakeAsync()
        expect(location.path()).toEqual('/main')
    }));

    it('routing to about-component when clicking on id',fakeAsync(()=>{
        headerFixture.detectChanges()
        router.navigate(['about']);
        let btn = headerFixture.debugElement.nativeElement.querySelector('#aboutBtn');
        btn.click()
        tick();
        expect(location.path()).toEqual('/about')
    }))

}))