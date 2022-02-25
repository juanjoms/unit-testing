import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import { UserService } from './services/user.service';

xdescribe('AppComponent', () => {
  beforeEach(async () => {
    const UserServiceMock = {
      getUsers: () => of([{name: 'Maria', email: 'someEmail@live.com', image: ''}])
    };
    await TestBed.configureTestingModule({
      declarations: [
        FilterUserPipe,
        AppComponent
      ],
      providers: [
        { provide: UserService, useValue: UserServiceMock }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get the user list', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.users).toEqual([{name: 'Maria', email: 'someEmail@live.com', image: ''}]);
  })
});
