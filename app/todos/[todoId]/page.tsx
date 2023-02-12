import React from 'react'

type PageProps = {
    params: {
        todoId: string
    };
};

function TodoPage({params: {todoId}} : PageProps) {
  return <div>TodoPage: {todoId} </div>;
}

export default TodoPage;

//Fortsetter fra 17:10 
//https://www.youtube.com/watch?v=6aP9nyTcd44&ab_channel=SonnySangha