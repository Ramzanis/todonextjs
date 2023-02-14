import React from 'react'
import { Todo } from '../../../typings';

type PageProps = {
    params: {
        todoId: string
    };
};

const fetchTodo = async (todoId: string) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {next: {revalidate: 60} } );
  const todo: Todo = await res.json();
  return todo;

}


async function TodoPage({params: {todoId}} : PageProps) {

  const todo = await fetchTodo(todoId);

  return (
  
   <div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
    <p>
        {todo.id} : {todo.title}
    </p>
    <p>Completed: {todo.completed ? "Yes" : "No"}</p>

    <p className='border-t border-black mt-5 text-alright'>
      By User: {todo.userId}
    </p>
   </div>
  
  
  );
}

export default TodoPage;

export async function generateStaticPerams(){

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todo: Todo[] = await res.json();

  const trimmedTodos = todo.splice(0, 10);


  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));

}

//Fortsetter fra 24:10 
//https://www.youtube.com/watch?v=6aP9nyTcd44&ab_channel=SonnySangha

//Git add .
//Git commit -m ""
//Git push origin main