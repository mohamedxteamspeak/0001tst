import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] ★彡أدخل اسم أي انيمي تريد البحث عنه彡★™*`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = `✨ *Titulo:* ${title}
🎆 *◥ ツالحلقاتツ ◤:* ${episodes}
💬 *◥ ツبثت علىツ ◤:* ${type}
💌 *★彡تقييم彡★™:* ${rated}
❤️ *◥ ツنتيجةツ ◤:* ${score}
👥 *★彡أعضاء彡★™:* ${members}
💚 *★彡ملخص باللغة الإنجليزية彡★™:* ${synopsis}
🌐 *◥ ツرابطツ ◤*: ${url}`
conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(animeinfo)$/i
export default handler
