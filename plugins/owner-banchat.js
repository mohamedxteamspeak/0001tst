let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ★彡تم حظر هذه المحادثة بنجاح彡★™*\n\n*—◉ ★❗彡لا يتفاعل الروبوت مع أي أمر حتى تقوم بإلغاء حظر هذه المحادثة彡❗★™*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true
export default handler
