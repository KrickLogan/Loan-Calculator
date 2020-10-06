const http = require('http');
var fs = require('fs');

const server = http.createServer((req, resp) => {
    if (req.url === "/") {
        fs.readFile("home.html", function (error, pageResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking for are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pageResp);
            }
            resp.end();
        });
    } else {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Loan Calculator</h1><hr><br /><br />Current Request URL: ' + req.url);
        resp.end();
    }
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
