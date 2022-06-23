let handler = m => {
let msgs = global.db.data.msgs
m.reply(`
*🔰 ◥ ツقائمة النصوص / الرسائل / الكلمات الرئيسيةツ ◤ 🔰*

*✳️ ◥ ツرسائلツ ◤ ✳️*
${Object.keys(msgs).map(v => '*👉🏻 ' + v).join('*\n*')}*
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^lista(vn|msg|video|audio|img|sticker)$/
export default handler