# Verification-Bot
Discord.js Verification bot which can auto delete message and gives or removes role when they verified.

# Discord V12
```
npm i discord.js @12.5.3
```

# Setup
- Star and folk this code
- Add prefix and developerID in `config.json`
- Add TOKEN in `.env` or secret file
- Run code 
```
node index.js
```

# Commands
> \`${prefix}setverify\`: Set verification channel, autodelete channel.
> \`${prefix}setrole\`: Gives role when they use ${prefix}verify command in verification channel.
> \`${prefix}setrrole\`: Removes role when they use ${prefix}verify command in verification channel.
> \`${prefix}verify\`: It gives or remove role it works only in verification channel.
> \`${prefix}rvrole\`: Reset **Give Role** 
> \`${prefix}rvchannel\`: Reset **Verification Channel**
> \`${prefix}rrvrole\`: Reset **Remove Role**
