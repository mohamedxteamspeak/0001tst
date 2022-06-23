import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] ★彡أدخل رابط الفيسبوك ، مثال彡★™: ${usedPrefix + command} https://fb.watch/dlMc_P3qk7/*`
try {
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🔗 *Url:* ${url}`, m)
} catch (e) {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] ★彡خطأ ، يرجى المحاولة مرة أخرى彡★™*\n\n*- ★彡تحقق من أن الرابط مشابه لـ彡★™:*\n*◉ https://fb.watch/dlMc_P3qk7/*')
console.log(e)
}}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
