import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[โ๐๐๐๐โ] ใฎุฃุฏุฎู ุงุณู ุฃุบููุฉ ููุจุญุซใฎ*`
try {
let res = await fetch(global.API('zeks', '/api/spotify', { q: text }, 'apikey'))
if (!res.ok) throw await res.text()
let json = await res.json()
if(!json.data[0]) throw json
let { title, artists, album, thumb, url, preview_mp3 } = json.data[0]
let spotifyi = `โโโโโโโฌ ๐๐๐๐๐๐๐ โญโโโโโโพโ
โฌ
โโฃโจ *๐๐ธ๐๐๐ป๐พ:* ${title}
โด
โฌ
โโฃ๐ฃ๏ธ *๐ฐ๐๐๐ธ๐๐๐ฐ:* ${artists}
โด
โฌ
โโฃ๐ *๐ฐ๐ป๐ฑ๐๐ผ:* ${album}
โด
โฌ
โโฃ๐ *๐๐๐ป*: ${url}
โด
โฌ
โโฃ๐ *๐๐๐ป ๐ณ๐ธ๐๐ด๐ฒ๐๐พ:* ${preview_mp3}\nโด\n\n*_- ใฎุฅุฑุณุงู ูุนุงููุฉ ุงูููุณูููใฎ_*\n\n_๏นซแดสสแดสแด ๏นฃ สแดแด_`

conn.sendFile(m.chat, thumb, '', spotifyi, m)
conn.sendFile(m.chat, preview_mp3, 'spotify.mp3', spotifyi, m)
} catch (e) {
throw '*[โ๐๐๐๐โ] ใฎุฎุทุฃ ุ ูุง ูููู ุงูุจุญุซ ุนู ุงูุฃุบููุฉ ุฃู ูุดู ุตูุญุฉ ุงููุณุงุนุฏุฉ ููุจุญุซ ุนู ุงูุฃุบููุฉ ุ ูุฑุฌู ุงูุชุญูู ูู ุงูุฑุฌูุน ูุงุญููุงใฎ*'
}}
handler.command = /^(spotify|music)$/i
handler.help = ['spotify']
handler.tags = ['general']
export default handler
