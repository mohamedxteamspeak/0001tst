import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[❗𝐈𝐍𝐅𝐎❗] ★彡مثال على الاستخدام الصحيح للأمر彡★™: ${usedPrefix + command} Gangster's Paradise*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
★彡العنوان彡★™: *${result.title}*
★彡مؤلف彡★™ ${result.author}


${result.lyrics}


𝐔𝐑𝐋 ${result.link}
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['◥ ツقم بتنزيل الصوتツ ◤', `/play.1 ${text}`],
['★彡قم بتنزيل الصوت彡★™', `/play.2 ${text}`]
], m)
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] خٌطٌأ ، يّرجَى ٱلمحًٱوِلة مرة أخٌرى*')
console.log(e)
}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
