let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] ◥ ツأدخل علامة tag@ لأي مستخدمツ ◤*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] ◥ ツأدخل علامة tag@ لأي مستخدمツ ◤*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] ◥ ツتم إلغاء قفل المستخدم بنجاحツ ◤*\n*—◉ ★彡  يمكن للمستخدم الآن استخدام الروبوت彡★™*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
