let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `قٌـ,ـائمـْـْْـْة الُـِـِِـِِِـِِـِـځـٌٌـٌٌياراتـٌـٌٌـ`,
rows: [
{title: "✨ | 𝚆𝙴𝙻𝙲𝙾𝙼𝙴", description: "★彡تمكين أو تعطيل الترحيب في المجموعة彡★™", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | 𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾", description: "يَصبحٍ الُرٍۆبۆت لُلُاستخـدِام الُعٍام ۆ / أۆ الُخـاص", rowId: `${usedPrefix + command} public`},
{title: "🥵 | 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈", description: "قَم بّتُمكيّنٌ أوِ تُعطٌيّل ٱلأوِٱمر +18", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺", description: "تنشُيَطُ أۆ إلُغاء تنشُيَطُ الُرٍۆابطُ الُمضادِة لُمجٍمۆعٍات الُۆتساب", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝟸", description: "قَم بّتُنٌشّيّطٌ أوِ إلغّٱء تُنٌشّيّطٌ ٱلروِٱبّطٌ ٱلمضٱدُة ٱلتُيّ تُبّدُأ فُيّ HTTPS", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | 𝙳𝙴𝚃𝙴𝙲𝚃", description: "★彡تمكين أو تعطيل إعلامات التعديل الجديدة في مجموعة彡★™", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃", description: "★彡تمكين أو تعطيل القيود لإزالة الأشخاص من المجموعات彡★™", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳", description: "ۆضعٍ عٍلُامة عٍلُى الُمحٍادِثات تلُقائيًَا گمقرٍۆءة", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | 𝙰𝚄𝙳𝙸𝙾𝚂", description: "★彡تمكين أو تعطيل أوامر الصوت بدون إعداد مسبق彡★™", rowId: `${usedPrefix + command} audios`},
{title: "👾 | 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁", description: "★彡تم إرسال جميع الصور أو مقاطع الفيديو أو الروابط إذا تم إرسالها على الملصق彡★™", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | 𝙿𝙲𝙾𝙽𝙻𝚈", description: "༊෴✿لن يستجيب الروبوت للأوامر إلا إذا كانت محادثة خاصة✿〄࿐", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | 𝙶𝙲𝙾𝙽𝙻𝚈", description: "★彡لن يستجيب الروبوت للأوامر إلا إذا كانت مجموعة彡★™", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨اهلُا ۆسهلُا, ${name}!!*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┣❧ *★彡حدد أحد الخيارات التي تظهر في القائمة التالية أو انقر على زر في هذه الرسالة彡★™*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟ℹ️ _${usedPrefix}enable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *welcome*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *modohorny*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *antilink2*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *detect*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *restrict*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *audios*_
┣ ඬ⃟ℹ️ _${usedPrefix}enable *autosticker*_
┣ ඬ⃟ℹ️ _${usedPrefix}disable *autosticker*_
┗━━━━━━━━━━━━━┛
${author}`,
title: null,
buttonText: "اځـٌٌـٌٌتـٌـٌٌـر هنـِِـِـا",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
🎚️ のالحالةの: ${isEnable ? '◥ ✔️ツمفعلツ✔️ ◤' : '◥ ❌ツغير مفعلツ ❌◤'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, author, null, [[`${isEnable ? '◥ ❌ツغير مفعلツ ❌◤' : '◥ ✔️ツمفعلツ✔️ ◤'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['👾★彡القائمة الرئيسية彡★™👾', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
