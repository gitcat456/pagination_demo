//generate mock data
const generateMockPosts = () => {
    const posts =[];
    for (let i = 1; i <= 100; i++) {
        posts.push({
            id: i,
            title: `Post ${i}`,
            content: `This is the content for post ${i}`,
            author: `User ${Math.ceil(i / 10)}`
        });
    }
    return posts;
};

const mockPosts = generateMockPosts();
console.log(mockPosts);