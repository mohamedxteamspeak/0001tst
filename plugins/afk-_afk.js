export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *[โ๐๐๐๐โ] โฅ ใููุฏ ุชูููุช ุนู ุฃู ุชููู ุบูุฑ ูุดุท (AFK)ใ โค${user.afkReason ? ' โฅ ใุจุนุฏ ุฃู ุชููู ุบูุฑ ูุดุท (AFK) ูุณุจุจใ โค: ' + user.afkReason : ''}*
  
  *โโ โฅ ใููุช ุงูููุงุฑ (AFK)ใ โค: ${(new Date - user.afk).toTimeString()}*
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
        m.reply(`*[โ] ๐ฝ๐พ ๐ป๐พ ๐ด๐๐ธ๐๐๐ด๐๐ด๐ [โ]*

*โโ โๅฝกุงููุณุชุฎุฏู ุงูุฐู ุชูุณูุชู ุบูุฑ ูุดุท (AFK)ๅฝกโโข*      
*โโ ${reason ? 'โๅฝกุณุจุจ ุนุฏู ุงููุดุงุท (AFK)ๅฝกโโข: ' + reason : 'โๅฝกุณุจุจ ุนุฏู ุงููุดุงุท (AFK)ๅฝกโโข: _โๅฝกูู ูุญุฏุฏ ุงููุณุชุฎุฏู ุณุจุจูุงๅฝกโโข_'}*
*โโ โๅฝกุงูููุช ุงููููุถู ูู ุงูุฎููู (AFK)ๅฝกโโข: ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
