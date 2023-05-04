const chalk = require('chalk')
const fs = require('fs')
const os = require('os')
const moment = require('moment-timezone')
const hour_now = moment().format('hh:mm:ss')
let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
let users = db.data.users[m.sender]
srl = '乂'
ctc = '❒'
text = '*Text*'
link = '*Links*'
query = '*Query*'
npo = '*Number*'
mv = '*Image/Video*'
im = '*Image*'
sd = '*Sound*'
vd ='*Video*'
emo = '*Emoji*'
gre = '```'
exports.allmenu = (prefix, pushname, namaBot, ownerName, runtime, formatp, tipes, latensiu, motiva) => {
return `${srl}  *Menu ${namaBot}* ${srl}

✗ Name : ${db.data.users[m.sender].name}
✗ Umur : ${db.data.users[m.sender].age}
✗ Registered : ${db.data.users[m.sender].registered ? '✅' : '❎'}
✗ Database : ${Object.values(global.db.data.users).filter(user => user.registered == true).length} dari ${Object.keys(global.db.data.users).length}
✗ Nomor : ${m.sender.split("@")[0]}
✗ Pushname : ${pushname}
✗ Masehi : ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY')}
✗📆 Islamic : ${Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
    day: 'numeric', month: 'long', year: 'numeric'
    }).format(new Date(new Date + 3600000))}
✗ Server Time :
${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss')} WIB
${moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss')} WITA
${moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss')} WIT
✗ OS Uptime : ${runtime(os.uptime())}
✗ Runtime : ${runtime(process.uptime())}
✗ Ram Used : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())} 
✗ Ping : ${latensiu.toFixed(4)} _*Ms*_
✗ Arch : ${process.arch}
✗ Platform : ${process.platform}
✗ Free Rest API : https://api.lannn.me/

${ctc}  ${gre}Mohon maaf, apabila terdapat masalah atau tidak mendapatkan respon dari BOT ini, \nkami memohon bantuan Anda untuk melaporkannya kepada owner dengan cara menggunakan format \n• #report teks. \nContoh\`\`\`nya, #report fitur anime naruto tidak muncul background. Terima kasih.${gre}

"${motiva}" 🍃

${srl} *OTHERS MENU* ${srl}
${ctc} ${prefix}ocr *<Balas Imagenya>*/${im}
${ctc} ${prefix}jadianime *Balas* ${im}
${ctc} ${prefix}report
${ctc} ${prefix}true 62812xxxx
${ctc} ${prefix}qr ${query}
${ctc} ${prefix}ssweb ${link}
${ctc} ${prefix}qc ${query}
${ctc} ${prefix}gempa
${ctc} ${prefix}gsmarena ${query}
${ctc} ${prefix}ai ${text}
${ctc} ${prefix}openai ${text}
${ctc} ${prefix}serimg ${query}
${ctc} ${prefix}verifikasi
${ctc} ${prefix}ceksn
${ctc} ${prefix}donasi
${ctc} ${prefix}readme
${ctc} ${prefix}snk
${ctc} ${prefix}owner
${ctc} ${prefix}listchannel
${ctc} ${prefix}listonline
${ctc} ${prefix}litsprivate
${ctc} ${prefix}litsgroup
${ctc} ${prefix}listblock
${ctc} ${prefix}unreg ${text}
${ctc} ${prefix}afk ${text}
${ctc} ${prefix}simi ${text}
${ctc} ${prefix}tts <bahasa> ${text}

${srl} *ISLAMIC MENU* ${srl}
${ctc} ${prefix}subuh
${ctc} ${prefix}dzuhur
${ctc} ${prefix}ashar
${ctc} ${prefix}maghrib
${ctc} ${prefix}isya
${ctc} ${prefix}al-fatihah
${ctc} ${prefix}iftitah
${ctc} ${prefix}ruku
${ctc} ${prefix}salam
${ctc} ${prefix}sujud
${ctc} ${prefix}tasyahudakhir
${ctc} ${prefix}tasyahudawal
${ctc} ${prefix}diantara2sujud
${ctc} ${prefix}kisahnabi
${ctc} ${prefix}doapendek
${ctc} ${prefix}asmaulhusna
${ctc} ${prefix}ayatkursi
${ctc} ${prefix}murothal ${query}
${ctc} ${prefix}jadwalsholat ${query}

${srl} *ANIME MENU* ${srl}
${ctc} ${prefix}akira
${ctc} ${prefix}akiyama
${ctc} ${prefix}ana
${ctc} ${prefix}asuna
${ctc} ${prefix}ayuzawa
${ctc} ${prefix}boruto
${ctc} ${prefix}chitanda
${ctc} ${prefix}chitoge
${ctc} ${prefix}cosplay
${ctc} ${prefix}deidara
${ctc} ${prefix}doraemon
${ctc} ${prefix}elaina
${ctc} ${prefix}emilia
${ctc} ${prefix}erza
${ctc} ${prefix}fanart
${ctc} ${prefix}genshin
${ctc} ${prefix}gremory
${ctc} ${prefix}hestia
${ctc} ${prefix}hinata
${ctc} ${prefix}husbu
${ctc} ${prefix}icon
${ctc} ${prefix}isuzu
${ctc} ${prefix}itachi
${ctc} ${prefix}itori
${ctc} ${prefix}kaga
${ctc} ${prefix}kagura
${ctc} ${prefix}kaguya
${ctc} ${prefix}kakashi
${ctc} ${prefix}kaori
${ctc} ${prefix}kaneki
${ctc} ${prefix}keneki
${ctc} ${prefix}kosaki
${ctc} ${prefix}kotori
${ctc} ${prefix}kuriyama
${ctc} ${prefix}kuroha
${ctc} ${prefix}kurumi
${ctc} ${prefix}loli
${ctc} ${prefix}madara
${ctc} ${prefix}megumin
${ctc} ${prefix}menus
${ctc} ${prefix}mikasa
${ctc} ${prefix}miku
${ctc} ${prefix}minato
${ctc} ${prefix}natsukawa
${ctc} ${prefix}neko
${ctc} ${prefix}nekonime
${ctc} ${prefix}nezuko
${ctc} ${prefix}nishimiya
${ctc} ${prefix}onepiece
${ctc} ${prefix}pokemon
${ctc} ${prefix}rem
${ctc} ${prefix}rize
${ctc} ${prefix}sagiri
${ctc} ${prefix}sakura
${ctc} ${prefix}sasuke
${ctc} ${prefix}shina
${ctc} ${prefix}shinka
${ctc} ${prefix}shizuka
${ctc} ${prefix}shota
${ctc} ${prefix}simp
${ctc} ${prefix}tomori
${ctc} ${prefix}toukachan
${ctc} ${prefix}tsunade
${ctc} ${prefix}waifu
${ctc} ${prefix}waifu2
${ctc} ${prefix}yatogami
${ctc} ${prefix}yuki

${srl} *NSFW MENU* ${srl}
${ctc} ${prefix}ahegao
${ctc} ${prefix}ass
${ctc} ${prefix}bdsm
${ctc} ${prefix}blowjob
${ctc} ${prefix}cuckold
${ctc} ${prefix}cum
${ctc} ${prefix}eba
${ctc} ${prefix}ero
${ctc} ${prefix}fendom
${ctc} ${prefix}foot
${ctc} ${prefix}gangbang
${ctc} ${prefix}glasses
${ctc} ${prefix}hentai
${ctc} ${prefix}jahy
${ctc} ${prefix}manga
${ctc} ${prefix}masturbation
${ctc} ${prefix}megumin
${ctc} ${prefix}neko
${ctc} ${prefix}neko2
${ctc} ${prefix}nekonime
${ctc} ${prefix}nsfw
${ctc} ${prefix}nsfwloli
${ctc} ${prefix}nsfwmanga
${ctc} ${prefix}nsfwneko
${ctc} ${prefix}orgy
${ctc} ${prefix}panties
${ctc} ${prefix}pussy
${ctc} ${prefix}tentacles
${ctc} ${prefix}thighs
${ctc} ${prefix}yuri
${ctc} ${prefix}zettai

${srl} *CONVERT VN MENU* ${srl}
${ctc} ${prefix}bass ${sd}
${ctc} ${prefix}blown ${sd}
${ctc} ${prefix}deep ${sd}
${ctc} ${prefix}earrape ${sd}
${ctc} ${prefix}fast ${sd}
${ctc} ${prefix}fat ${sd}
${ctc} ${prefix}nightcore ${sd}
${ctc} ${prefix}reverse ${sd}
${ctc} ${prefix}robot ${sd}
${ctc} ${prefix}slow ${sd}
${ctc} ${prefix}smooth ${sd}
${ctc} ${prefix}tupai ${sd}

${srl} *CERPEN MENU* ${srl}
${ctc} ${prefix}cerpen-persahabatan
${ctc} ${prefix}cerpen-islami
${ctc} ${prefix}cerpen-Pengorbanan
${ctc} ${prefix}cerpen-cintasegitiga
${ctc} ${prefix}cerpen-galau
${ctc} ${prefix}cerpen-sejarah
${ctc} ${prefix}cerpen-sedih
${ctc} ${prefix}cerpen-sastra
${ctc} ${prefix}cerpen-romantis
${ctc} ${prefix}cerpen-rohani
${ctc} ${prefix}cerpen-rindu
${ctc} ${prefix}cerpen-remaja
${ctc} ${prefix}cerpen-ramadhan
${ctc} ${prefix}cerpen-petualangan
${ctc} ${prefix}cerpen-perpisahan
${ctc} ${prefix}cerpen-perjuangan
${ctc} ${prefix}cerpen-penyesalan
${ctc} ${prefix}cerpen-pengalaman
${ctc} ${prefix}cerpen-pendidikan
${ctc} ${prefix}cerpen-penantian
${ctc} ${prefix}cerpen-patahhati
${ctc} ${prefix}cerpen-olahraga
${ctc} ${prefix}cerpen-nasionalisme
${ctc} ${prefix}cerpen-nasihat
${ctc} ${prefix}cerpen-motivasi
${ctc} ${prefix}cerpen-misteri
${ctc} ${prefix}cerpen-mengharukan
${ctc} ${prefix}cerpen-malaysia
${ctc} ${prefix}cerpen-liburan
${ctc} ${prefix}cerpen-kristen
${ctc} ${prefix}cerpen-korea
${ctc} ${prefix}cerpen-kisahnyata
${ctc} ${prefix}cerpen-keluarga
${ctc} ${prefix}cerpen-kehidupan
${ctc} ${prefix}cerpen-jepang
${ctc} ${prefix}cerpen-inspiratif
${ctc} ${prefix}cerpen-gokil
${ctc} ${prefix}cerpen-galau
${ctc} ${prefix}cerpen-cintasejati
${ctc} ${prefix}cerpen-cintasedih
${ctc} ${prefix}cerpen-cintaromantis
${ctc} ${prefix}cerpen-cintapertama
${ctc} ${prefix}cerpen-cintaislami
${ctc} ${prefix}cerpen-cinta
${ctc} ${prefix}cerpen-budaya
${ctc} ${prefix}cerpen-bahasasunda
${ctc} ${prefix}cerpen-bahasajawa
${ctc} ${prefix}cerpen-bahasainggris
${ctc} ${prefix}cerpen-bahasadaerah
${ctc} ${prefix}cerpen-anak

${srl} *Converter To Link* ${srl}
${ctc} ${prefix}tinyurl ${link}
${ctc} ${prefix}tourl ${im} / ${vd}

${srl} *QUOTES MENU* ${srl}
${ctc} ${prefix}katabijak
${ctc} ${prefix}kataanime
${ctc} ${prefix}katailham
${ctc} ${prefix}faktaunik
${ctc} ${prefix}quotes
${ctc} ${prefix}pantun 

${srl} *GROUP SETTINGS* ${srl}
${ctc} ${prefix}antivionce
${ctc} ${prefix}antilink 
${ctc} ${prefix}ephemeral
${ctc} ${prefix}welcomegroup
${ctc} ${prefix}delete
${ctc} ${prefix}leave
${ctc} ${prefix}linkgc
${ctc} ${prefix}revoke
${ctc} ${prefix}kick 
${ctc} ${prefix}add
${ctc} ${prefix}promote
${ctc} ${prefix}demote
${ctc} ${prefix}setsubject
${ctc} ${prefix}setdesc
${ctc} ${prefix}setppgrup
${ctc} ${prefix}tagall
${ctc} ${prefix}hidetag
${ctc} ${prefix}getpic *Balas Quotednya*

${srl} *GAMES JADIAN* ${srl}
${ctc} ${prefix}tembakpasangan 
${ctc} ${prefix}terimapasangan
${ctc} ${prefix}cekpasangan
${ctc} ${prefix}putuspasangan
${ctc} ${prefix}tolakpasangan
${ctc} ${prefix}ikhlasinpasangan

${srl} *STALK* ${srl}
${ctc} ${prefix}igstalk ${query}
${ctc} ${prefix}githubstalk ${query}

${srl} *SEARCHING* ${srl}
${ctc} ${prefix}tr <kode-bahasa> ${query}/Balas Teksnya
${ctc} ${prefix}translate <kode-bahasa> ${query}/Balas Teksnya
${ctc} ${prefix}play ${query}
${ctc} ${prefix}brainly ${query}
${ctc} ${prefix}lirik ${query}
${ctc} ${prefix}cuaca ${query}
${ctc} ${prefix}ytsearch ${query}
${ctc} ${prefix}getvideo ( balas yts )
${ctc} ${prefix}getmusic ( balas yts )
${ctc} ${prefix}pinterest ${query}
${ctc} ${prefix}sfilesearch ${query}
${ctc} ${prefix}google ${query}
${ctc} ${prefix}kbbi ${query}
${ctc} ${prefix}wiki ${query}
${ctc} ${prefix}wikipedia ${query}
${ctc} ${prefix}npmjs ${query}
${ctc} ${prefix}gimage ${query}
${ctc} ${prefix}whatmusic ${sd} | ${vd} <berdurasi >20 detik>
${ctc} ${prefix}covid
${ctc} ${prefix}covidindo
${ctc} ${prefix}jarak *Query|Query*

${srl} *ASUPAN MENU* ${srl}
${ctc} ${prefix}anony
${ctc} ${prefix}asupan
${ctc} ${prefix}bocil
${ctc} ${prefix}cecan
${ctc} ${prefix}cecan2
${ctc} ${prefix}cecan3
${ctc} ${prefix}cogan
${ctc} ${prefix}china
${ctc} ${prefix}indonesia
${ctc} ${prefix}japan
${ctc} ${prefix}korea
${ctc} ${prefix}malaysia
${ctc} ${prefix}thailand
${ctc} ${prefix}vietnam
${ctc} ${prefix}euni
${ctc} ${prefix}gheayubi
${ctc} ${prefix}harley
${ctc} ${prefix}hijaber
${ctc} ${prefix}natajadeh
${ctc} ${prefix}rikagusriani
${ctc} ${prefix}santuy
${ctc} ${prefix}ukhty

${srl} *DOWNLOADS* ${srl}
${ctc} ${prefix}igmp4 ${link}
${ctc} ${prefix}igfoto ${link}
${ctc} ${prefix}ytmp3 ${link}
${ctc} ${prefix}ytmp4 ${link}
${ctc} ${prefix}yta ${link}
${ctc} ${prefix}ytv ${link}
${ctc} ${prefix}cocofun ${link}
${ctc} ${prefix}gitclone ${link}
${ctc} ${prefix}githubdl *<namagh> <namarepo> <namabranch>*
${ctc} ${prefix}tiktok ${link}
${ctc} ${prefix}tiktoknowm ${link}
${ctc} ${prefix}tiktokmusic ${link}
${ctc} ${prefix}mediafire ${link}
${ctc} ${prefix}sfilemobi ${link}
${ctc} ${prefix}gdrive ${link}
${ctc} ${prefix}twitter ${link}

${srl} *CONVERTER MEDIA* ${srl}
${ctc} ${prefix}sticker ${im}
${ctc} ${prefix}attp ${query}
${ctc} ${prefix}ttp ${query}
${ctc} ${prefix}toimg *Reply Sticker nya*
${ctc} ${prefix}tomp4 *Reply Sticker nya*
${ctc} ${prefix}smeme2 ${query}|${query}
${ctc} ${prefix}smeme ${query}
${ctc} ${prefix}stickergif ${vd}
${ctc} ${prefix}removebg ${im}
${ctc} ${prefix}stickerwm ${text}
${ctc} ${prefix}emojimix2 ${emo}
${ctc} ${prefix}emojimix ${emo} | ${emo}

${srl} *STICKER API* ${srl}
${ctc} ${prefix}mukalu
${ctc} ${prefix}animegif
${ctc} ${prefix}bucin
${ctc} ${prefix}manusialidi
${ctc} ${prefix}paimon
${ctc} ${prefix}patrickgif
${ctc} ${prefix}spongebob
${ctc} ${prefix}dinokuning
${ctc} ${prefix}among
${ctc} ${prefix}rabbit
${ctc} ${prefix}random
${ctc} ${prefix}patrick
${ctc} ${prefix}doge
${ctc} ${prefix}pentol
${ctc} ${prefix}gojo
${ctc} ${prefix}gura
${ctc} ${prefix}umaru

${srl} *RANDOM IMAGE* ${srl}
${ctc} ${prefix}cyberspace
${ctc} ${prefix}mountain
${ctc} ${prefix}teknologi
${ctc} ${prefix}programming
${ctc} ${prefix}aesthetic
${ctc} ${prefix}animerandom
${ctc} ${prefix}anjing
${ctc} ${prefix}boneka
${ctc} ${prefix}darkjokes
${ctc} ${prefix}hekel
${ctc} ${prefix}justina
${ctc} ${prefix}kpop
${ctc} ${prefix}kucing
${ctc} ${prefix}mobil
${ctc} ${prefix}motor
${ctc} ${prefix}rose
${ctc} ${prefix}ryujin
${ctc} ${prefix}wallhp

${srl} *PHOTOOXY* ${srl}
${ctc} ${prefix}pubg teks|teks
${ctc} ${prefix}bevel ${text}
${ctc} ${prefix}luxury ${text}
${ctc} ${prefix}flaming ${text}
${ctc} ${prefix}3d-summer ${text}
${ctc} ${prefix}shadow-sky ${text}
${ctc} ${prefix}wolf-metal ${text}
${ctc} ${prefix}metallic ${text}
${ctc} ${prefix}metallic2 ${text}
${ctc} ${prefix}burn-paper ${text}
${ctc} ${prefix}naruto ${text}
${ctc} ${prefix}smoke ${text}
${ctc} ${prefix}flower-typography ${text}
${ctc} ${prefix}hello-kitty ${text}
${ctc} ${prefix}coffe-cup ${text}
${ctc} ${prefix}butterfly ${text}
${ctc} ${prefix}night-sky ${text}
${ctc} ${prefix}carved-wood ${text}
${ctc} ${prefix}sweet-candy ${text}

${srl} *TEXT MAKER* ${srl}
${ctc} ${prefix}candy ${text}
${ctc} ${prefix}christmas ${text}
${ctc} ${prefix}3dchristmas ${text}
${ctc} ${prefix}sparklechristmas ${text}
${ctc} ${prefix}deepsea ${text}
${ctc} ${prefix}scifi ${text}
${ctc} ${prefix}rainbow2 ${text}
${ctc} ${prefix}waterpipe ${text}
${ctc} ${prefix}spooky ${text}
${ctc} ${prefix}pencil ${text}
${ctc} ${prefix}circuit ${text}
${ctc} ${prefix}discovery ${text}
${ctc} ${prefix}metalic ${text}
${ctc} ${prefix}fiction ${text}
${ctc} ${prefix}demon ${text}
${ctc} ${prefix}transformer ${text}
${ctc} ${prefix}berry ${text}
${ctc} ${prefix}thunder ${text}
${ctc} ${prefix}3dstone2 ${text}
${ctc} ${prefix}neonlight ${text}
${ctc} ${prefix}glitch ${text}
${ctc} ${prefix}harrypotter ${text}
${ctc} ${prefix}brokenglass ${text}
${ctc} ${prefix}papercut ${text}
${ctc} ${prefix}watercolor ${text}
${ctc} ${prefix}multicolor ${text}
${ctc} ${prefix}neondevil ${text}
${ctc} ${prefix}underwater ${text}
${ctc} ${prefix}graffitibike ${text}
${ctc} ${prefix}snow ${text}
${ctc} ${prefix}cloud ${text}
${ctc} ${prefix}honey ${text}
${ctc} ${prefix}ice ${text}
${ctc} ${prefix}fruitjuice ${text}
${ctc} ${prefix}biscuit ${text}
${ctc} ${prefix}wood ${text}
${ctc} ${prefix}chocolate ${text}
${ctc} ${prefix}strawberry ${text}
${ctc} ${prefix}matrix ${text}
${ctc} ${prefix}blood ${text}
${ctc} ${prefix}dropwater ${text}
${ctc} ${prefix}toxic ${text}
${ctc} ${prefix}lava ${text}
${ctc} ${prefix}rock ${text}
${ctc} ${prefix}bloodglas ${text}
${ctc} ${prefix}halloween ${text}
${ctc} ${prefix}darkgold ${text}
${ctc} ${prefix}joker ${text}
${ctc} ${prefix}wicker ${text}
${ctc} ${prefix}firework ${text}
${ctc} ${prefix}skeleton ${text}
${ctc} ${prefix}blackpink ${text}
${ctc} ${prefix}sand ${text}
${ctc} ${prefix}glue ${text}
${ctc} ${prefix}1917 ${text}
${ctc} ${prefix}leaves ${text}
${ctc} ${prefix}demon ${text}`
}
exports.bahasa = (prefix) => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh `
}
exports.channel= (prefix) => {
return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.snk= (prefix) => {
return ` ➠ Batas usia pengguna (user) minimal 5 - 70 tahun, lebih atau kurang dari itu tidak memperbolehkan melakukan verifikasi.

