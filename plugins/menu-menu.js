import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
* ★彡ها هي القائمة الكاملة للهارد بوت彡★™ 💖彡 ✨${name}✨ 💖 ミ مرحبا  , *
*📅 ◥ ツتاريخツ ◤: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*📊 ◥ ツالمستخدمونツ ◤: ${rtotalreg}*
╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<★彡معلومات عن البوت彡★™/>*
° ඬ ⃟ 💟 _${usedPrefix}estado_
° ඬ ⃟ 💟 _${usedPrefix}infobot_
° ඬ ⃟ 💟 _${usedPrefix}owner_
° ඬ ⃟ 💟 _${usedPrefix}script_
° ඬ ⃟ 💟 _${usedPrefix}Bot_ (Text)
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<★彡يستخدم فقط في المجموعة彡★™/>*
° ඬ⃟👽 _${usedPrefix}join *<link / url>*_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<◥ ツمحركات البحثツ ◤/>*
° ඬ⃟🔍 _${usedPrefix}animeinfo *<text>*_
° ඬ⃟🔍 _${usedPrefix}google *<text>*_
° ඬ⃟🔍 _${usedPrefix}letra *<text>*_
° ඬ⃟🔍 _${usedPrefix}wikipedia *<text>*_
° ඬ⃟🔍 _${usedPrefix}ytsearch *<text>*_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<༊෴✿التحميلات✿〄࿐/>*
° ඬ⃟📥 _${usedPrefix}facebook *<link / url>*_
° ඬ⃟📥 _${usedPrefix}instagram *<link / url>*_
° ඬ⃟📥 _${usedPrefix}mediafire *<link / url>*_
° ඬ⃟📥 _${usedPrefix}instagram *<link / url>*_
° ඬ⃟📥 _${usedPrefix}gitclone *<link / url>*_
° ඬ⃟📥 _${usedPrefix}gdrive *<link / url>*_
° ඬ⃟📥 _${usedPrefix}tiktok *<link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp3 *<link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp4 *<link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp3doc *<link / url>*_
° ඬ⃟📥 _${usedPrefix}ytmp4doc *<link / url>*_
° ඬ⃟📥 _${usedPrefix}play.1 *<text / link / url>*_
° ඬ⃟📥 _${usedPrefix}play.2 *<text / link / url>*_
° ඬ⃟📥 _${usedPrefix}play *<text>*_
° ඬ⃟📥 _${usedPrefix}playdoc *<text>*_
° ඬ⃟📥 _${usedPrefix}spotify *<text>*_
° ඬ⃟📥 _${usedPrefix}imagen *<text>*_
° ඬ⃟📥 _${usedPrefix}pinteret *<text>*_
° ඬ⃟📥 _${usedPrefix}wallpaper *<text>*_
° ඬ⃟📥 _${usedPrefix}wallpaper2 *<text>*_
° ඬ⃟📥 _${usedPrefix}pptiktok *<Name of the user>*_
° ඬ⃟📥 _${usedPrefix}igstalk *<Name of the user>*_
° ඬ⃟📥 _${usedPrefix}igstory *<Name of the user>*_
° ඬ⃟📥 _${usedPrefix}tiktokstalk *<Name of the user>*_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<★彡التحولات彡★™/>*
° ඬ⃟🧧 _${usedPrefix}toimg *<responde a un sticker>*_
° ඬ⃟🧧 _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
° ඬ⃟🧧 _${usedPrefix}toptt *<responde a un video / audio>*_
° ඬ⃟🧧 _${usedPrefix}tovideo *<responde a un audio>*_
° ඬ⃟🧧 _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
° ඬ⃟🧧 _${usedPrefix}tts ar *<text>*_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊★彡ستيكرز彡★™/>*
° ඬ⃟👽 _${usedPrefix}sticker *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}sticker *<link / url>*_
° ඬ⃟👽 _${usedPrefix}s *<responder a imagen o video>*_
° ඬ⃟👽 _${usedPrefix}s *<link / url>*_
° ඬ⃟👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
° ඬ⃟👽 _${usedPrefix}semoji *<tipo> <emoji>*_
° ඬ⃟👽 _${usedPrefix}attp *<text>*_
° ඬ⃟👽 _${usedPrefix}ttp *<text>*_
° ඬ⃟👽 _${usedPrefix}pat *<@tag>*_
° ඬ⃟👽 _${usedPrefix}slap *<@tag>_
° ඬ⃟👽 _${usedPrefix}kiss *<@tag>*_
° ඬ⃟👽 _${usedPrefix}dado_
° ඬ⃟👽 _${usedPrefix}wm *<packname> <author>*_
° ඬ⃟👽 _${usedPrefix}stickermarker 
                     *<EFFECTS> <responder a imagen>*_
° ඬ⃟👽 _${usedPrefix}stickerfilter 
                     *<EFFECTS> <responder a imagen>*_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<◥ ツأدواتツ ◤>*
