
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUW5OiOBT+L3nVGkEBhaquGrAVUVRQBHFrHgIEiFw7BBWm/O9b6HT3POzO9vIUTlLnfPku+QnyAldohRog/QQlwRdIUbekTYmABJQ6DBEBfRBACoEEVENdMdd5o+vxOS64xcEL/EU0txbBxJjHou2OBlrVaq/ycf0C7n1Q1l6K/T80DPHq0Mh26s8VbXPma45vFDM8eF5cORebvYyPrOWsAmaJuRdw7zpCTHAezcoYZYjAdIUaA2LyNfjRNAhbpDpnFOsxx7g2b/CzsD32tDa7CfrW7uGVUq4WWVp9DX7eJJ5TJmIcYbHZUyGvc0W/LFs7CyB1XI+Ul/la5HV8k5/wKxzlKNAClFNMmy/zPjMEQkVT3dib4jQyTyUaOG9p2oxyc1s2tnuaIHO+attQ5b7Iu1s2b2QQbI/7sZmfJzsSR9wp9TVcTPDbbmVlWrPCQmpnk9+BG+TdK8n/4b0nM8YIIa3cpYqd62EkW0rL1LdYzElIHM8wr5Y7qApjqH0NftIGk2b7dppeF2nZnvh1yJBJqofFJdgsN7tVZLBRFJwj+RZ9woe0Jn9CudOW9YS1X7lzbC20xApK6+KK/DUj+XLcS+TRdH4aRGrGRMNKMIr2NlzMN8FcJZ6ItqpSwM3hTcn3yqbhXndol+Gi0eTo5XGjBDVaACT23gcERbiiBFJc5F1tNOkDGFz2yCeIPtgF8BxF0a06p8N0M9Njdnsrj8p2z9+SRJnJxutl5rjuUIwPW/8F9EFJCh9VFQoWuKIFadaoqmCEKiD99aMPcnSjT90e09g+CDGp6CGvy7SAwbuo75vQ94s6p/sm96fdAhEgMZ9lRCnOo6qjsc4h8WN8QdMY0gpIIUwr9HFBRFAAJEpq9BHaaRF0vI9lwdTkuQX6IHvogQMggSHPjdnRkB2LE14afq++XbuusCy/5YiCPkifp9ghOx5zQ244ZDhRGn7vyvcPeF23AFGI0wpIYLpsR7RXzWc6vJK1qaqyFsnTSAaf13m3xZP3q6Uji5wtYs1U9RWfR6YSrXiBhZxw3KQO3pszz6itErLFyz80ARKYvJF50+bCjtF66oW2K91xLVN3ImT4POvzDlU8pkePehMHWhZdPPO8PtlLJxMHJ2GsnJfNINkKhwPv916XHs+Z48Ne6TzUBwG6YB/9Pqxw2Jl87DmeOVkmZjit1Sy55LepwSyRayXeJmsEtC/XxlRoTNWN6uaoF9P9eW575UCf4fmV445lr9B4NX6r1m52QJ5iPg37CEz666HCDy91QnW/IUaP3Oewk+8/hXvi7uzF3Pu/tfj1kPxLGBV/1owSgWME5qbEEVeIjOxOa0Sdepu2J7tIEkVtx4ngUAju9x99UKaQhgXJuvzkASlwAPqAFHXnVy0Piz8Mm8rMR1JTWFH5MwMWzlBFYVYCiR3zI5ET2DH3PGWQolzAKgYSGO3E00jsDN3IZbmnkL5HCsjdtzHX4P43ZwA2h20HAAA=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "254716637803,254713217985", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "true", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "254713217985,254716637803", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "SÃVÅGÉ", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "SAVAGE 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "ALI", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Its about to ho down  ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "typing", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
