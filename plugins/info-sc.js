import fs from 'fs'
let handler = async (m, { conn }) => {
conn.reply(m.chat, `*https://instagram.com/dolipran_009/*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ππ²ππΈπΏπ ππ·π°πππ°πΏπΏ π±πΎπ πππ',
body: 'α΄Κα΄ ππππππΏ οΉ£ Κα΄α΄ οΉ£ α΄α΄',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/dolipran_009/`}}})
}
handler.command = ['sc','script']
handler.help = ['sc']
handler.tags = ['General']
export default handler
