module.exports.handler = async (event, context, callback) => {

  try {
    body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
  } catch (error) {
    console.error("Failed to parse body:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Invalid JSON format in request body" }),
    };
  }

  const { num1, num2 } = body;
  const result = num1 + num2;

  const responseBody = {
    num1,
    num2,
    result
  };

  return {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  };

};