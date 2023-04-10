const { log } = require('console')
const { response } = require('express')
const express = require('express')
const app = express()

app.all('/test-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')

    const data = {
        msg: '此用户名已被使用',
        status: 0
    }


    const jsonstr = JSON.stringify(data)

    response.send(`handle(${jsonstr})`)
})

app.listen(8000, () => {
    console.log('8000端口已开始监听。')
})