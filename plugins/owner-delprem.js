let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[โ๐๐๐๐โ] โฅ ใุฃุฏุฎู ุนูุงูุฉtag@ ููุดุฎุต ุงูุฐู ุชุฑูุฏ ุฅุฒุงูุชู ูู ุงููุณุชุฎุฏููู ุงููููุฒููใ โค*`
if (!global.prems.includes(who.split`@`[0])) throw '*[โ๐๐๐๐โ] โฅ ใุงููุณุชุฎุฏู ุงูุฐู ุชู ุฅุฏุฎุงูู ููุณ ูุณุชุฎุฏููุง ูุชููุฒูุงใ โค*'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
conn.reply(m.chat, `*[โ๐๐๐๐โ] @${who.split`@`[0]} โฅ ใุงูุขู ูู ูุนุฏ ุฌุฒุกูุง ูู ุงููุณุชุฎุฏููู ุงููููุฒููใ โค*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.rowner = true
export default handler
