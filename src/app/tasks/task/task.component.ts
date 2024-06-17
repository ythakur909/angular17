import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor(private TaskService: TaskService) {}
  @Input({ required: true }) task!: ITask;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.TaskService.removeTask(this.task.id);
  }
}
