import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  input,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string;
  avatar: string;
  name: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  //imagePath = computed(()=> 'assets/users/' + this.avatar());
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
