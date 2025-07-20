import { Observable } from "rxjs";
import { BaseResponse } from "../../interfaces/base-response";
import { Task } from "../../interfaces/task/task";
import { UseCase } from "../use-case";
import { TaskRepository } from "../../repositories/task/task-repository";

export class TasksUsecase implements UseCase<void,BaseResponse<Task[]>>{
     constructor(
            private repository: TaskRepository
        ) {}
    execute(params: void): Observable<BaseResponse<Task[]>> {
        return this.repository.getTasks();
    }
}
