const client = require('./client');

async function init() {
    // await client.rpush('list:1', 'a', 'b', 'c', 'd', 'e');
    await client.lpop('list:1');
    const res = await client.lrange('list:1', 0, -1);
    console.log('Result->', res);
}

init();