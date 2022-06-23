let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] ★彡الرجاء إدخال الرقم الذي سيتم إرسال الرسائل المزعجة إليه!彡★™*\n*のالاستخدام الصحيحの:*\n*—◉ #spamwa numero|texto|value*\n*のمثالの:*\n*—◉ #spamwa 5219999999999|Maza al3fit :v|10*'
if (!pesan) throw '*[ ⚠️ ] ◥ ツالرجاء إدخال الرسالة لإرسال البريد العشوائي!ツ ◤*\n*のالاستخدام الصحيحの:*\n*—◉ #spamwa numero|texto|value*\n*のمثالの:*\n*—◉ #spamwa 5219999999999|Maza al3fit :v|10*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] ◥ ツيجب أن تكون الكمية رقماً!ツ ◤*\n*のالاستخدام الصحيحの:*\n*—◉ #spamwa numero|texto|value*\n*のمثالの:*\n*—◉ #spamwa 5219999999999|Maza al3fit :v|10*'

let fixedvalue = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] ◥ ツرسائل كثيرة جدًا! يجب أن تقل الكمية عن 50 رسالةツ ◤*️'
await m.reply(`*[❗]★彡الرسائل الاقتحامية إلى العدد彡★™ ${nomor} ༊෴✿تم بنجاح✿〄࿐*\n*◥ ツالمبلغ المرسلツ ◤:*\n*—◉ ${fixedJumlah} 𝚟𝚎𝚌𝚎𝚜!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedvalue, pesan.trim(), m)
}}
handler.help = ['spamwa <value>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.limit = true
export default handler
