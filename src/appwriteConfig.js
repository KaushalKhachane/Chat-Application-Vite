import { Client, Databases } from 'appwrite';
import { Account } from 'appwrite';

export const PROJECT_ID = '64dd16cd5d2d3213ebeb';
export const DATABASE_ID = '64dd17e34d065c304601';
export const COLLECTION_ID_MESSAGES = '64dd17efbad211f6063b';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)
    .setKey('your-api-key') // Replace with your Appwrite API key
    .setHeaders({
        'X-Appwrite-Project': PROJECT_ID,
        'X-Appwrite-Key': 'your-api-key', // Replace with your Appwrite API key
        'Content-Type': '',
        'Access-Control-Allow-Origin': 'https://chat-application-vite.vercel.app', // Set the allowed origin
    });

export const account = new Account(client);
export const databases = new Databases(client);
export default client;
