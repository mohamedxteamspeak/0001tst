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
if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return m.reply('*[โ๐๐๐๐โ] ใฎูุง ูุฌูุฒ ุฃู ูููู ุงูููุฏูู ุฃุทูู ูู 7 ุซูุงููใฎ*')
let img = await q.download?.()

if (!img) throw `*[โ๐๐๐๐โ] เผเทดโฟุฑุฏุงู ุนูู ููุทุน ููุฏูู ุฃู ุตูุฑุฉ ุฃู ุฃุฏุฎู ุฑุงุจุท ุฅููุงุก ุตูุฑุฉ jpg. ูุงูุฐู ุณูุชู ุชุญูููู ุฅูู ููุตู ุ ูุฌุจ ุนููู ุงูุฑุฏ ุฃู ุงุณุชุฎุฏุงู ุงูุฃูุฑโฟใเฟ ${usedPrefix + command}*`

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

else return m.reply('*[โ๐๐๐๐โ] เผเทดโฟุงูุฑุงุจุท ุบูุฑ ุตุงูุญ ุ ูุฌุจ ุฃู ูููู ุฅููุงุก ุงูุฑุงุจุท / URL / ุงูุฑุงุจุท (.jpg .png) ูุซุงูุงูโฟใเฟ: #s https://i.imgur.com/qYLLZo4.png*')
  
}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)

else throw '*[โ๐๐๐๐โ] เผเทดโฟุนุฐุฑูุง ุ ุญุฏุซ ุฎุทุฃ ุ ูุฑุฌู ุงููุญุงููุฉ ูุฑุฉ ุฃุฎุฑู. ูุง ุชูุณ ุงูุฑุฏ ุนูู ููุทุน ููุฏูู ุฃู ุตูุฑุฉ ุฃู ุฅุฏุฑุงุฌ ุฑุงุจุท ุฅููุงุก ุตูุฑุฉ .jpg ูุงูุฐู ุณูุชู ุชุญูููู ุฅูู ููุตูโฟใเฟ*'

}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
