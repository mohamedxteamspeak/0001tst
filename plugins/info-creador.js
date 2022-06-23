import fs from 'fs'
function handler(m, { conn }) {
let text = `
*—◉ ★彡رقم المطور هو彡★™ wa.me/212679713244*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'のالمعلومات - المالكの',
body: 'ʙʏ ᴛʜᴇ 𝙀𝙇𝙃𝙀𝙍𝘿 ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://wa.me/212679713244`}}})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
