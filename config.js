const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "SUHAIL_20_16_04_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDgxLFxuICAgICAgICA3NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDU4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY2LFxuICAgICAgICA5NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg0LFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdlUzJxcTQ1b29PRFZTVTNYUS9YNU93L2cxdUNKOFhYMnVBUU50RE03N2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkp6VG5WM3NDU2thVFF0M0UxSXlSRUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTNiYTMzYjctYjc2Yi00ODEwLWExYzktMzRiMGJiNDdhNGVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDE0NixcbiAgICAgIDE1NSxcbiAgICAgIDE1MyxcbiAgICAgIDE1LFxuICAgICAgMjAzLFxuICAgICAgMTA1LFxuICAgICAgMTE0LFxuICAgICAgMTUxLFxuICAgICAgMTM3LFxuICAgICAgMTg5LFxuICAgICAgMTg1LFxuICAgICAgMTczLFxuICAgICAgMTA2LFxuICAgICAgMjM3LFxuICAgICAgMTQ4LFxuICAgICAgOSxcbiAgICAgIDIzOCxcbiAgICAgIDE4NCxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDIyOSxcbiAgICAgIDIwLFxuICAgICAgOTcsXG4gICAgICA1NCxcbiAgICAgIDEzMCxcbiAgICAgIDk1LFxuICAgICAgMzIsXG4gICAgICAyMTgsXG4gICAgICAxMDMsXG4gICAgICAyMixcbiAgICAgIDk3LFxuICAgICAgMTIzLFxuICAgICAgMzgsXG4gICAgICAzNSxcbiAgICAgIDE2MixcbiAgICAgIDE3NyxcbiAgICAgIDk1LFxuICAgICAgMjM5LFxuICAgICAgMjQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkIxTDZOSkRBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQwMjY2OTY1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTQ2MzQxMTUzMTk0OTo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNMRUVLICAgICAgICA/Pz9cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPemVvSzhCRUsranhiRUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm5MNEdRc2JGZmU4anRNZUdpb0Nad3lYQ2V6RlBiQ2Y5RlBQUEQxT2RiMTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFdMbFpPc0tGQUpFMU5VMGs0VTBZS2JlQnRqQVhaZWRRME5PcitvM2pBc1dlalBLelpmZHJ5ZlF6N2xRYXY5QkFtVS8wVUszVjlWaHh4bnhtMk0vQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRzdtT1VnWVNyOEJSUDM3NEtncVZVdkxpTUhVd0Q2Tit5NXZoVGdyelBlVnNEYnFJcDFlYWwzeHVrMHRvZ0gvamJnVElZbU42Wi9xQWtMc0VqdHNaaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0MDI2Njk2NTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0NTA4MjEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzUxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKNXEzKzJEM09qVUVBeEhaYWdGMlk4UEgwdmE2S09lT1lvS0grejFOeFl3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2NzUzODAyOCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzEyNTgxOTMxMzE5XCJ9Igp9"                       // put your app url here,
global.email ="victorbajomo053@gmail.com"
global.location="Ogun, Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Sleek:sleek@sleek.lobfbhx.mongodb.net"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa,Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "08140266965" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
