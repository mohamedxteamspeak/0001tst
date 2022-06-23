let handler = async (m, { text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ★彡المستخدم彡★™ ${conn.getName(m.sender)} ★彡سيكون غير نشط (AFK) ، يرجى عدم تسميته彡★™*\n\n*—◉ ★彡سبب عدم النشاط (AFK)彡★™${text ? ': ' + text : ''}*
`)}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
export default handler
