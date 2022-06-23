let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/agregar/i, '')
    if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡الرد على نص ، رسالة ، صورة ، إلخ. وأضف نصًا ككلمة رئيسية彡★™*'
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] のاستعمالの *${usedPrefix}list${which}* ◥ ツلمشاهدة قائمة الرسائلツ ◤`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' ༊෴✿لقد قمت بالتسجيل في قائمة الرسائل✿〄࿐`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ◥ ツتمت إضافة الرسالة بنجاح إلى قائمة الرسائلツ ◤ '${text}'*\n*◥ ツالوصول معツ ◤ ${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler