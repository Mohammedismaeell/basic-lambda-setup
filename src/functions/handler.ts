import { Handler } from 'aws-lambda';

const helloWorld = async (event: any) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  return response;
};

export const handler: Handler = async (event: any) => {
  return await helloWorld(event);
};
