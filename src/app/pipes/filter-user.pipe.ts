import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user.model';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: User[], term: string): User[] {
    return users.filter(user => user.name.toLowerCase().includes(term.toLowerCase()));
  }

}
