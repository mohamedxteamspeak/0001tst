import fetch from 'node-fetch'
import { sizeFormatter } from 'human-readable'
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B` })
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡خطأ ، يرجى المحاولة مرة أخرى彡★™*\n\n*- のتحقق من أن الرابط مشابه لـの:*\n*◉ https://drive.google.com/file/d/1ElguPNt6ix5z01q2d9zQQE_5s_LD9z_X/view*' 
try {
GDriveDl(args[0]).then(async (res) => {
conn.reply(m.chat, 'のيتم الأن تحميل الملف الخاص بك ، يرجى الانتظار لحظةの\n\n★彡قد يختلف وقت الانتظار حسب حجم الملف ، إذا تجاوز حجمه 100 ميغا بايت ، فقد لا يتم إرسال الملف彡★™', m)
if (!res) throw res
conn.sendFile(m.chat, res.downloadUrl, res.fileName, '', m, null, { mimetype: res.mimetype, asDocument: true })})
}catch(e){
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ★彡خطأ ، يرجى المحاولة مرة أخرى彡★™*\n\n*- のتحقق من أن الرابط مشابه لـの:*\n*◉ https://drive.google.com/file/d/1ElguPNt6ix5z01q2d9zQQE_5s_LD9z_X/view*')
console.log(e)}}
handler.command = /^(gdrive)$/i
export default handler
async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) throw 'ID Not Found'
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'  }})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) throw 'Link Download Limit!'
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type')}}