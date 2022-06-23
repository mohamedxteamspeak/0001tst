import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Use example ${usedPrefix}${command} Horror`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🔎 *◥ ツنتيجة لツ ◤:* ${text}
🌎 *◥ ツمحرك البحثツ ◤:* كوِكل
`, author, link, link, '🔗 𝚄𝚁𝙻', null, null, [
['🔄 الُـِـِِـِِِـِِـِـتـٌـٌٌـالُـِـِِـِِِـِِـِـي 🔄', `/imagen ${text}`]
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
export default handler
