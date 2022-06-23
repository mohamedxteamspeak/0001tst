import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Wald l9hba.mp3'
conn.sendFile(m.chat, vn, 'Wald l9hba.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Chkoun ana|chkoun ana|chkon ana|Chkon ana|شكون أنا|شكون انا|madgi7 nki|Madgi7 nki|مادكيح نكي/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
