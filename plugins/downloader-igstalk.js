import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] ◥ ツأدخل اسم مستخدم مستخدم إنستغرام ، على سبيل المثالツ ◤: ${usedPrefix + command} dolipran_009*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`
${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* ★彡𝚏𝚘𝚕𝚕𝚘𝚠𝚎𝚛𝚜彡★™
*${followingH}* ★彡𝚏𝚘𝚕𝚕𝚘𝚠𝚒𝚗𝚐彡★™
*${postsH}* ★彡𝙿𝙾𝚂𝚃𝚂彡★™
*𝙱𝙸𝙾:* ${description}
`.trim())
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
export default handler
