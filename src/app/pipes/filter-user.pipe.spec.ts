import { User } from "../services/user.service";
import { FilterUserPipe } from "./filter-user.pipe";

describe('FilterUserPipe', () => {

  it('should filter users', () => {
    const pipe = new FilterUserPipe();
    const users: User[] = [
      {name: 'Jon', email: '', image: ''},
      {name: 'Jane', email: '', image: ''},
      {name: 'Diana', email: '', image: ''}
    ]
    const result = pipe.transform(users, 'a');
    expect(result).toEqual([
      {name: 'Jane', email: '', image: ''},
      {name: 'Diana', email: '', image: ''}
    ]);
  });

});
