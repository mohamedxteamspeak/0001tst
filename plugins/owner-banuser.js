let handler = async (m, { conn, text}) => {
if (!text) throw '*[โ๐๐๐๐โ] โๅฝกุฃุฏุฎู ุนูุงูุฉ tag@ ูุฃู ูุณุชุฎุฏูๅฝกโโข*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[โ๐๐๐๐โ] โๅฝกุฃุฏุฎู ุนูุงูุฉ tag@ ูุฃู ูุณุชุฎุฏูๅฝกโโข*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*[โ๐๐๐๐โ] โๅฝกุชู ุญุธุฑ ุงููุณุชุฎุฏู ุจูุฌุงุญๅฝกโโข*\n*โโ โๅฝกูู ูููู ุงููุณุชุฎุฏู ูุงุฏุฑูุง ุนูู ุงุณุชุฎุฏุงู ุงูุฑูุจูุช ุญุชู ูุชู ุญุธุฑูๅฝกโโข*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
