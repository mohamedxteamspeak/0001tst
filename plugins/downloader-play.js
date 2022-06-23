import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] のاسم الأغنية مفقود ، يرجى إدخال الأمر بالإضافة إلى الاسم / عنوان الأغنيةの*\n\n*—◉ ◥ ツمثالツ ◤:*\n*#play J Cole - No Role Modelz*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] のعذرًا ، لا يمكنني العثور على الصوت / الفيديو ، حاول استخدام اسم / عنوان آخرの*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}
📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${publishedTime}
⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${durationH}
👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['のصوتの', `${usedPrefix}yta ${url} yes`],
['のفيديوの', `${usedPrefix}ytv ${url} yes`]
], m)
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] のخطأ ، يرجى المحاولة مرة أخرىの*')
console.log(e)
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler
