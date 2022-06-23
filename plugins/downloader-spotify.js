import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] のأدخل اسم أغنية للبحثの*`
try {
let res = await fetch(global.API('zeks', '/api/spotify', { q: text }, 'apikey'))
if (!res.ok) throw await res.text()
let json = await res.json()
if(!json.data[0]) throw json
let { title, artists, album, thumb, url, preview_mp3 } = json.data[0]
let spotifyi = `❒═════❬ 𝐒𝐏𝐎𝐓𝐈𝐅𝐘 ❭═════╾❒
┬
├‣✨ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
┴
┬
├‣🗣️ *𝙰𝚁𝚃𝙸𝚂𝚃𝙰:* ${artists}
┴
┬
├‣🎆 *𝙰𝙻𝙱𝚄𝙼:* ${album}
┴
┬
├‣🌐 *𝚄𝚁𝙻*: ${url}
┴
┬
├‣💚 *𝚄𝚁𝙻 𝙳𝙸𝚁𝙴𝙲𝚃𝙾:* ${preview_mp3}\n┴\n\n*_- のإرسال معاينة الموسيقىの_*\n\n_﹫ᴇʟʜᴇʀᴅ ﹣ ʙᴏᴛ_`

conn.sendFile(m.chat, thumb, '', spotifyi, m)
conn.sendFile(m.chat, preview_mp3, 'spotify.mp3', spotifyi, m)
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] のخطأ ، لا يمكن البحث عن الأغنية أو فشل صفحة المساعدة للبحث عن الأغنية ، يرجى التحقق من الرجوع لاحقًاの*'
}}
handler.command = /^(spotify|music)$/i
handler.help = ['spotify']
handler.tags = ['general']
export default handler
