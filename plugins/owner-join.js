let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] ◥ ツارتباط خاطئ أو مفقودツ ◤*\n*👉🏻 ★彡أدخل رابط مجموعة彡★™*\n\n*★彡مثال彡★™:*\n*#join https://chat.whatsapp.com/JkknrZytFFdG5Bp18e0XxE*\n\n*[❗𝐈𝐍𝐅𝐎❗] ༊෴✿لا ترد على أي رسالة ، فقد تتسبب في حدوث تداخل ، وتكتبها فقط كرسالة جديدة✿〄࿐*'

if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*◥ ツانضم الروبوت بنجاح إلى المجموعة ، واستمتع بالروبوت!ツ ◤ ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗𝐈𝐍𝐅𝐎❗] ★彡طلب بوت جديد لمجموعة彡★™ [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ ◥ ツرقم المتقدمツ ◤:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ ★彡رابط المجموعة التي يُطلب فيها الروبوت彡★™:* ' + link, jid)

await m.reply('*[❗𝐈𝐍𝐅𝐎❗] ◥ ツتم إرسال رابط مجموعتك إلى مالكツ ◤*\n\n*👉🏻 ◥ ツستكون مجموعتك قيد التقييم وسيقرر مالك الروبوت ما إذا كان سيضيفني أم لاツ ◤*\n\n*[❗𝐈𝐍𝐅𝐎❗] ◥ ツلسبب ما ثم رفض طلبكツ ◤:*\n*1.- ◥ ツالبوت مشبعツ ◤*\n*2.- ◥ ツتمت إزالة الروبوت مسبقًا من المجموعةツ ◤*\n*3.- ◥ ツتمت إعادة إنشاء رابط المجموعةツ ◤*\n*4.-◥ ツلا ينضم الروبوت إلى المجموعات وفقًا لقرار المالكツ ◤*\n\n*👉🏻 のكن على علم بأن طلبك للانضمام إلى الروبوت في مجموعة قد يستغرق ساعات أو أيام حتى يتم الرد عليه ، كن صبورًاの*')}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
export default handler
