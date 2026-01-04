package com.kcdevdes.dailylogapi.controller;

import com.kcdevdes.dailylogapi.entity.TodoItem;
import com.kcdevdes.dailylogapi.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    public record CreateTodoRequest(String title) {}
    public record TodoResponse(Long id, String title) {}

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TodoResponse create(@RequestBody CreateTodoRequest req) {
        if (req == null || req.title() == null || req.title().isBlank()) {
            throw new IllegalArgumentException("title is required");
        }
        TodoItem todo = todoService.create(req.title());
        return new TodoResponse(todo.getId(), todo.getTitle());
    }

    @GetMapping("/{id}")
    public TodoResponse get(@PathVariable Long id) {
        TodoItem todo = todoService.get(id);
        return new TodoResponse(todo.getId(), todo.getTitle());
    }
}
