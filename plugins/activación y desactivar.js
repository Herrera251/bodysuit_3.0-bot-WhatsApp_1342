import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/lkch77g.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
βγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· ${taguser}πβ¨ 
ββ π π΅π΄π²π·π°: ${week}, ${date}
ββ πππΈπ΄πΌπΏπΎ π°π²ππΈππΎ: ${uptime}
ββ π ππππ°ππΈπΎπ: ${rtotalreg}
βββββΧβΧβΧβΧβββ
βγππππππππ π ππππππ γ
ββπ${usedPrefix}enable welcome
ββπ΄${usedPrefix}disable welcome
βββ οΈ${usedPrefix}enable modohorny
βββ${usedPrefix}disable modohorny
ββπ§${usedPrefix}enable antilink
ββπ${usedPrefix}disable antilink
ββπ΄${usedPrefix}enable antilink2
βββ οΈ${usedPrefix}disable antilink2
βββ${usedPrefix}enable detect
ββπ§${usedPrefix}disable detect
ββπ${usedPrefix}enable audios
ββπ΄${usedPrefix}disable audios
βββ οΈ${usedPrefix}enable autosticker
βββ${usedPrefix}disable autosticker
ββπ§${usedPrefix}enable public
ββπ${usedPrefix}disable public
ββπ΄${usedPrefix}enable restrict
βββ οΈ${usedPrefix}disable restrict
βββ${usedPrefix}enable pconly
ββπ§${usedPrefix}disable pconly
ββπ${usedPrefix}enable gconly
ββπ΄${usedPrefix}disable gconly
βββ οΈ${usedPrefix}enable autoread
βββ${usedPrefix}disable autoread
ββπ§${usedPrefix}enable antiprivado
ββπ${usedPrefix}disable antiprivado
ββπ΄${usedPrefix}enable tΓ³xicos
βββ οΈ${usedPrefix}disable tΓ³xicos
βββ${usedPrefix}enable antivirus 
ββπ§${usedPrefix}disable antivirus
βββββΧβΧβΧβΧβββ
`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: 'ππππππ' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: 'ππππππππ±' }, type: 1 }]
let buttonMessage = {
image: imagen3 ,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'ππππ-πππππ-πππ-ππβ¨',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π ππΈπ΄π½π΄ ππ½ π΄πππΎπ π π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½ππΈπ°ππ»πΎ, ππ΄πΏπΎπππ΄π»πΎ π°π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ*', m)
}}
handler.command = /^(comandosfei|comandosfei\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
