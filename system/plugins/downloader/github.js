module.exports = {
  command: "git",
  alias: [ ],
  category: ["downloader"],
  settings: {
    limit: true,
  },
  description: "Unduh link Github",
  loading: true,
  async run(m, { sock, Func, text, Scraper }) {
if (!text.includes('github.com')) throw "Link Contoh .git <link>";

try {
const hasil = await Scraper.github.dl(text)

m.reply({ document: { url: hasil.result }, mimetype: 'application/zip', fileName: 'Github-Downloader-By-Deku.zip' })

} catch (err) {
 m.reply(err)
}

}
}