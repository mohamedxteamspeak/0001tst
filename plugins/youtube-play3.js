import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[โ๐๐๐๐โ] โๅฝกุงุณู ุงูุฃุบููุฉ ููููุฏ ุ ูุฑุฌู ุฅุฏุฎุงู ุงูุฃูุฑ ุจุงูุฅุถุงูุฉ ุฅูู ุงูุงุณู / ุนููุงู ุงูุฃุบููุฉๅฝกโโข*\n\n*โโ ๐ด๐๐ฐ๐ผ๐ฟ๐ป๐ด:*\n*#playdoc Cheb Larbi - Avec Le Temps Tibgheni*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[โ๐๐๐๐โ] โๅฝกุนุฐุฑูุง ุ ูุง ูููููู ุงูุนุซูุฑ ุนูู ุงูุตูุช / ุงูููุฏูู ุ ุญุงูู ุงุณุชุฎุฏุงู ุงุณู / ุนููุงู ุขุฎุฑๅฝกโโข*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*โโ ๐๐๐๐ ๐๐๐๐๐๐๐๐ โโ*

๐ *๐๐ธ๐๐๐ป๐พ:* ${title}
๐ *๐ณ๐ด๐๐ฒ๐๐ธ๐ฟ๐ฒ๐ธ๐พ๐ฝ:* ${description}
๐ *๐ฟ๐๐ฑ๐ป๐ธ๐๐ท๐ด๐ณ:* ${publishedTime}
โ *๐ณ๐๐๐ฐ๐๐ธ๐พ๐ฝ:* ${durationH}
๐ *๐๐ธ๐ด๐๐:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '๐๐๐ป', null, null, [
['ูููููููููููููููููููููููููููู,ู ุตูู,ูููุชููููููู', `${usedPrefix}yta.2 ${url} yes`],
['ุตูู,ููุบููููููููููููููููููููููููุฉ ุงูููููููููููููููููููู,ููฺููู', `${usedPrefix}ytv.2 ${url} yes`]
], m)
}catch(e){
m.reply('*[โ๐๐๐๐โ] โๅฝกุฎุทุฃ ุ ูุฑุฌู ุงููุญุงููุฉ ูุฑุฉ ุฃุฎุฑูๅฝกโโข*')
console.log(e)
}}
handler.command = /^play3|playdoc?$/i
export default handler
