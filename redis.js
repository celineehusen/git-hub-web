import { createClient } from 'redis';

async function createValue(){
  const client = createClient();

  client.on('error', (err) => console.log('Redis Client Error', err));
  
  await client.connect();
  
  await client.set('name', 'celine');
  const value = await client.get('name');
  console.log('my name: ', value);
}

createValue();



