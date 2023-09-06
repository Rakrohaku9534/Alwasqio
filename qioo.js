/*
INI SC FREE BUKAN DI JUAL
KALAU MAU SC FREE BISA CEK DI YT
@ALWAYSAQIOO TZY
JANGAN LUPA SUBREK
RENAME ATAU REUPLOAD?
TAG GW*/


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/FSbrP6LWWm4A8i8uGdyDTs'
global.ig = '@fahrul_mt' // ubah aja
global.email = 'rakrohaku@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Fahrul' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['18155545188'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'F.A BOTZ MD' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'F.A BOTZ MD' // ubah aja ini nama sticker
global.author = '© fahrul' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'qio' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
