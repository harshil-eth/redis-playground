const client = require('./client');

async function init() {
    // await client.set('msg:6', 'hey from node.js');
    // await client.expire('msg:6', 20); // will be expired after 20 secs // TTL ->Time to Life
    const res = await client.get('msg:6');
    console.log('Result->', res);
}

init();