var express = require('express');
var app = express();

app.set('port' , 8080);
app.get('/' , (req , res) => {
    res.send('노드 서버 구동 완료')
});

app.listen(app.get('port') , (req , res) => {
    console.log('노드 서버 구동 완료')
})