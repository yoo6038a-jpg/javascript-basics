const message1 = "첫 번째 줄\n" + "두 번째 줄";
//template literal
const message2 = `첫 번째 줄
두 번째 줄
세 번째 줄
    ${1 + 2}
`;

console.log(message2);

const name = "홍길동";
const age = 25;

const html = `
    <div class="user-card">
        <h2>${name}</h2>
        <p>나이: ${age}세</p>
        <button>프로필 보기</button>
    </div>
`;

console.log(html);
