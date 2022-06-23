import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ★彡اسم الأغنية مفقود ، يرجى إدخال الأمر بالإضافة إلى الاسم / عنوان الأغنية彡★™*\n\n*—◉ 𝙴𝚇𝙰𝙼𝙿𝙻𝙴:*\n*#playdoc Cheb Larbi - Avec Le Temps Tibgheni*`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡عذرًا ، لا يمكنني العثور على الصوت / الفيديو ، حاول استخدام اسم / عنوان آخر彡★™*'
try {
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
conn.sendHydrated(m.chat, `
*◉— 𝐏𝐋𝐀𝐘 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓 —◉*

📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}
📆 *𝙿𝚄𝙱𝙻𝙸𝚂𝙷𝙴𝙳:* ${publishedTime}
⌚ *𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽:* ${durationH}
👀 *𝚅𝙸𝙴𝚆𝚂:* ${viewH}
`.trim(), author, thumbnail, `${url}`, '𝚄𝚁𝙻', null, null, [
['مـْـْْـْلُـِـِِـِِِـِِـِـفُـ,ـ صُـ,ـوُتـٌـٌٌـي', `${usedPrefix}yta.2 ${url} yes`],
['صُـ,ـيغٍـُـُُـُُُـُُُُـُُُـُُـُة الُـِـِِـِِِـِِـِـفُـ,ـيڊيوُ', `${usedPrefix}ytv.2 ${url} yes`]
], m)
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ★彡خطأ ، يرجى المحاولة مرة أخرى彡★™*')
console.log(e)
}}
handler.command = /^play3|playdoc?$/i
export default handler
