import { of } from "rxjs";
import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let app: AppComponent;

  beforeEach(() => {
    const UserServiceMock: any = {
      getUsers: () => of([{name: 'Maria', email: 'someEmail@live.com', image: ''}])
    };
    app = new AppComponent(UserServiceMock);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should get the user list', () => {
    app.ngOnInit();
    expect(app.users).toEqual([{name: 'Maria', email: 'someEmail@live.com', image: ''}]);
  });
});
