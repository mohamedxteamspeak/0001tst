let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] ★彡أدخل علامةtag@ للشخص الذي ترغب في إضافته إلى المستخدمين المميزين彡★™*`
if (global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] ◥ ツالمستخدم الذي تم إدخاله هو مستخدم متميز بالفعلツ ◤*'
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} のأنت الآن مستخدم متميز ، ولن يكون لديك حدود عند استخدام الروبوتの*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.rowner = true
export default handler
