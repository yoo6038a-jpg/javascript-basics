const apiUsers = [
  { id: 1, first_name: "길동", last_name: "홍", is_active: true },
  { id: 2, first_name: "철수", last_name: "김", is_active: false },
];

// {id: 1, name: '홍길동', isActive: true} 로 이루어진 배열
const users = apiUsers.map(function (user) {
  //   console.log(user);
  return {
    id: user.id,
    // name: user.last_name + user.first_name,
    name: `${user.last_name}${user.first_name}`,
    active: user.is_active,
  };
});

console.log("users => ", users);
