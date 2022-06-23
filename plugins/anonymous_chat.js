async function handler(m, { command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] ★彡أنت لست في دردشة مجهولة彡★™*\n\n*★彡هل تريد أن تبدأ واحد؟彡★™*\n_★彡انقر فوق الزر التالي彡★™_', author, null, [['★彡ابدأ محادثة مجهولة彡★™', `.start`]], m)
m.reply('*[ ✔ ] ★彡نجح في الخروج من الدردشة المجهولة彡★™*')
let other = room.other(m.sender) 
if (other) await this.sendButton(other, '*[❗𝐈𝐍𝐅𝐎❗] ★彡ترك المستخدم الآخر الدردشة المجهولة彡★™*\n\n*★彡هل تريد الذهاب إلى دردشة أخرى مجهولة؟彡★™*\n_★彡انقر فوق الزر التالي彡★™_', author, null, [['★彡ابدأ محادثة مجهولة彡★™', `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] ★彡هل ما زلت في دردشة مجهولة أو تنتظر انضمام مستخدم آخر للبدء彡★™*\n\n*★彡هل تريد الخروج من الدردشة المجهولة؟彡★™*\n_★彡انقر فوق الزر التالي彡★™_', author, null, [['★彡الخروج من الدردشة المجهولة彡★™', `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendButton(room.a, '*[ ✔ ] [ ✔ ] ★彡انضم شخص إلى الدردشة المجهولة ، يمكنك بدء الدردشة彡★™**', author, null, [['★彡اذهب إلى محادثة أخرى彡★™', `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendButton(m.chat, '*[ ✔ ] [ ✔ ] ★彡انضم شخص إلى الدردشة المجهولة ، يمكنك بدء الدردشة彡★™**', author, null, [['★彡اذهب إلى محادثة أخرى彡★™', `.next`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendButton(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] ★彡في انتظار مستخدم آخر لبدء دردشة مجهولة彡★™*\n\n*★彡هل تريد الخروج من الدردشة المجهولة؟彡★™*\n_★彡انقر فوق الزر التالي彡★™_', author, null, [['★彡الخروج من الدردشة المجهولة彡★™', `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler
