const fs = require('fs');

const book = 
    {
        theBook:
            {
                title:'merhaba',
                author:'ben'
            }
    };

const bookJSON = JSON.stringify(book);
//console.log(bookJSON);

//fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
//console.log(dataBuffer);

const dataJSON = dataBuffer.toString();
//console.log(dataJSON);

const data = JSON.parse(dataJSON);
console.log(data);

data.theBook.title = 'who';
data.theBook.author = 'you';
console.log(data);

fs.writeFileSync('1-json.json', JSON.stringify(data));