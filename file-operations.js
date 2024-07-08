
const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File welcome.txt has been created with content: Hello Node');
});


fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Data read from hello.txt:', data);
});
