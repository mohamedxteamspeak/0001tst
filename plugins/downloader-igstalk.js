import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[โ๐๐๐๐โ] โฅ ใุฃุฏุฎู ุงุณู ูุณุชุฎุฏู ูุณุชุฎุฏู ุฅูุณุชุบุฑุงู ุ ุนูู ุณุจูู ุงููุซุงูใ โค: ${usedPrefix + command} dolipran_009*`
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
*${followersH}* โๅฝก๐๐๐๐๐๐ ๐๐๐ๅฝกโโข
*${followingH}* โๅฝก๐๐๐๐๐๐ ๐๐๐ๅฝกโโข
*${postsH}* โๅฝก๐ฟ๐พ๐๐๐ๅฝกโโข
*๐ฑ๐ธ๐พ:* ${description}
`.trim())
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
export default handler
