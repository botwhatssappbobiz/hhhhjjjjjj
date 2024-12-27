const axios = require("axios");
const CryptoJS = require('crypto-js');

const encrypt = (data, key = "neoxr") => {
  try {
    let KEY_SIZE = 256, IV_SIZE = 128, ITERATIONS = 100;

    let salt = CryptoJS.lib.WordArray.random(16);
    let derivedKey = CryptoJS.PBKDF2(key, salt, {
      keySize: KEY_SIZE / 32,
      iterations: ITERATIONS
    });

    let iv = CryptoJS.lib.WordArray.random(IV_SIZE / 8);
    let encrypted = CryptoJS.AES.encrypt(data, derivedKey, {
      iv: iv,
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC
    });

    return salt.toString() + iv.toString() + encrypted.toString();
  } catch (e) {
    throw e;
  }
};


const client_id = "acc6302297e040aeb6e4ac1fbdfd62c3";
const client_secret = "0e8439a1280a43aba9a5bc0a16f3f009";
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

async function spotifyCreds() {
    try {
        const response = await axios.post(TOKEN_ENDPOINT, "grant_type=client_credentials", {
            headers: { Authorization: "Basic " + basic },
        });
        return {
            status: true,
            data: response.data,
        };
    } catch (error) {
        return { status: false, msg: "Failed to retrieve Spotify credentials." };
    }
}

const toTime = (ms) => {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map((v) => v.toString().padStart(2, '0')).join(":");
};

class Spotify {
 search = async(query, type = "track", limit = 20) => {
        try {
            const creds = await spotifyCreds();
            if (!creds.status) return creds;

            const response = await axios.get(`https://api.spotify.com/v1/search?query=${encodeURIComponent(query)}&type=${type}&offset=0&limit=${limit}`, {
                headers: { Authorization: "Bearer " + creds.data.access_token },
            });

            if (!response.data[type + "s"] || !response.data[type + "s"].items.length) {
                return { msg: "Music not found!" };
            }

            return response.data[type + "s"].items.map(item => ({
                title: item.name,
                id: item.id,
                duration: toTime(item.duration_ms),
                artist: item.artists.map(artist => artist.name).join(" & "),
                url: item.external_urls.spotify
            }));
        } catch (error) {
            return { status: false, msg: "Error searching for music. " + error.message };
        }
    }

  download = async function SpotifyV1(url) {
  try {
    // Validasi URL
    if (!url || !/spotify\.com/.test(url)) {
      throw new Error("Invalid Spotify URL: " + url);
    }

    const userAgent = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36";

    // Fetch token
    const { data: tokenData } = await axios.post("https://api.ssspotify.buzz/v1/token", {}, {
      headers: {
        "User-Agent": userAgent,
        "Referer": "https://ssspotify.buzz"
      }
    });

    if (!tokenData || !tokenData.token) {
      throw new Error("Failed to get token");
    }

    // Encrypt URL
    const encryptedUrl = encrypt(url);

    // Make final request
    const { data } = await axios.post("https://api.ssspotify.buzz/v1/ajax", { q: url }, {
      headers: {
        "User-Agent": userAgent,
        "Referer": "https://ssspotify.buzz",
        "x-api-token": encryptedUrl,
        "Authorization": tokenData.token
      }
    });
    return data;
  } catch (error) {
    console.error("Error in SpotifyV1:", error.message);
    throw error;
  }
}
}

module.exports = new Spotify();