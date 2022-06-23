export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *[❗𝐈𝐍𝐅𝐎❗] ◥ ツلقد توقفت عن أن تكون غير نشط (AFK)ツ ◤${user.afkReason ? ' ◥ ツبعد أن تكون غير نشط (AFK) لسببツ ◤: ' + user.afkReason : ''}*
  
  *—◉ ◥ ツوقت النهار (AFK)ツ ◤: ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*[❗] 𝙽𝙾 𝙻𝙾 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴𝚂 [❗]*

*—◉ ★彡المستخدم الذي توسمته غير نشط (AFK)彡★™*      
*—◉ ${reason ? '★彡سبب عدم النشاط (AFK)彡★™: ' + reason : '★彡سبب عدم النشاط (AFK)彡★™: _★彡لم يحدد المستخدم سببًا彡★™_'}*
*—◉ ★彡الوقت المنقضي في الخمول (AFK)彡★™: ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
