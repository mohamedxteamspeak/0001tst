import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] ★彡رد على الفيديو أو مقطع الصوتي الذي تريد التحويله صوت م ب 3  彡★™*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] عٍڌرًٍا ، حٍدِث خـطُأ أثناء تنزيَلُ الُفَيَدِيَۆ ، يَرٍجٍى الُمحٍاۆلُة مرٍة أخـرٍى*'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] عذٌرًٱ ، حًدُثً خٌطٌأ أثًنٌٱء تُنٌزيّل مذٌكرتُك ٱلصِوِتُيّة ، يّرجَى ٱلمحًٱوِلة مرة أخٌرى*'
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡عذرًا ، حدث خطأ أثناء تحويل مقطع الصوتي إلى صوت  م ب 3 ، يرجى المحاولة مرة أخرى彡★™*'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] ◥ ツعذرًا ، حدث خطأ أثناء تحويل الفيديو الخاص بك إلى صوت م ب 3 ، يرجى المحاولة مرة أخرىツ ◤*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
