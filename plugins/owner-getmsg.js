let handler = async (m, { conn, command, usedPrefix, text }) => {
let which = command.replace(/ver/i, '')
if (!text) throw `*[โ๐๐๐๐โ] ุฅุณุชุฎูุฏูู *${usedPrefix}list${which}* ููุฑูุคููุฉ ุงูููุงุฆูุฉ*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[โ๐๐๐๐โ] '${text}' โๅฝกุบูุฑ ูุณุฌู ูู ูุงุฆูุฉ ุงูุฑุณุงุฆูๅฝกโโข*`
let _m = await conn.serializeM(msgs[text])
await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
handler.tags = ['database']
handler.command = /^ver(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler