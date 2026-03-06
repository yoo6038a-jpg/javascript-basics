// 아래 6개의 함수를 완성하세요.

let todos = [];
let nextId = 1;

// 1. 할 일 추가
function addTodo(title) {
  const newTodo = {
    id: nextId++,
    title: title,
    done: false,
  };

  todos.push(newTodo);
}

// 2. 할 일 목록 조회
function getTodos() {
  return todos;
}

// 3. 할 일 완료 토글
function toggleTodo(id) {
  const toggledTodos = todos.map(function (todo) {
    if (todo.id === id) {
      const aaaa = { ...todo, done: !todo.done };
      return aaaa;
    } else {
      return todo;
    }
  });

  // return toggledTodos;
  todos = toggledTodos;
}

// 4. 할 일 삭제
function deleteTodo(id) {
  return todos.filter(function (d) {
    return d.id !== id;
  });
}

// 5. 제목 수정
function updateTodo(id, newTitle) {
  const updateTodos = todos.map(function (u) {
    if (u.id === id) {
      return { ...u, title: newTitle };
    } else {
      return u;
    }
  });

  todos = updateTodos;
}

// 6. 완료된 항목만 반환
function getCompletedTodos() {
  return todos.filter(function (c) {
    return c.done;
  });
}

// --- 실행 테스트 ---
addTodo("JS 공부하기");
addTodo("운동하기");
addTodo("책 읽기");

toggleTodo(1);
toggleTodo(3);
console.log(getTodos());
// id 1, 3번 done: true / id 2번 done: false

console.log(getCompletedTodos());
// [{ id: 1, ... }, { id: 3, ... }] 만 나와야 함

updateTodo(2, "수영하기");
deleteTodo(1);

// console.log(getTodos());
// console.log(getCompletedTodos()); // id 3번만 남아야 함
