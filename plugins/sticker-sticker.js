import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] のلا يجوز أن يكون الفيديو أطول من 7 ثوانٍの*')
let img = await q.download?.()

if (!img) throw `*[❗𝐈𝐍𝐅𝐎❗] ༊෴✿رداً على مقطع فيديو أو صورة أو أدخل رابط إنهاء صورة jpg. والذي سيتم تحويله إلى ملصق ، يجب عليك الرد أو استخدام الأمر✿〄࿐ ${usedPrefix + command}*`

let out
try {
stiker = await sticker(img, false, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)

else return m.reply('*[❗𝐈𝐍𝐅𝐎❗] ༊෴✿الرابط غير صالح ، يجب أن يكون إنهاء الرابط / URL / الرابط (.jpg .png) مثالاً✿〄࿐: #s https://i.imgur.com/qYLLZo4.png*')
  
}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)

else throw '*[❗𝐈𝐍𝐅𝐎❗] ༊෴✿عذرًا ، حدث خطأ ، يرجى المحاولة مرة أخرى. لا تنس الرد على مقطع فيديو أو صورة أو إدراج رابط إنهاء صورة .jpg والذي سيتم تحويله إلى ملصق✿〄࿐*'

}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
