import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
*_✳️ ★彡الاستخدام الصحيح للأمر彡★™ ✳️_*
*👉 Use:* ${usedPrefix}stickerfilter (تأثيَرٍ) 
- Y のالرد على الصورةの
*✅ ★彡مثال彡★™:* ${usedPrefix}stickerfilter greyscale
*قٌـ,ـائمـْـْْـْة الُـِـِِـِِِـِِـِـتـٌـٌٌـأثُير:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*_🔰 ◥ ツالصورة غير موجودةツ ◤_*\n\n*_✅ のالرد على الصورةの_*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*_⚠️ ★彡التنسيق غير مدعوم彡★™_*\n\n*_👉🏻 のالرد على الصورةの_*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply('*_⚠️ ★彡حدث خطأ أثناء التحويل إلى ملصق彡★™_*\n\n*_✳️ のإرسال الصورة بدلا من ذلك...の_*')
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickerfilter|stikerfilter|cs2)$/i
export default handler
