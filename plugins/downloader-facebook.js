import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[โ๐๐๐๐โ] โๅฝกุฃุฏุฎู ุฑุงุจุท ุงูููุณุจูู ุ ูุซุงูๅฝกโโข: ${usedPrefix + command} https://fb.watch/dlMc_P3qk7/*`
try {
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `๐ *Url:* ${url}`, m)
} catch (e) {
await m.reply('*[โ๐๐๐๐โ] โๅฝกุฎุทุฃ ุ ูุฑุฌู ุงููุญุงููุฉ ูุฑุฉ ุฃุฎุฑูๅฝกโโข*\n\n*- โๅฝกุชุญูู ูู ุฃู ุงูุฑุงุจุท ูุดุงุจู ููๅฝกโโข:*\n*โ https://fb.watch/dlMc_P3qk7/*')
console.log(e)
}}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
