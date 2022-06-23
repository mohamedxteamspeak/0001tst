import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] ★彡الرد على مقطع الفيديو الذي تريد تحويله إلى المذكرة الصوتية彡★™*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗]★彡عذرًا ، حدث خطأ أثناء تنزيل الفيديو ، يرجى المحاولة مرة أخرى彡★™*'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡عذرًا ، حدث خطأ أثناء تنزيل الصوت ، يرجى المحاولة مرة أخرى彡★™*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡عذرًا ، حدث خطأ أثناء تنزيل الصوت ، يرجى المحاولة مرة أخرى彡★™*'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡عذرًا ، حدث خطأ أثناء تحويل الفيديو الخاص بك إلى مذكرة صوتية ، يرجى المحاولة مرة أخرى彡★™*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i
export default handler
