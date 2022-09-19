const responseBody = "hello world"
/**
 * Returns an HTML page containing an interactive Web-based
 * tutorial. Visit the function URL to see it and learn how
 * to build with lambda.
 */
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: responseBody,
    };
    return response;
};
