let limit = 50
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] أدخل الأمر بالإضافة إلى رابط / رابط فيديو YOUTUBE*`
conn.reply(m.chat, `*_⏳الفيديو الخاص بك قيد المعالجة...⏳_*\n\n*◉ إذا لم يتم إرسال الفيديو الخاص بك ، فجرب  الأمر بالإضافة إلى رابط فيديو playdoc ᴏ #play.2 ᴏ #ytmp4doc# ◉*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝚆𝚊𝚕𝟹𝚏𝚒𝚝 𝚓𝚞𝚜𝚝 𝚠𝚊𝚒𝚝',
body: 'ʙʏ ᴛʜᴇ Elherd ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/dolipran_009`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSizeH
if (isLimit) continue
link = await video.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
video = source = link = null
lastError = e
}}
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '*[❗] خطأ: ' + (lastError || '★彡لم يكن من الممكن تنزيل الفيديو彡★™*')
let _thumb = {}
try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
catch (e) { }
conn.sendFile(m.chat, link, title + '.mp4', `
*🔥 ★彡العنوان彡★™:* ${title}
*📁 ★彡حجم الفيديو彡★™:* ${video.fileSizeH}
`.trim(), m, false, {
..._thumb,
asDocument: chat.useDocument
})}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
export default handler
