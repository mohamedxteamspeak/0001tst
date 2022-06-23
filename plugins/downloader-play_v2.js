import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗𝐈𝐍𝐅𝐎❗] ★彡اسم الأغنية المفقودة ، يرجى إدخال الأمر بالإضافة إلى الاسم / العنوان أو رابط أي أغنية أو مقطع فيديو على يوتيوب彡★™\n\n*—◉ ◥ ツمثالツ ◤:\n#play.1 J Cole - No Role Modelz*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳のتتم معالجة يرجى الانتظار...の⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '༊෴✿مازا العفيييت✿〄࿐',
body: 'ʙʏ ᴇʟʜᴇʀᴅ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/dolipran_009`}}})
let res = await fetch("https://my-api-bice.vercel.app/api/ytplay?apikey=nktesla&q="+text)
let json = await res.json()
conn.sendFile(m.chat, json.descarga, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳のتتم معالجة يرجى الانتظار...の⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '༊෴✿مازا العفيييت✿〄࿐',
body: 'ʙʏ ᴇʟʜᴇʀᴅ ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/dolipran_009`}}})
let res = await fetch("https://api.lolhuman.xyz/api/ytplay2?apikey=9b817532fadff8fc7cb86862&query="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_𝐓𝐡𝐞 𝙀𝙇𝙃𝙀𝙍𝘿 - 𝐁𝐨𝐭_`, m)}
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ★彡خطأ ، يرجى المحاولة مرة أخرى彡★™*')
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
