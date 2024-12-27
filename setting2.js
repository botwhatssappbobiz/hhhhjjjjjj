const fs = require('fs');
const chalk = require('chalk');

//new
global.botname = 'ʏᴜᴛᴀ-ᴏᴋᴋᴏᴛsᴜ' //ur bot name
global.ownernumber = ['62895393325895'] //ur owner number, dont add more than one
global.ownername = 'ʟᴇᴏᴏxᴢʏ' //ur owner name
global.ownername2 = 'ᴅᴇᴋᴜ' //ur owner name
global.websitex = ""
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.saluran = "120363279195205552@newsletter"
global.jidgroupnotif = '120363266755712733@g.us'
global.saluran2 = "120363335701540699@newsletter"
global.jidgroup = '120363267102694949@g.us'
global.jidch = '120363279195205552@newsletter'
global.tiktokname = '@leooxxzy' //name tiktok owner
global.tiktokname2 = '@celzyundefined' //name tiktok2 owner
global.tiktokname3 = '@leooganz._' //name tiktok3 owner
global.linkch = "https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W"
global.linkgc = "https://chat.whatsapp.com/JyeT1hdCPJeLy95tzx5eyI"
global.linksosmed = "https://www.tiktok.com/@leooxxzy"
global.version = ""

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});