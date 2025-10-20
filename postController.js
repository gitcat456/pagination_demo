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

exports.getPosts = (req, res) => {
    try {
        //get query params with default values
        const page = parseInt(req.query.page) || 1;  //convert the query string into an int
        const limit = parseInt(req.query.limit) || 10;

        //calculate pagination values
        const startIndex = (page - 1) * limit;  
        const endIndex = page * limit;

        //get posts for current project
        const posts = mockPosts.slice(startIndex, endIndex)

        //response
        const response = {
            success: true,
            data: posts,
            pagination: {
                currentPage: page,
                pageSize: limit,
                totalPages: Math.ceil(mockPosts.length / limit),
                totalItems: mockPosts.length,
                hasNext: endIndex < mockPosts.length,
                hasPrev: startIndex > 0
            }
        };

        res.status(200).json(response)

    }catch (error) {
        res.status(500).json({
            success:false,
            message: 'Server Error'
        });
    }
};