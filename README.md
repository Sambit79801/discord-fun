# discord-fun
discord-fun is a simple package to implement fun commands for discord bots.


# Installing

```bash
npm i discord-nsfw
```

# Methods
- waifu
- neko
- shinobu
- megumin
- bully
- cuddle
- cry 
- hug
- awoo
- kiss
- lick
- pat
- blush
- wave
- bite
- nom
- kill 
- snap
- wink
# Example
```js
const Discord = require("discord.js");
const fun = require("discord-fun");
const Fun = new fun();

const image = await fun.cry();
const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} is crying`)
    .setColor("RANDOM")
    .setImage(image);
message.channel.send(embed);
```

# Note
> ⚠ | This package uses **[Waifu.pics API](https://waifu.pics/)** to fetch images or gifs.
