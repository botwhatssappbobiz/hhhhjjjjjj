require('../setting2.js')
require('../listmenu.js')
const config = require("../settings.js");
const Func = require("../lib/function.js");
const serialize = require("../lib/serialize.js");
const Uploader = require("../lib/uploader.js");
const pkg = require("baileys");
const fs = require('node:fs')
const moment = require("moment-timezone");
const cron = require("node-cron");
const mute = JSON.parse(fs.readFileSync('./database/mute.json'));

module.exports = async (m, sock, store) => {
        require("../lib/logger.js")(m);
        if (m.key.jid === "status@broadcast") {
            await sock.sendMessage(
                m.key.jid,
                { react: { text: "📸", key: m.key } },
                { statusJidList: Object.keys(store.contact) }
            );
            console.log(chalk.green.bold("– Membaca Status WhatsApp dari : " + m.pushName));
            return; 
        }
        await db.main(m);
        const isMute= mute.includes(m.cht) ? true : false
        
        if (m.isBot) return;     
        if (db.list().settings.self && !m.isOwner) return;
        
        
      if (m.isGroup && db.list().group[m.cht].mute) {
		if (!m.isAdmin && !m.isOwner) return
      }

		if (m.isGroup) {
			// Mute
			if (db.list().group[m.cht].mute && !m.isOwner && !m.isAdmin) {
				return
		    }
	    }
			
        if (Object.keys(store.groupMetadata).length === 0) {
            store.groupMetadata = await sock.groupFetchAllParticipating();
        }
        const isPrems = db.list().user[m.sender].premium.status
        const isBanned = db.list().user[m.sender].banned.status
        const isAdmin = m.isAdmin
        const botAdmin = m.isBotAdmin
       cron.schedule('* * * * *', () => {
         let user = Object.keys(db.list().user);
         let time = moment.tz(config.tz).format("HH:mm");
         if (db.list().settings.resetlimit == time) {
         for (let i of user) {
              db.list().user[i].limit = 100
             }
          }
        })         
        for (let name in pg.plugins) {
           const plugin = pg.plugins[name];
           if (!plugin) return;
           if (typeof plugin.events === "function") {
           if (plugin.events.call(sock, m, {
                sock,
                Func,
                config,
                Uploader,
                store,
                isAdmin,
                botAdmin,
                isPrems,
                isBanned
             })) continue;
           }
            const Scraper = await scraper.list();
            const cmd = m.command.toLowerCase() === plugin.command || plugin?.alias?.includes(m.command.toLowerCase());
          try {
            if (cmd) {
                let text = m.text;
                if (plugin.settings) {
                    if (plugin.settings.owner && !m.isOwner) {
                        return m.reply(config.messages.owner);
                    }
                    if (plugin.settings.group && !m.isGroup) {
                        return m.reply(config.messages.group);
                    }
                    if (plugin.settings.admin && !isAdmin) {
                        return m.reply(config.messages.admin);
                    }
                    if (plugin.settings.botAdmin && !botAdmin) {
                        return m.reply(config.messages.botAdmin);
                    }    
                }
                await plugin.run(m, {
                    sock,
                    config,
                    text,
                    plugins: Object.values(pg.plugins).filter((a) => a.alias),
                    Func,
                    Scraper,
                    Uploader,
                    store,
                    isAdmin,
                    botAdmin,
                    isPrems,
                    isBanned
                }).then(async(a) => {
             if (plugin?.settings?.limit) {
                 db.list().user[m.sender].limit -= 1
                 m.reply(`*( ${botname} ) :* Kamu telah menggunakan fitur limit\n *( Limit Anda ) :* ${db.list().user[m.sender].limit} tersisa ☘️\n*( Note ) :* Limit akan direset pada pukul 02:00 WIB`);
                }             
             });
           if (plugin?.settings?.registered) {
             db.list().user[m.sender].register = false
             let deku = `*⏤͟͟͞͞╳ [ Akses - Register ]*\n`
             deku += `> ⏤͟͟͞͞╳ ᴍᴀᴀғ ᴀɴᴅᴀ ʙᴇʟᴜᴍ ᴍᴇɴᴅᴀғᴛᴀʀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴜʟᴜ ʏᴀʜ ᴋᴇᴋ ɢɪɴɪ ᴄᴏɴᴛᴏʜ ɴʏᴀ ʏᴀ\n`
             deku += `> *⏤͟͟͞͞╳ .ᴅᴀғᴛᴀʀ ᴅᴇᴋᴜ.15*\n`
             deku += `*⏤͟͟͞͞╳`
             m.reply(deku)
           }
           if (plugin.loading) m.react("🕐");
        }
    } catch (error) {
        if (error.name) {
          m.reply(Func.jsonFormat(error));
        } else {
         m.reply(Func.jsonFormat(error));
        }
    } finally {
       if (db.list().settings.online) {
         await sock.readMessages([m.key]);
       }
    }
  }
};