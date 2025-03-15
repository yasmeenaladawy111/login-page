const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        const indexPage = fs.readFileSync('./index.html', 'utf-8');
        res.writeHead(200, {
            "content-type": "text/html"
        });
        res.end(indexPage);
    }
});

server.listen(33333, () => {
    console.log("Server is running on port 8080");
});
