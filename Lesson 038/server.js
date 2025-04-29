const http = require('http');

let statuses = [
  "Замовлення оброблено",
  "Піца готується",
  "Піца випікається",
  "Піца пакується",
  "Піца доставляється",
  "Доставлено"
];


const server = http.createServer((req, res) => {
    if(req.url === '/pizza-status') {
        res.writeHead(200, {
            'content-type' : 'text/event-stream',
            'cache-control' : 'no-cache',
            'connection' : 'keep-alive',
            'access-control-allow-origin': '*'
        });


        let index = 0;

        const intervalId = setInterval(() => {
            if(index < statuses.length) {
                res.write(`data: ${statuses[index]}\n\n`);
                index++;
            } else {
                clearInterval(intervalId);
                res.write('event: close\n');
                res.write('data: завершення\n\n')
            }
        }, 5000)
        req.on("close", () => {
            clearInterval(intervalId);
            res.write('event: close\n');
            res.write('data: завершення\n\n');
            res.end();  
        })  
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
    
});
