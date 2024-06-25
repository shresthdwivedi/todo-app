export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                {todo.description} <br />
                <button>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
            </div>  
        })}
    </div>
}