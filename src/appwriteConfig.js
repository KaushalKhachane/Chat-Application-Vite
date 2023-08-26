import { Client, Databases } from 'appwrite';
import { Account } from 'appwrite';


export const PROJECT_ID = '64dd16cd5d2d3213ebeb'
export const DATABASE_ID = '64dd17e34d065c304601'
export const COLLECTION_ID_MESSAGES = '64dd17efbad211f6063b'

const client = new Client();

client
    .setEndpoint('cloud.appwrite.io/v1')
    .setProject('64dd16cd5d2d3213ebeb');


export const account = new Account(client);
export const databases = new Databases(client);
export default client; 
