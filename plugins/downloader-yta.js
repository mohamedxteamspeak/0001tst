let limit = 50
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) throw `*[โ๐๐๐๐โ] โฅ ใุฃุฏุฎู ุงูุฃูุฑ ุจุงูุฅุถุงูุฉ ุฅูู ุฑุงุจุท / ุฑุงุจุท ููุฏูู ููุชููุจใ โค*`
conn.reply(m.chat, `*_โณโๅฝกุชุชู ูุนุงูุฌุฉ ุงูุฃู ...ๅฝกโโขโณ_*\n\n*โ โฅ ใุฅุฐุง ูู ูุชู ุฅุฑุณุงู ุฃู ุดูุก ุ ูุฌุฑูุจ ุงุญุฏู ูุฐู ุงูุฃูุงูุฑ ูุน ุงุถุงูุฉ ุฑุงุจุท ุงูููุทุนใ โค #playdoc แด #play.1 แด #ytmp3doc โ*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ุงูููููููููููููููููุนููโูููู,ูููโปูููุชู',
body: 'สส แดสแด แดสสแดสแด ๏นฃ สแดแด',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/dolipran_009`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSizeH
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '*[โ] ERROR: ' + (lastError || 'โๅฝกูู ููู ูู ุงููููู ุชูุฒูู ุงูุตูุชๅฝกโโข*')
conn.sendFile(m.chat, source, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
export default handler
