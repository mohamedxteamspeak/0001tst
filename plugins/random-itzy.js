import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Itzy")
let json = res.data
let mystic = json.url
conn.sendButton(m.chat, `_${command}_`, author, mystic, [['🔄 الُـِـِِـِِِـِِـِـتـٌـٌٌـالُـِـِِـِِِـِِـِـي 🔄', `/${command}`]], m)
}
handler.help = ['itzy','kpopitzy']
handler.tags = ['internet']
handler.command = /^(itzy|kpopitzy)$/i
export default handler
