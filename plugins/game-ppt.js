let handler = async (m, { text, usedPrefix }) => {
let INTROJUEGO = `*๐ท๐พ๐ป๐ฐ ๐๐ป, โฅ ใุฃูุช ุชูุนุจ ุญุฌุฑ ุ ูุฑู ุ ููุตใ โค"*\n\n*ุงููุฎูููุงุฑูุงุช ุงูููุชุงุญูุฉ:*\n*โๅฝกูุฑุนุฉๅฝกโโข*\n\n*โฅ ใูุซุงูใ โค:*\n*${usedPrefix}ppt ููุต*\n\n*- โๅฝกุงุณุชุฎุฏู ุงูุฎูุงุฑุงุช ุจุฃุญุฑู ููููุฉ ููุง ูู ููุถุญ ูู ุงููุซุงูๅฝกโโข*\n\n*๐๐บ ๐๐ฉ๐ฆ _แดสสแดสแด_ - ๐๐ฐ๐ต*`
if (!text) throw INTROJUEGO
var astro = Math.random()
if (astro < 0.34) {
astro = 'ุญุฌุฑ' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'ููุต' 
} else {
astro = 'ูุฑู'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*๐ฐ Empate!*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ ููุงุท +500 XP*`)
} else if (text == 'ูุฑู') {
if (astro == 'ุญุฌุฑ') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ เผเทดโฟูุฒุชโฟใเฟ! ๐*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ ููุงุท +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ ใฎุฎุณุฑุช!ใฎ โ*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ ููุงุท -300 XP*`)
}
} else if (text == 'ููุต') {
if (astro == 'ูุฑู') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ เผเทดโฟูุฒุชโฟใเฟ! ๐*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ ููุงุท +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ ใฎุฎุณุฑุช!ใฎ โ*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ ููุงุท -300 XP*`)
}
} else if (text == 'ููุต') {
if (astro == 'ูุฑู') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ เผเทดโฟูุฒุชโฟใเฟ! ๐*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ ููุงุท +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ ใฎุฎุณุฑุช!ใฎ โ*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ ููุงุท -300 XP*`)
}
} else if (text == 'ูุฑู') {
if (astro == 'ุญุฌุฑ') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ เผเทดโฟูุฒุชโฟใเฟ! ๐*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ ููุงุท +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ ใฎุฎุณุฑุช!ใฎ โ*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ ููุงุท -300 XP*`)
}
} else if (text == 'ุญุฌุฑ') {
if (astro == 'ููุต') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*๐ฅณ เผเทดโฟูุฒุชโฟใเฟ! ๐*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*๐ ููุงุท +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*โ ๏ธ ใฎุฎุณุฑุช!ใฎ โ*\n\n*๐๐ป ุฃูุช: ${text}*\n*๐๐ป El Bot: ${astro}*\n*โ ููุงุท -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
