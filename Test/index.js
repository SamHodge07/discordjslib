const Discord = require('../index')
const client = new Discord().Client('ODE4MDkyMDQyOTgxODY3NTcw.YETBlg.JP-TI4lWXHpkQOkEhXGgwqp0z4g')
const run = async() =>{
const channel = await client.channels.find('825019102266916864')
    const message = await channel.messages.find('833438582672064533')
console.log(channel)
}
run()