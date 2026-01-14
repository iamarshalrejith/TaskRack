import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

// Query
export const getTodos = query({
  handler: async (ctx) => {
    // ctx - context
    const todos = await ctx.db.query("todos").order("desc").collect();
    return todos;
  },
});

// Mutations

// add a new Todo
export const addTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const todoId = await ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false,
    });
    return todoId;
  },
});

// toggle the completion status of todo
export const toggleTodo = mutation({
    args: {id: v.id("todos")},
    handler: async (ctx,args) => {
        const todo = await ctx.db.get(args.id)
        if(!todo) throw new ConvexError("Todo not found")
        
        await ctx.db.patch(args.id,{
            isCompleted: !todo.isCompleted
        })
    }
})

// delete a todo
export const deleteTodo = mutation({
    args: {id: v.id("todos")},
    handler: async (ctx,args) => {        
        await ctx.db.delete(args.id);
    }
})

// update todo
export const updateTodo = mutation({
    args: {id: v.id("todos"),text: v.string(),},
    handler: async(ctx,args) => {
        await ctx.db.patch(args.id,{
            text: args.text,
        })
    }
})