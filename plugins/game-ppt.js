let handler = async (m, { text, usedPrefix }) => {
let INTROJUEGO = `*𝙷𝙾𝙻𝙰 👋🏻, ◥ ツأنت تلعب حجر ، ورق ، مقصツ ◤"*\n\n*الُخـيَارٍات الُمتاحٍة:*\n*★彡قرعة彡★™*\n\n*◥ ツمثالツ ◤:*\n*${usedPrefix}ppt مقص*\n\n*- ★彡استخدم الخيارات بأحرف قليلة كما هو موضح في المثال彡★™*\n\n*𝘉𝘺 𝘛𝘩𝘦 _ᴇʟʜᴇʀᴅ_ - 𝘉𝘰𝘵*`
if (!text) throw INTROJUEGO
var astro = Math.random()
if (astro < 0.34) {
astro = 'حجر' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'مقص' 
} else {
astro = 'ورق'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*🔰 Empate!*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 نقاط +500 XP*`)
} else if (text == 'ورق') {
if (astro == 'حجر') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 ༊෴✿فزت✿〄࿐! 🎉*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 نقاط +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ のخسرت!の ❌*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ نقاط -300 XP*`)
}
} else if (text == 'مقص') {
if (astro == 'ورق') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 ༊෴✿فزت✿〄࿐! 🎉*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 نقاط +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ のخسرت!の ❌*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ نقاط -300 XP*`)
}
} else if (text == 'مقص') {
if (astro == 'ورق') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 ༊෴✿فزت✿〄࿐! 🎉*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 نقاط +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ のخسرت!の ❌*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ نقاط -300 XP*`)
}
} else if (text == 'ورق') {
if (astro == 'حجر') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 ༊෴✿فزت✿〄࿐! 🎉*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 نقاط +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ のخسرت!の ❌*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ نقاط -300 XP*`)
}
} else if (text == 'حجر') {
if (astro == 'مقص') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 ༊෴✿فزت✿〄࿐! 🎉*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 نقاط +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ のخسرت!の ❌*\n\n*👉🏻 أنت: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ نقاط -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
