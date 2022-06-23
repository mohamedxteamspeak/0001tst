import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Chkon nta.mp3'
conn.sendFile(m.chat, vn, 'Chkon nta.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Chkon nta|chkon nta|Chkoun nta|chkoun nta|شكون نت|شكون نتا|Madtgit b3da|Mab3da tgit kiyi|madidi ilan|madtgit b3da|mab3da tgit kiyi|madidi ilan|ماتكيت كي|ماتكيت بعدا|ممكن نعرف شكون معايا/
handler.command = new RegExp
export default handler