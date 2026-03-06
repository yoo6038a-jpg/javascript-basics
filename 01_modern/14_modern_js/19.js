const userId = "12345";
const currentPage = 4;
const postLimitCount = 30;

// 일반적인 url구조(path parameter, query parameter)
const url = `https://example.com/${userId}/userId/posts?page=${currentPage}&limit=${postLimitCount}`;
