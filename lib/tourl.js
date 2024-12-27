const { catbox } = require(process.cwd()+'/lib/uploader.js')

module.exports = {
  command: "tourl",
  alias: [],
  category: ["tools"],
  settings: {
    limit: true,
  },
  description: "Bikin Foto Kamu Convert To Url",
  loading: true,
  async run(m, { sock }) {
if (!m.quoted) return m.reply('reply media anda mau di url')
const quoted = m.isQuoted ? m.quoted : m;

const media = await m.quoted.download()
return catbox(media)
}
}
