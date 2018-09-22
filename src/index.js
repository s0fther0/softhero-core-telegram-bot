const TelegramBot = require("node-telegram-bot-api");
const cheerio = require("cheerio");
const { TOKEN, NAME } = require("./config.js");

const request = require("request");

const BOT = new TelegramBot(TOKEN, {polling: true, interval: 100});

BOT.onText(/\/tutorial/, (msg, match) => {
    request({
        url: "https://github.com/s0fther0/s0fther0/blob/master/README.md",
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
        }
    }, (error, response, body) => {
        if(error) 
            return console.err(error);
        let $ = cheerio.load(body);
        BOT.sendMessage(msg.chat.id, $("article.markdown-body.entry-content").text());
    });
});