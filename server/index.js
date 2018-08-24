const path = require('path');
const koa = require('koa');
const logger = require('koa-logger');
const nunjucks = require('koa-nunjucks-2');

const app = new koa();

//logger
app.use(logger());
//nunjucks init
app.use(nunjucks({
    ext:'njk',
    path:path.join(__dirname,'views'),
    nunjucksConfig:{
        trimBlocks:true
    }
}));
//await render
app.use( async (ctx) => {
    await ctx.render('index',{
        title: '你好koa',
        h1: "koa-nunjucks-2",
        intm:[
            {
                tit:"foo",id:1
            },
            {
                tit:'bar',id:2
            }
        ],
        pointer:[
            [0,1,2],
            [3,4,5],
            [6,7,8]
        ]
    })
});
app.listen(3000);
console.log(`started at localhost 3000`);
