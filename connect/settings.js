process.on('uncaughtException', console.error) //Safe Log Error 
const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.owner = ['6281233649676','6285842647866','6285895086040','62895611406599']
global.tesel = ['62895611406599']
global.ownerName = '𝓙𝓪𝓬𝓴'
global.namaBot =  '𝓙𝓪𝓬𝓴 𝓑𝓸𝓽'
global.packname = '𝓙𝓪𝓬𝓴 𝓑𝓸𝓽' 
global.author = 'Whatsapp'
global.prefa = ['','!','.','#','!']
global.lannn = 'https://api.lannn.me'
global.lannkey = 'Kuontolll'
global.sessionName = 'session'
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.doc7 = 'image/jpeg'
global.doc8 = 'audio/mpeg'
global.doc9 = 'video/mp4'
global.mylogo = ["https://telegra.ph/file/75a3b01da9934ead5890e.jpg","https://telegra.ph/file/38e0c6fcaa71551ed6407.jpg","https://telegra.ph/file/551ccaa299c0b37e80b59.jpg","https://telegra.ph/file/4feacc10e29b71072bc91.jpg","https://telegra.ph/file/05e2ab0424961897838e0.jpg","https://telegra.ph/file/8d25c175697d2dc40107a.jpg","https://telegra.ph/file/a0eab20252073b35a332f.jpg"]
global.aikey = ["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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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","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"]
//Message Nya Ubah Disini
global.mess = {
admin: '*ᴏɴʟʏ ᴀᴅᴍɪɴ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
botAdmin: '\`\`\`Fitur ini hanya bisa di gunakan ketika bot menjadi admin!\`\`\`',
botOwner: '*ᴏɴʟʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ',
group: '\`\`\`Perintah ini hanya bisa di gunakan dalam group!\`\`\`', 
private: '\`\`\`Only Private Chat\`\`\`',
endLimit: '\`\`\`Limit Harian Sudah Habis, Limit Akan Direset Besok\`\`\`',
wait: '\`\`\`[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar\`\`\`',
link: '\`\`\`[❗] Link yang anda kirim tidak valid!\`\`\`', 
link1: '\`\`\`Link Yang Anda Gunakan Eror\`\`\`',
nsfw: '\`\`\`Nsfw Belum Diaktifkan Di Group ini\`\`\`',
regis: '\`\`\`Silakan Daftar terlebih dahulu dengan ketik #verifikasi nama.umur\`\`\`\n\`\`\`Contoh : #verifikasi Night.19\`\`\`',
done: '\`\`\`Done!\`\`\`',
}


//Sesuaikan
global.thumb = { url : 'https://telegra.ph/file/de6d085e41436bf460be3.jpg'}
global.thumb1 = 'https://telegra.ph/file/b86bec7b5889031848108.jpg'
global.thumb2 = { url: 'https://telegra.ph/file/cfa44511b60419ea31cb0.jpg'}
global.thumb3 = { url: 'https://telegra.ph/file/1bf2ddb39df8796edbb79.jpg'}
global.erorurl =  'https://telegra.ph/file/df5397e6ed9ebcd05c0cb.jpg'

    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
