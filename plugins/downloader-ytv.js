let limit = 50
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) throw `*[โ๐๐๐๐โ] ุฃุฏุฎู ุงูุฃูุฑ ุจุงูุฅุถุงูุฉ ุฅูู ุฑุงุจุท / ุฑุงุจุท ููุฏูู YOUTUBE*`
conn.reply(m.chat, `*_โณุงูููุฏูู ุงูุฎุงุต ุจู ููุฏ ุงููุนุงูุฌุฉ...โณ_*\n\n*โ ุฅุฐุง ูู ูุชู ุฅุฑุณุงู ุงูููุฏูู ุงูุฎุงุต ุจู ุ ูุฌุฑุจ  ุงูุฃูุฑ ุจุงูุฅุถุงูุฉ ุฅูู ุฑุงุจุท ููุฏูู playdoc แด #play.2 แด #ytmp4doc# โ*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐๐๐๐น๐๐๐ ๐๐๐๐ ๐ ๐๐๐',
body: 'สส แดสแด Elherd ๏นฃ สแดแด',         
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
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '*[โ] ุฎุทุฃ: ' + (lastError || 'โๅฝกูู ููู ูู ุงููููู ุชูุฒูู ุงูููุฏููๅฝกโโข*')
let _thumb = {}
try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
catch (e) { }
conn.sendFile(m.chat, link, title + '.mp4', `
*๐ฅ โๅฝกุงูุนููุงูๅฝกโโข:* ${title}
*๐ โๅฝกุญุฌู ุงูููุฏููๅฝกโโข:* ${video.fileSizeH}
`.trim(), m, false, {
..._thumb,
asDocument: chat.useDocument
})}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
export default handler
