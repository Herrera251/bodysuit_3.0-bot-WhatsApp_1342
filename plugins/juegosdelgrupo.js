import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './src/Me.jpg'
let img = await(await fetch('https://i.imgur.com/PtpmTEU.jpeg')).buffer()
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
āćšÖ¼ į¹ššÆššššš!sā¹ā·ā»ā¹š¹āįµįµįµā»į“¹į“°ć
āā ą¹Ū£ŪĶ”ĶŪššØš„šą¦ą§£Ķ”Ķį·Ö³į· ${taguser}šāØ
āā š šµš“š²š·š°: ${week}, ${date}
āā šššøš“š¼šæš¾ š°š²ššøšš¾: ${uptime}
āā š šššš°ššøš¾š: ${rtotalreg}
āāāāā×ā×ā×ā×āāā
āāāćš®ššššćā
āāš”${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
āāšŖ${usedPrefix}ppt <papel / tijera /piedra
āāš¾${usedPrefix}prostituto <nombre / @tag
āāā³${usedPrefix}prostituta <nombre / @tag
āāš„${usedPrefix}gay2 <nombre / @tag
āāšŖ${usedPrefix}lesbiana <nombre / @tag
āāš«${usedPrefix}pajero <nombre / @tag
āāš¹ļø${usedPrefix}pajera <nombre / @tag
āāš§©${usedPrefix}puto <nombre / @tag
āāš®${usedPrefix}puta <nombre / @tag
āāšŖ${usedPrefix}manco <nombre / @tag
āāšŖ${usedPrefix}manca <nombre / @tag
āāš±${usedPrefix}rata <nombre / @tag
āāšÆ${usedPrefix}love <nombre / @tag
āāš¹${usedPrefix}doxear <nombre / @tag
āāš„${usedPrefix}pregunta <texto
āāš¹${usedPrefix}slot <apuesta
āāš³${usedPrefix}simi <texto
āāāļø${usedPrefix}topgays
āāš${usedPrefix}topotakus
āāš²${usedPrefix}formarpareja
āāšŖ${usedPrefix}verdad
āāš¾${usedPrefix}reto
āāāāā×ā×ā×ā×āāā
`.trim()
let buttons = [
{ buttonId: '/menu', buttonText: { displayText: 'šššššš' }, type: 1 },
{ buttonId: '/estado', buttonText: { displayText: 'šššššššš±' }, type: 1 }]
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
title: 'šššš-ššššš-ššš-ššāØ',
body: null,
thumbnail: img,
sourceUrl: `https://youtu.be/HoxZuQokeMM`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[āššššā] š“š» š¼š“š½š ššøš“š½š“ šš½ š“ššš¾š š š½š¾ šµšš“ šæš¾ššøš±š»š“ š“š½ššøš°šš»š¾, šš“šæš¾ššš“š»š¾ š°š» šæšš¾šæšøš“šš°ššøš¾ š³š“š» š±š¾š*', m)
}}
handler.command = /^(juegosdelgrupo|juegosdelgrupo\?)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}





