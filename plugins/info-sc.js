import fs from 'fs'
let handler = async (m, { conn }) => {
conn.reply(m.chat, `*https://instagram.com/dolipran_009/*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝚂𝙲𝚁𝙸𝙿𝚃 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙀𝙇𝙃',
body: 'ᴛʜᴇ 𝙀𝙇𝙃𝙀𝙍𝘿 ﹣ ʙᴏᴛ ﹣ ᴍᴅ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/dolipran_009/`}}})
}
handler.command = ['sc','script']
handler.help = ['sc']
handler.tags = ['General']
export default handler
