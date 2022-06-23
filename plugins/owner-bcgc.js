import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*╔══❰ ★彡إعلان彡★™ ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '◥ ツهذا اتصال رسميツ ◤\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'الُاتصالُات الُرٍسميَة لُلُمجٍمۆعٍات',
body: 'ʙʏ ᴛʜᴇ ᴇʟʜᴇʀᴅ ﹣ ʙᴏᴛ', 
sourceUrl: `https://instagram.com/dolipran_009/`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ★彡تم إرسال الرسالة إلى彡★™ ${groups.length} 𝙶𝚁𝚄𝙿𝙾/𝚂*\n\n*◥ ツملاحظة: من الممكن أن يكون هذا الأمر به أخطاء ولم يتم إرساله لجميع الدردشات ، آسف للحظةツ ◤*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler
