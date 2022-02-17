export class TaskModel {
    taskName:string;
    done:boolean;

    constructor (name:string) {
        this.taskName = name;
        this.done = false;
    }
}