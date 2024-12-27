module.exports = {
  command: "pushch2",
  alias: ["psch2"],
  category: ["tools"],
  settings: {
    limit: true,
  },
  description: "PushCh",
  loading: true,
  async run(m, { text, sock, Scraper, Func }) {
    let q = m.quoted ? m.quoted : m;
let pp = await sock.profilePictureUrl(m.sender, 'image')

if (!text) throw 'masukan teks nya ya oke'

await sock.sendMessage(saluran, {
  text: text,
 contextInfo: {
   mentionedJid: [m.sender],
   isForwarded: !0,
   forwardingScore: 127,
   forwardedNewsletterMessageInfo: {
   newsletterJid: saluran,
   newsletterName: `ᴘᴜsʜᴄʜ | ` + botname,
   serverMessageId: -1
  },
   externalAdReply: {
   title: `Pushch Oleh: ${m.pushName}`,
   body: `${ownername2} | ` + botname,
   mediaType: 1,
   thumbnailUrl: pp,
   sourceUrl: "https://www.tiktok.com/@leooxzy_ganz/",
    }
  }
})

  },
};