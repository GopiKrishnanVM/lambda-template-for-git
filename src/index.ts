import { APIGatewayProxyHandler } from "aws-lambda";
import * as dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

export const handler: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda!",
      input: event,
    }),
  };
};
// This is a simple AWS Lambda function that responds with a greeting message and the input event.
// It uses the APIGatewayProxyHandler type from the aws-lambda package to define the handler function.
// The function returns a 200 status code and a JSON body containing the message and the input
