## Sylphie-API

`sylphie-api` is a small library to make the process of getting api data of sylphie-api easy. It uses axios to post and get data from api.

Install the library by using the following in the terminal-
```
npm i sylphie-api
```

Free API Key for celebrating release-
```
const API_Key = "global.anonymous.ashdajkhLKJGfghugyufUYGgbiuk"
```

Import library by entering the following code into your code-
```
const sylphie = require('sylphie-api')
```

Use the following format to get response from the api-
``` 
    const prompt = "Hello"
    const API_Key = "Your_API_Key"
    
    sylphie.ask(prompt, API_Key).then(data => console.log(data))
```

Or you can also use it with await like this-
```
await ask(prompt, API_Key);
```

After the previous code, to catch errors like usual-
```
  .catch(error => console.error(error));
```

An example using readline -
```
const readline = require('readline');
const sylphie = require('sylphie-api');

const API_Key = 'Your_API_Key';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  rl.question('>> ', (prompt) => {
    sylphie.ask(prompt, API_Key)
      .then(message => console.log('Sylphie : ' + message))
      .catch(error => console.error(error))
      .finally(() => {
        askQuestion();
      });
  });
}

askQuestion();
```

An example for discord.js bot message-
```
client.on('messageCreate', async message => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Pass the message content to the `ask` function
  const response = await ask(message.content, API_Key);

  // Send the response back to the channel where the message was sent
  message.channel.send(response);
});
```