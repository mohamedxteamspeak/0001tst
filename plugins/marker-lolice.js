let handler = async (m, { conn, usedprefix }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendButton(m.chat, '*ππ¨ β₯ γΩΩΩΩΩΩΩ ΩΨ«ΩΩ Ψ£ΩΨͺ ΩΩΨ· ΨͺΩΨͺΩΩ Ψ₯ΩΩ Ψ§ΩΨ³Ψ¬Ωγ β€ π¨π*', author, global.API('https://some-random-api.ml', '/canvas/lolice', { 
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), [['ππΎ π°πΌπΎ π»π°π π»πΎπ»πΈπ π', `/loli`]], m)}

handler.help = ['lolice']
handler.tags = ['maker']
handler.command = /^(lolice)$/i
export default handler
