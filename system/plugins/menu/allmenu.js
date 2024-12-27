const moment = require("moment-timezone");
const axios = require('axios');
const fs = require("node:fs");
const path = require("node:path");
const process = require('process')
const { exec, spawn, execSync } = require('child_process');
const child_process = require('child_process')
const os = require('os')
const speed = require('performance-now')
const osu = require('node-os-utils')
const pkg = require(process.cwd() + "/package.json");

module.exports = {
    command: "allmenu",
    alias: ["menuall"],
    category: ["menu"],
    description: "Menampilkan allmenu bot",
    loading: true,
    async run(m, { sock, plugins, config, Func }) {

  const more = String.fromCharCode(8206);
  const readmore = more.repeat(4001);

let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(db.list().user).length

        let data = fs.readFileSync(process.cwd() + "/system/case.js", "utf8");
        let casePattern = /case\s+"([^"]+)"/g;
        let matches = data.match(casePattern);
        if (!matches) return m.reply("Tidak ada case yang ditemukan.");
        matches = matches.map(match => match.replace(/case\s+"([^"]+)"/, "$1"));

        let menu = {};
        plugins.forEach(item => {
            if (item.category && item.command) {
                item.category.forEach(cat => {
                    if (!menu[cat]) {
                        menu[cat] = { command: [] };
                    }
                    menu[cat].command.push({
                        name: item.command,
                        alias: item.alias
                    });
                });
            }
        });

        let cmd = 0, alias = 0;
        let pp = await sock.profilePictureUrl(m.sender, 'image').catch(e => 'https://files.catbox.moe/8getyg.jpg');

        Object.values(menu).forEach(category => {
            cmd += category.command.length;
            category.command.forEach(command => alias += command.alias.length);
        });

        let caption = `ʜɪ ${m.pushName} , ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ sʏsᴛᴇᴍ ( ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ )${readmore}. ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ sᴏᴍᴇᴛʜɪɴɢ sᴇᴀʀᴄʜ ᴀɴᴅ get ᴅᴀᴛᴀ ᴏʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ ᴡʜᴀᴛsᴀᴘᴘ, 

⏤͟͟͞͞╳── *[ ɪɴғᴏ - ᴜsᴇʀ ]* ── .々─ᯤ
│    =〆 ɴᴀᴍᴇ: ${m.pushName}
│    =〆 ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
│    =〆 ʟɪᴍɪᴛ: ${db.list().user[m.sender].limit}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ ʙᴏᴛ - ɪɴғᴏ ]* ── .々─ᯤ
│    =〆 ʀᴜɴᴛɪᴍᴇ: ${runtime}
│    =〆 ᴛʏᴘᴇ: ᴄᴀsᴇ x ᴘʟᴜɢɪɴ
│    =〆 ᴜsᴇʀ: ${totalreg}
│    =〆 ᴍᴏᴅᴇ: ${sock.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
│    =〆 ᴘʀᴇғɪx: ${m.prefix}
│    =〆 ᴅᴀᴛᴇ: ${date}
⏤͟͟͞͞╳────────── .✦
│
⏤͟͟͞͞╳── *[ Menu Tambahan ]* ── .々─ᯤ
${matches.map((a, i) => ` ${i + 1}. *${m.prefix + a}*`).join("\n")}`;

        Object.entries(menu).forEach(([tag, commands]) => {
            caption += `\n\n⏤͟͟͞͞╳── *[ Menu - ${tag.toUpperCase()} ]* ── .々─ᯤ`;
            commands.command.forEach((command, index) => {
                caption += `\n│    =〆 ${command.name}`;
            });
            caption += `\n⏤͟͟͞͞╳────────── .✦`;
        });

m.reply({
  video: { url: "https://files.catbox.moe/s2t0ql.mp4" },
  caption: caption,
  gifPlayback: true,
 contextInfo: {
   mentionedJid: [m.sender],
   isForwarded: !0,
   forwardingScore: 127,
   forwardedNewsletterMessageInfo: {
   newsletterJid: saluran,
   newsletterName: `${botname} | ` + date,
   serverMessageId: -1
  },
   externalAdReply: {
   title: `々 ${ownername2} | ${botname}`,
   body: `${ownername2} | ` + date,
   mediaType: 1,
   thumbnail: fs.readFileSync('./image/ftdoc.jpg'),
   sourceUrl: "https://www.tiktok.com/@leooxzy_ganz/",
    }
  }
})

}
}