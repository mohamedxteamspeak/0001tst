import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Fin kayn.mp3'
conn.sendFile(m.chat, vn, 'Fin kayn.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Fin kayn|Fin kayn db|fin kayn|فين كاين|فين كاين دبا|Mahtilit ghila|Mahtlita|Mahtit/
handler.command = new RegExp
export default handler
