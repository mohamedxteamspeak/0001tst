let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[โ๐๐๐๐โ] โๅฝกุฃุฏุฎู ุนูุงูุฉtag@ ููุดุฎุต ุงูุฐู ุชุฑุบุจ ูู ุฅุถุงูุชู ุฅูู ุงููุณุชุฎุฏููู ุงููููุฒููๅฝกโโข*`
if (global.prems.includes(who.split`@`[0])) throw '*[โ๐๐๐๐โ] โฅ ใุงููุณุชุฎุฏู ุงูุฐู ุชู ุฅุฏุฎุงูู ูู ูุณุชุฎุฏู ูุชููุฒ ุจุงููุนูใ โค*'
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `*[โ๐๐๐๐โ] @${who.split`@`[0]} ใฎุฃูุช ุงูุขู ูุณุชุฎุฏู ูุชููุฒ ุ ููู ูููู ูุฏูู ุญุฏูุฏ ุนูุฏ ุงุณุชุฎุฏุงู ุงูุฑูุจูุชใฎ*`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.group = true
handler.rowner = true
export default handler
