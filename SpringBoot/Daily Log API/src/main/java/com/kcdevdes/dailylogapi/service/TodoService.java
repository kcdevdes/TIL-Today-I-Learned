package com.kcdevdes.dailylogapi.service;

import com.kcdevdes.dailylogapi.entity.TodoItem;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public TodoItem create(String title) {
        TodoItem todoItem = new TodoItem(title);
        entityManager.persist(todoItem);
        return todoItem;
    }

    @Transactional
    public TodoItem get(Long id) {
        TodoItem item = entityManager.find(TodoItem.class, id);
        if (item == null) {
            throw new IllegalArgumentException("TodoItem with id " + id + " does not exist");
        }

        return item;
    }
}
