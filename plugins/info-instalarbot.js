import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*ββ ππππΎππΈπ°π» π±πΎππΌπΈπ½π΄ π·πΎππ*
β β₯ [π€΄π»] βε½‘Ψ§ΩΩΨ·ΩΨ±ε½‘ββ’: *Elherd Mohamed*
β β₯ [#οΈβ£] βε½‘Ψ±ΩΩ Ψ§ΩΩΨ·ΩΨ±ε½‘ββ’: *+212 6797-13244*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ - πΈπ½πππ°π»π°ππ±πΎπ',
body: 'α΄Κα΄ ππππππΏ οΉ£ Κα΄α΄',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/dolipran_009`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