➠ Data pengguna (user), grup, dan chat akan terhapus otomatis apabila tidak terdeteksi aktifitas selama 7 hari (alasan: pembersihan database).

➠ Dilarang melakukan spam, beri jeda untuk setiap penggunaan command selama 3 detik.

➠ Dilarang melakukan panggilan suara maupun video (Telepon & Video Call), jika itu dilakukan maka akan ter-blokir.

➠ Dilarang toxic terhadap bot karena akan medapatkan sanksi berupa banned dan blokir.

➠ Dilarang mencari & membuat konten dewasa (+18), misalnya membuat stiker dari foto telanjang atau mencari ASMR desah.

➠ Jika ingin membuka blokir dan banned masing² dikenai biaya sebesar 5K.

➠ Pelaku spam akan di banned permanen berlaku untuk user gratis dan premium (+ no refund).

➠ Semua Syarat & Ketentuan dapat berubah sewaktu waktu tanpa pemberitahuan terlebih dahulu.`
}
exports.readme= (prefix) => {
return ` *「 STALK 」*

*[@username]* \`\`\`Diisi Dengan Username Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}tiktokstalk @tobz2k19*

*[@username]* \`\`\`Diisi Dengan Username Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}igstalk @tobz2k19*

*[@username]* \`\`\`Diisi Dengan Username Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[Video]* \`\`\`Diisi dengan Judul Video Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}video Erpan1140*
Jika Ingin Mendownload Video Harap Ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[Lagu]* \`\`\`Diisi Dengan Judul Lagu Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}music Alan Walker Alone*
Jika Ingin Mendownload Lagu Harap Ketik #getmusic [IdDownload] Atau #getmusic [urutan]

*[IdDownload] atau [Urutan]* \`\`\`Diisi Dengan IdDownload Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *Jika Tidak Reply Pesan : ${prefix}getmusic Iv32bS1*
Contoh\`\`\` : *Jika Reply Pesan : ${prefix}getmusic 1*
Contoh\`\`\` : *Jika Tidak Reply Pesan : ${prefix}getvideo Iv32bS1*
Contoh\`\`\` : *Jika Reply Pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[LinkStarmaker]* \`\`\`Diisi dengan link Starmaker Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* \`\`\`Diisi dengan link YouTube Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkYt]* \`\`\`Diisi Dengan Link YouTube Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* \`\`\`Diisi Dengan Link YouTube Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[LinkTiktok]* \`\`\`Diisi Dengan Link Tiktok Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[LinkSmule]* \`\`\`Diisi Dengan Link Smule Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[LinkIg]* \`\`\`Diisi Dengan Link Instagram Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[LinkFb]* \`\`\`Diisi Dengan Link Facebook Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[LinkTiktok]* \`\`\`Diisi Dengan Link Tiktok Yang Valid Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[Daerah]* \`\`\`Diisi Dengan Daerah Yang Valid, Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}jadwalShalat Tangerang*

*[Channel]* \`\`\`Diisi Dengan Channel Yelevisi Yang Valid, Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}jadwalTv Indosiar*

*[Query]* \`\`\`Diisi Dengan Query/Pencarian Yang Valid, Tanpa Tanda “[” dan “]“
Contoh\`\`\` : *${prefix}googlesearch siapa itu elaina*

*[Tempat]* \`\`\`Diisi Dengan Tempat/Lokasi Yang Valid, Tanpa Tanda “[” dan “]“
Contoh\`\`\` : *${prefix}cuaca tangerang*

*[|Teks|Author|Theme]* \`\`\`Diisi Dengan Teks, Author, Dan Theme, Tanpa Tanda “[” dan “]”
Contoh\`\`\` : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[Optional]* \`\`\`Diisi Dengan Teks|Title Lirik Lagu, Tanpa Tanda “[” dan “]”.
Contoh\`\`\`: *${prefix}lirik aku bukan boneka*`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.red(`Update ${__filename}`))
delete require.cache[file]
require(file)
})