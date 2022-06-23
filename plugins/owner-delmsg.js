let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] استخـدِام  ${usedPrefix}list${which} غيَرٍ مسجٍلُ فَيَ قائمة الُرٍسائلُ*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' ◥ ツغير مسجل في قائمة الرسائلツ ◤*`
delete msgs[text]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ◥ ツلقد نجحت في حذف الرسالة التي تحمل الاسم في قائمة الرسائلツ ◤ '${text}'*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler