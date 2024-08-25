//In the to do list, we have input text, a date of teach task create, 

export type Task = {
  id: number;
  text: string;
  date: number;
}

export type List = {
  id: number;
  title: string;
  tasks: Task[];
}