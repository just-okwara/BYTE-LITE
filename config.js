const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "
{"noiseKey":{"private":{"type":"Buffer","data":"SCktlSVC9DJPIYbcqCPfmBLC30zBhQRnqOgDDPOnjmg="},"public":{"type":"Buffer","data":"zkZmXY6k3YcTy7AT/0Smq2kM2Gd9SsWdL3A5DjV4/FY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"MCZlI5MtCLabgzNW0VPqoZ+oEwnxpwYEuVmk6INdW2o="},"public":{"type":"Buffer","data":"azqJNzo9S28fHHK4TJg3cHNJEAIYdr6J5EU4FwtfkQI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aHeES4w8CeCAsky0LmSIC6HuzkpAg1Qy06ZGsGEOjGU="},"public":{"type":"Buffer","data":"hT9pHjOaxOcqGBrtCbr5q+1VZs1L8mvQ1EC75nePxzE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"EAWx6momTIZWOulGLngdf7AjJQoUJ5qOSpNdmeb2IGE="},"public":{"type":"Buffer","data":"BnsI///V/uX7UPrc6BmQDfRH7B5TklqhVjkGOzy4BC8="}},"signature":{"type":"Buffer","data":"7U1Ki3qwkJAb4mGK/6XrqWvxS8wMVVPQKmBJjo7nfAaJDY2kt2JBrb6XOLyjpT5IDeFzDrOsl+Fa53DrMTjZCQ=="},"keyId":1},"registrationId":212,"advSecretKey":"cdJFE1Eamzeb3ZRnafT0Um9ERYxq7NTTnak95iz46lE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"CYRILDEV","me":{"id":"254108470534:3@s.whatsapp.net","lid":"190512485122089:3@lid"},"account":{"details":"CPiYlysQwdmGwgYYASAAKAA=","accountSignatureKey":"wR49uFSOoHsrvtzEwf5qz2YIt3jOeDQSQPswsbVIpG8=","accountSignature":"lL83Q/5U0WhodBlbC8a9M/Ka9A2MrG2ub+iUGWhAFAfP5q3sCPl0p8wgBLpV/DZqkv7Ekyu9hemghw/45e3zBQ==","deviceSignature":"XLTVLLIE50qP1yTs2T4dAGd2qBStYfFsL0lqqnPn/VkLZNbaOi75y8Q1AD/9mtqmXLC4ThCwjD/Q9YbvmDB9Dg=="},"signalIdentities":[{"identifier":{"name":"254108470534:3@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcEePbhUjqB7K77cxMH+as9mCLd4zng0EkD7MLG1SKRv"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CBIICA=="},"lastAccountSyncTimestamp":1749134537,"lastPropHash":"PWk5B"}
",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M BYTE-LITE WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ʙʏᴛᴇ-ʟɪᴛᴇ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒃𝒚𝒕𝒆-𝒍𝒊𝒕𝒆`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
