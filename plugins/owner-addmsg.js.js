let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/agregar/i, '')
    if (!m.quoted) throw '*[โ๐๐๐๐โ] โๅฝกุงูุฑุฏ ุนูู ูุต ุ ุฑุณุงูุฉ ุ ุตูุฑุฉ ุ ุฅูุฎ. ูุฃุถู ูุตูุง ููููุฉ ุฑุฆูุณูุฉๅฝกโโข*'
    if (!text) throw `*[โ๐๐๐๐โ] ใฎุงุณุชุนูุงูใฎ *${usedPrefix}list${which}* โฅ ใููุดุงูุฏุฉ ูุงุฆูุฉ ุงูุฑุณุงุฆูใ โค`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*[โ๐๐๐๐โ] '${text}' เผเทดโฟููุฏ ููุช ุจุงูุชุณุฌูู ูู ูุงุฆูุฉ ุงูุฑุณุงุฆูโฟใเฟ`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[โ๐๐๐๐โ] โฅ ใุชูุช ุฅุถุงูุฉ ุงูุฑุณุงูุฉ ุจูุฌุงุญ ุฅูู ูุงุฆูุฉ ุงูุฑุณุงุฆูใ โค '${text}'*\n*โฅ ใุงููุตูู ูุนใ โค ${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler