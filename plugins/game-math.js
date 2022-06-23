global.math = global.math ? global.math : {}
let handler  = async (m, { conn, args, usedPrefix, command }) => {
let mat =`
*[❗𝐈𝐍𝐅𝐎❗] ★彡اضغط على المستويات التي تريد أن تلعبها彡★™*

*★彡المستويات المتوفرة彡★™: ${Object.keys(modes).join(' | ')}*
*★彡مثال على الاستخدام彡★™: ${usedPrefix}mates medium*
`.trim()
if (args.length < 1) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['◥ ツرياضيات سهلةツ ◤', `${usedPrefix + command} easy`], 
['★彡الرياضيات المتوسطة彡★™', `${usedPrefix + command} medium`], 
['のالرياضيات الصعبةの', `${usedPrefix + command} hard`]], m)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['◥ ツرياضيات سهلةツ ◤', `${usedPrefix + command} easy`], 
['★彡الرياضيات المتوسطة彡★™', `${usedPrefix + command} medium`], 
['のالرياضيات الصعبةの', `${usedPrefix + command} hard`]], m)
let id = m.chat
if (id in global.math) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] ༊෴✿لا تزال هناك أسئلة لم تتم الإجابة عليها في هذه الدردشة!✿〄࿐*', global.math[id][0])
let math = genMath(mode)
global.math[id] = [
await conn.reply(m.chat, `★彡كم هي نتيجة彡★™ *${math.str}*?\n\n*⏳ のالوقتの: ${(math.time / 1000).toFixed(2)} 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜*\n*🏆 ★彡تكسب ما يصل الى彡★™: ${math.bonus} 𝚇𝙿*`, m),
math, 4,
setTimeout(() => { 
if (global.math[id]) conn.sendButton(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] のانتهى وقت الردの*\n\n*★彡الجواب هو彡★™ ${math.result}*`, author, null, [['◥ ツحاول مرة أخرىツ ◤', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
delete global.math[id]
}, math.time)
]}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math|mates|matemáticas/i
export default handler

let modes = {
noob: [-3, 3,-3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 5000]
} 

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
