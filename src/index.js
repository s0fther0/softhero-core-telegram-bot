const TelegramBot = require("node-telegram-bot-api");
const { TOKEN, NAME } = require("./config.js");
const glob = require("glob-promise");
const path = require("path");

const BOT = new TelegramBot(TOKEN, {polling: true, interval: 100});
const commands = require("./commands/commands.js")(BOT);
