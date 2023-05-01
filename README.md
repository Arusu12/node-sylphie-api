## Sylphie-API

`sylphie-api` is a small library to make the process of getting api data of sylphie-api easy. It uses axios to post and get data from api.

Install the library by using the following in the terminal-
```
npm i sylphie-api
```

Import library by entering the following code into your code-
```
const ask = require('sylphie-api')
```

Use the following format to get response from the api-
``` 
  ask('How are you?')
  .then(data => console.log(data))
```

After the previous code, to catch errors like usual-
```
  .catch(error => console.error(error));
```