° ඬ⃟🛠️ _${usedPrefix}afk *<reason>*_
° ඬ⃟🛠️ _${usedPrefix}ssf *<link / url>*_
° ඬ⃟🛠️ _${usedPrefix}acortar *<link / url>*_
° ඬ⃟🛠️ _${usedPrefix}calc *<operacion math>*_
° ඬ⃟🛠️ _${usedPrefix}del *<Reply to Bot message>*_
° ඬ⃟🛠️ _${usedPrefix}qrcode *<text>*_
° ඬ⃟🛠️ _${usedPrefix}readmore *<text1| text2>*_
° ඬ⃟🛠️ _${usedPrefix}spamwa *<numero|text|cantidad>*_
° ඬ⃟🛠️ _${usedPrefix}styletext *<text>*_
° ඬ⃟🛠️ _${usedPrefix}traducir *<text>*_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<★彡تأثيرات الصوت彡★™/>*
*- ◥ ツقم برد على مقطع صوتي مع كتابة احد الاوامرツ ◤*
° ඬ⃟🎤 _${usedPrefix}bass_
° ඬ⃟🎤 _${usedPrefix}blown_
° ඬ⃟🎤 _${usedPrefix}deep_
° ඬ⃟🎤 _${usedPrefix}earrape_
° ඬ⃟🎤 _${usedPrefix}fast_
° ඬ⃟🎤 _${usedPrefix}fat_
° ඬ⃟🎤 _${usedPrefix}nightcore_
° ඬ⃟🎤 _${usedPrefix}reverse_
° ඬ⃟🎤 _${usedPrefix}robot_
° ඬ⃟🎤 _${usedPrefix}slow_
° ඬ⃟🎤 _${usedPrefix}smooth_
° ඬ⃟🎤 _${usedPrefix}tupai_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<★彡التأثيرات والشعارات彡★™/>*
° ඬ⃟🖍️ _${usedPrefix}logos *<EFFECTS> <text>*_
° ඬ⃟🖍️ _${usedPrefix}simpcard *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}hornycard *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}lolice *<@tag>*_
° ඬ⃟🖍️ _${usedPrefix}ytcomment *<text>*_
° ඬ⃟🖍️ _${usedPrefix}itssostupid_
° ඬ⃟🖍️ _${usedPrefix}pixelar_
° ඬ⃟🖍️ _${usedPrefix}blur_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<༊෴✿تشغيل أو إيقاف✿〄࿐/>*
° ඬ⃟☑️ _${usedPrefix}enable *welcome*_
° ඬ⃟☑️ _${usedPrefix}disable *welcome*_
° ඬ⃟☑️ _${usedPrefix}enable *modohorny*_
° ඬ⃟☑️ _${usedPrefix}disable *modohorny*_
° ඬ⃟☑️ _${usedPrefix}enable *antilink*_
° ඬ⃟☑️ _${usedPrefix}disable *antilink*_
° ඬ⃟☑️ _${usedPrefix}enable *antilink2*_
° ඬ⃟☑️ _${usedPrefix}disable *antilink2*_
° ඬ⃟☑️ _${usedPrefix}enable *detect*_
° ඬ⃟☑️ _${usedPrefix}disable *detect*_
° ඬ⃟☑️ _${usedPrefix}enable *audios*_
° ඬ⃟☑️ _${usedPrefix}disable *audios*_
° ඬ⃟☑️ _${usedPrefix}enable *autosticker*_
° ඬ⃟☑️ _${usedPrefix}disable *autosticker*_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<★彡تقارير الأخطاء彡★™/>*
° ඬ⃟🔰 _${usedPrefix}reporte *<text>*_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<◥ ツمجموعاتツ ◤/>* 
° ඬ⃟💎 _${usedPrefix}add *<numero>*_
° ඬ⃟💎 _${usedPrefix}kick *<@tag>*_
° ඬ⃟💎 _${usedPrefix}grupo *<abrir / cerrar>*_
° ඬ⃟💎 _${usedPrefix}promote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}admins *<text>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
° ඬ⃟💎 _${usedPrefix}demote *<@tag>*_
° ඬ⃟💎 _${usedPrefix}infogroup_
° ඬ⃟💎 _${usedPrefix}link_
° ඬ⃟💎 _${usedPrefix}setname *<text>*_
° ඬ⃟💎 _${usedPrefix}setdesc *<text>*_
° ඬ⃟💎 _${usedPrefix}invocar *<text>*_
° ඬ⃟💎 _${usedPrefix}setwelcome *<text>*_
° ඬ⃟💎 _${usedPrefix}setbye *<text>*_
° ඬ⃟💎 _${usedPrefix}hidetag *<text>*_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<◥ ツعشوائيツ ◤/>*
° ඬ⃟👾 _${usedPrefix}cristianoronaldo_
° ඬ⃟👾 _${usedPrefix}messi_
° ඬ⃟👾 _${usedPrefix}meme_
° ඬ⃟👾 _${usedPrefix}itzy_
° ඬ⃟👾 _${usedPrefix}blackpink_
° ඬ⃟👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
° ඬ⃟👾 _${usedPrefix}lolivid_
° ඬ⃟👾 _${usedPrefix}loli_
° ඬ⃟👾 _${usedPrefix}navidad_
° ඬ⃟👾 _${usedPrefix}ppcouple_
° ඬ⃟👾 _${usedPrefix}neko_
° ඬ⃟👾 _${usedPrefix}waifu_
° ඬ⃟👾 _${usedPrefix}akira_
° ඬ⃟👾 _${usedPrefix}akiyama_
° ඬ⃟👾 _${usedPrefix}anna_
° ඬ⃟👾 _${usedPrefix}asuna_
° ඬ⃟👾 _${usedPrefix}ayuzawa_
° ඬ⃟👾 _${usedPrefix}boruto_
° ඬ⃟👾 _${usedPrefix}chiho_
° ඬ⃟👾 _${usedPrefix}chitoge_
° ඬ⃟👾 _${usedPrefix}deidara_
° ඬ⃟👾 _${usedPrefix}erza_
° ඬ⃟👾 _${usedPrefix}elaina_
° ඬ⃟👾 _${usedPrefix}eba_
° ඬ⃟👾 _${usedPrefix}emilia_
° ඬ⃟👾 _${usedPrefix}hestia_
° ඬ⃟👾 _${usedPrefix}hinata_
° ඬ⃟👾 _${usedPrefix}inori_
° ඬ⃟👾 _${usedPrefix}isuzu_
° ඬ⃟👾 _${usedPrefix}itachi_
° ඬ⃟👾 _${usedPrefix}itori_
° ඬ⃟👾 _${usedPrefix}kaga_
° ඬ⃟👾 _${usedPrefix}kagura_
° ඬ⃟👾 _${usedPrefix}kaori_
° ඬ⃟👾 _${usedPrefix}keneki_
° ඬ⃟👾 _${usedPrefix}kotori_
° ඬ⃟👾 _${usedPrefix}kurumi_
° ඬ⃟👾 _${usedPrefix}madara_
° ඬ⃟👾 _${usedPrefix}mikasa_
° ඬ⃟👾 _${usedPrefix}miku_
° ඬ⃟👾 _${usedPrefix}minato_
° ඬ⃟👾 _${usedPrefix}naruto_
° ඬ⃟👾 _${usedPrefix}nezuko_
° ඬ⃟👾 _${usedPrefix}sagiri_
° ඬ⃟👾 _${usedPrefix}sasuke_
° ඬ⃟👾 _${usedPrefix}sakura_
° ඬ⃟👾 _${usedPrefix}cosplay_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<◥ ツدردشة مجهولةツ ◤/>*
° ඬ⃟📳 _${usedPrefix}start_
° ඬ⃟📳 _${usedPrefix}next_
° ඬ⃟📳 _${usedPrefix}leave_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*<★彡المالك والمشرفون彡★™/>*
° ඬ⃟👑 _${usedPrefix}cajafuerte_
° ඬ⃟👑 _${usedPrefix}enable *restrict*_
° ඬ⃟👑 _${usedPrefix}disable *restrict*_
° ඬ⃟👑 _${usedPrefix}enable *autoread*_
° ඬ⃟👑 _${usedPrefix}disable *autoread*_
° ඬ⃟👑 _${usedPrefix}enable *public*_
° ඬ⃟👑 _${usedPrefix}disable *public*_
° ඬ⃟👑 _${usedPrefix}enable *pconly*_
° ඬ⃟👑 _${usedPrefix}disable *pconly*_
° ඬ⃟👑 _${usedPrefix}enable *gconly*_
° ඬ⃟👑 _${usedPrefix}disable *gconly*_
° ඬ⃟👑 _${usedPrefix}banchat_
° ඬ⃟👑 _${usedPrefix}unbanchat_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}unbanuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}banuser *<@tag>*_
° ඬ⃟👑 _${usedPrefix}bc *<text>*_
° ඬ⃟👑 _${usedPrefix}bcchats *<text>*_
° ඬ⃟👑 _${usedPrefix}bcgc *<text>*_
° ඬ⃟👑 _${usedPrefix}cleartpm_
° ඬ⃟👑 _${usedPrefix}restart_
° ඬ⃟👑 _${usedPrefix}update_
° ඬ⃟👑 _${usedPrefix}addprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}delprem *<@tag>*_
° ඬ⃟👑 _${usedPrefix}listprem_
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://instagram.com/dolipran_009/', 'Instagram', null, null, [
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] ★彡ان كانت القائمة تحتوي على خطأ ولم يكن من الممكن إرسالها ، والإبلاغ عنها إلى مالك الروبوت彡★™*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menucompleto|menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}