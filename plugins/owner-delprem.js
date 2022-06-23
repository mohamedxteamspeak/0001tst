let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗𝐈𝐍𝐅𝐎❗] ◥ ツأدخل علامةtag@ للشخص الذي تريد إزالته من المستخدمين المميزينツ ◤*`
if (!global.prems.includes(who.split`@`[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] ◥ ツالمستخدم الذي تم إدخاله ليس مستخدمًا متميزًاツ ◤*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] @${who.split`@`[0]} ◥ ツالآن لم يعد جزءًا من المستخدمين المميزينツ ◤*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.rowner = true
export default handler
