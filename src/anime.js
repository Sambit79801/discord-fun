const superagent = require("superagent");

class anime {
constructor() {
    this.version = require("../package.json").version;
    this.methods = [
     "waifu",
     "neko",
     "shinobu",
     "megumin",
     "bully",
     "cuddle",
     "cry",
     "hug",
     "awoo",
     "kiss",
     "lick",
     "pat",
     "blush",
     "wave",
     "bite",
     "nom",
     "kill",
     "snap",
     "wink"
    ];
    async waifu() {
    const { body } = superagent.get('https://waifu.pics/api/sfw/waifu');
    return body.url;
    }
    async neko() {
     const { body } = superagent.get('https://waifu.pics/api/sfw/neko');
     return body.url;
  }
  async shinobu() {
   const { body } = superagent.get('https://waifu.pics/api/sfw/shinobu');
   return body.url;
   }
   async megumin() {
   const body = superagent.get('https://waifu.pics/api/sfw/megumin')
    return body.url;
    }
    async bully() {
       const body = superagent.get('https://waifu.pics/api/sfw/bully')
return body.url;
}
async cuddle() {
const body = superagent.get('https://waifu.pics/api/sfw/cuddle')
return body.url;
}
async cry() {
const body = superagent.get('https://waifu.pics/api/sfw/cry')
return body.url;
}
async hug() {
const body = superagent.get('https://waifu.pics/api/sfw/hug')
return body.url;
}
async awoo() {
const body = superagent.get('https://waifu.pics/api/sfw/awoo')
return body.url;
}
async kiss() {
const body = superagent.get('https://waifu.pics/api/sfw/kiss')
return body.url;
}
async lick() {
const body = superagent.get('https://waifu.pics/api/sfw/lick')
return body.url;
}
async pat() {
const body = superagent.get('https://waifu.pics/api/sfw/pat')
return body.url;
}
async blush() {
const body = superagent.get('https://waifu.pics/api/sfw/blush')
return body.url;
}
async wave() {
const body = superagent.get('https://waifu.pics/api/sfw/wave')
return body.url;
}
async bite() {
const body = superagent.get('https://waifu.pics/api/sfw/bite')
return body.url;
}
async nom() {
const body = superagent.get('https://waifu.pics/api/sfw/nom')
return body.url;
}

async kill() {
const body = superagent.get('https://waifu.pics/api/sfw/kill')
return body.url;
}
async slap() {
const body = superagent.get('https://waifu.pics/api/sfw/slap')
return body.url;
}
async wink() {
const body = superagent.get('https://waifu.pics/api/sfw/wink')
return body.url;
}
