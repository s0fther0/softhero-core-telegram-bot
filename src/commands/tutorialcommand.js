const cheerio = require("cheerio");
const request = require("request");

module.exports = (bot) => {

    bot.onText(/^\/(tutorial|tuto|튜토리얼|튜토)/, (msg, match) => {
        let chat_id = msg.chat.id;

        request({
            url: "https://github.com/s0fther0/s0fther0/blob/master/README.md",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
            }
        }, (error, response, body) => {
            if(error) 
                return console.err(error);
            let $ = cheerio.load(body);
            bot.sendMessage(chat_id, $("article.markdown-body.entry-content").text());
        });
    });
}