let handler  = async (m, { conn, usedPrefix, command }) => {
let res = "https://recoders-area.caliph.repl.co/api/lolivid"
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['🔄 الُـِـِِـِِِـِِـِـتـٌـٌٌـالُـِـِِـِِِـِِـِـي 🔄', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['random']
handler.command = /^(lolivid|lolivideos|lolívid)$/i
export default handler
