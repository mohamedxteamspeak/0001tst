let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡أدخل علامة tag@ لأي مستخدم彡★™*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡أدخل علامة tag@ لأي مستخدم彡★™*'
let users = global.db.data.users
users[who].banned = true
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] ★彡تم حظر المستخدم بنجاح彡★™*\n*—◉ ★彡لن يكون المستخدم قادرًا على استخدام الروبوت حتى يتم حظره彡★™*`, m)
}
handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true
export default handler
