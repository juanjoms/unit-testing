import { of } from "rxjs";
import { User, UserService } from "../services/user.service";

describe('UserService', () => {
  let service: UserService;
  let httpMock: any;
  let apiResponseMock: any;

  beforeEach(() => {
    apiResponseMock = {
      results: [{
        name: {first: 'Jon', last: 'Doe'},
        email: 'jon@live.com',
        picture: {thumbnail: ''}
      }]
    }
    httpMock = {get: () => of(apiResponseMock) };
    service = new UserService(httpMock);
  });

  it('should map results', () => {
    const result = service.mapResults(apiResponseMock.results);
    expect(result).toEqual([{name: 'Jon Doe', email: 'jon@live.com', image: ''}]);
  });

  it('should get results from API', () => {
    service.getUsers().subscribe((users) => {
      expect(users).toEqual([{name: 'Jon Doe', email: 'jon@live.com', image: ''}]);
    });
  });
});
