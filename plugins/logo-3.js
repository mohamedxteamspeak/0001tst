const Asena = require("../Utilis/events");
const { MessageType } = require("@adiwajshing/baileys");
const { textProMe, ePhotoDownload, getBuffer } = require('../Utilis/download')

//You can copy and make more plugin 
//change #effect_url and #command_name only
//also check inout type (#one or #two)
//https://textpro.me/ use links from HERE

//Example for text effect with one input

Asena.addCommand({ pattern: 'logomaker ?(.*)', fromMe: true, desc: "logo maker list", }, async (message, match) => {
  return await message.sendMessage(`╭────────────────╮
           *ʟᴏɢᴏ ᴩᴀᴄᴋ ᴠ3*
╰────────────────╯
           *ʟᴏɢᴏ ᴄᴏᴍᴍᴀɴᴅs*
❏ ᴛᴇxᴛ ᴩʀᴏ ʟᴏɢᴏꜱ
╭────────────────
│ ▢ ʙᴜʀɴ
│ ▢ ᴅᴇɴɪᴍ
│ ▢ ꜱᴛᴇᴇʟ
│ ▢ 2ᴛʜᴜɴᴅᴇʀ
│ ▢ ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
│ ▢ ʙᴜʀɴ
│ ▢ ᴡᴏᴏᴅ
│ ▢ ʙʟᴊᴇᴡᴇʟʀy
│ ▢ ʙʟᴍᴇᴛᴀʟ
│ ▢ 4ɴᴇᴏɴ
│ ▢ 5ɴᴇᴏɴ
│ ▢ ʀᴜꜱᴛy
│ ▢ ꜱɪʟᴠᴇʀ
│ ▢ ʀᴏᴄᴋ
│ ▢ ʀᴏᴀᴅ
│ ▢ ʜᴏɴᴇy
│ ▢ ᴩʀɢᴇᴍ
│ ▢ ʙʟɢᴇᴍ
│ ▢ ᴄᴀʀʙᴏɴ
│ ▢ ᴍᴀʀʙʟᴇ
╰────────────────
❏ ᴇ ᴩʜᴏᴛᴏ ʟᴏɢᴏꜱ (ʀᴀɴᴅᴏᴍ)
╭────────────────
│ ▢ qᴜᴇᴇɴ
│ ▢ ꜱᴛᴀʀᴡᴀʀꜱ
│ ▢ ɢᴀᴍᴇʟᴏɢᴏ
│ ▢ ʟᴏɢᴏɴᴇᴏɴ
│ ▢ ꜱɪɢɴɴᴇᴏɴ
│ ▢ ᴩᴜʙɢʙɢ
│ ▢ ɢᴀᴍᴇʟɢ
│ ▢ ʟᴏɢᴏᴍᴇᴛᴀʟ
│ ▢ ᴀɴɢᴇʟᴡɪɴɢ
│ ▢ ᴀɴɢᴇʟɢʀᴡɪɴɢ
╰────────────────
╭────────────────╮
           *ʟᴏɢᴏ ᴍᴀᴋᴇʀ ᴠ3*
╰────────────────╯`)
  });

var r_qbutton = new Array ();

r_qbutton[0] = '13f68546-fc62-4278-9e4c-dd9340130946';
r_qbutton[1] = '8ddd2a19-a5b5-4429-b23e-0c80dafa7979';


var r_qbutton_a = new Array ();

r_qbutton_a[0] = '4d1e64fd-6601-4fd1-acfd-dbdad36c401a';
r_qbutton_a[1] = '6ac134d1-f593-499d-8641-e7ce45af680e';
r_qbutton_a[2] = 'a60760ea-f266-4064-bde0-8d02f174254d';
r_qbutton_a[3] = 'c542dab0-ea54-44a5-9976-c6af66f71d9c';
r_qbutton_a[4] = '7cdb6c7b-1c37-41c6-b50d-500c6111833d';
r_qbutton_a[5] = '868cf218-c4c9-432a-b737-8d43ecdc580c';
r_qbutton_a[6] = 'df2d7c1e-7319-4157-a02c-0c7f71f41cc3';

var r_qbutton_b = new Array ();

r_qbutton_b[0] = 'a79c02b0-dc75-468d-8c6f-f7500a8b8b4a';
r_qbutton_b[1] = 'bb305a62-e4da-4c2b-901e-dbe68d249fc1';
r_qbutton_b[2] = '94ce6bc3-9e58-461b-92d2-55f26bfe89a1';
r_qbutton_b[3] = 'aa156ca8-cb63-4bf5-93ac-c1fd761ef809';
r_qbutton_b[4] = '81030a7f-8a4a-4aa3-9b50-71dda7c00d38';
r_qbutton_b[5] = '69273836-a06c-4da5-a876-5cac60e2e7c1';

var r_qbutton_c = new Array ();

r_qbutton_c[0] = 'r4o5wsey1';
r_qbutton_c[1] = '7y0rq5qji';
r_qbutton_c[2] = 'd8f5f0x19';
r_qbutton_c[3] = '8miaqbk79';
r_qbutton_c[4] = 'k0xovjhox';
r_qbutton_c[5] = 'df9c5iu0o';
r_qbutton_c[6] = 'g2cnx1qud';
r_qbutton_c[7] = '8rewm9ker';
r_qbutton_c[8] = 'orlnd1jpd';
r_qbutton_c[9] = '494bu708o';
r_qbutton_c[10] = '3aw18jsse';
r_qbutton_c[11] = 'kocz6xf9m';
r_qbutton_c[12] = 'uz62srd8q';
r_qbutton_c[13] = '0j4l6yol1';
r_qbutton_c[14] = '1t4dpbbeb';
r_qbutton_c[15] = '0e5xhjwqa';
r_qbutton_c[16] = 'jnh4t0t1t';
r_qbutton_c[17] = 'u0jzc2s0m';
r_qbutton_c[18] = 'mni1bkp11';
r_qbutton_c[19] = 'oz439yy9v';
r_qbutton_c[20] = 'vkxpnful6';
r_qbutton_c[21] = 'rxplur13r';
r_qbutton_c[22] = 'lwgwjfz43';
r_qbutton_c[23] = '4bltauy76';
r_qbutton_c[24] = 'n44ofsn5a';
r_qbutton_c[25] = '6jnveqwxq';
r_qbutton_c[26] = 'rc3mgmhml';
r_qbutton_c[27] = 't79vujrpa';
r_qbutton_c[28] = 'uhuih0n20';
r_qbutton_c[29] = '2nnaamkp1';
r_qbutton_c[30] = '0g71vg2s8';
r_qbutton_c[31] = 'xzwh7qpus';

var r_qbutton_d = new Array ();

r_qbutton_d[0] = '2cb0949e-9e73-4e46-b149-e7e3927ba535';
r_qbutton_d[1] = '6e80d164-85bd-412f-ae4b-36c09a9fc6ad';
r_qbutton_d[2] = 'f81ef052-83f9-46a3-bbbc-4ce2653f735e';
r_qbutton_d[3] = '2bea561a-1130-4a3e-bd4b-1533cd0675d1';
r_qbutton_d[4] = '63e2a3f2-85ce-4973-bdcb-cf294542a8f2';
r_qbutton_d[5] = 'b50e6618-0079-4acd-a097-aeb44315c29a';

var r_qbutton_e = new Array ();

r_qbutton_e[0] = '188eb364-5a04-446e-a779-0e2f427b7bc3';
r_qbutton_e[1] = 'a35d8b0d-bb89-4718-8723-71c5a9e9de4a';
r_qbutton_e[2] = '3938db27-c48c-4d96-ab60-f1bd1e312abf';
r_qbutton_e[3] = '6bf8fced-bb7f-4373-ad07-5e95fd30e10e';
r_qbutton_e[4] = 'aa66248c-328c-447f-8862-ef49e1a73bc0';
r_qbutton_e[5] = '7647ec5b-f47c-4dab-91b6-db3afef6c980';

var r_qbutton_f = new Array ();

r_qbutton_f[0] = 'f469ed11-98c3-4b29-997e-68e9460faf6b';
r_qbutton_f[1] = 'f8651caa-f7e4-40ac-b7df-b1db5fcf9b57';
r_qbutton_f[2] = '3a613eab-80b6-413e-a724-9040e6316f2d';
r_qbutton_f[3] = '907301c5-478b-4529-bfa3-0741531cbc54';
r_qbutton_f[4] = '0b39d4ae-8b49-42a9-af5b-faca306f5600';
r_qbutton_f[5] = '11bd64b3-a2ec-4090-9d94-0fcb1958f697';

var r_qbutton_g = new Array ();

r_qbutton_g[0] = 'd6ca8483-d182-4a52-b5af-e534ad3070e3';
r_qbutton_g[1] = 'eafc98ed-6ba6-4a30-88e1-e73b059eeca1';
r_qbutton_g[2] = '5acf5c52-5c1d-4e05-b7d0-ba674a524685';
r_qbutton_g[3] = 'a2983d77-ca9d-4d95-b5fe-06c65f59f8cd';
r_qbutton_g[4] = 'a381c3b1-7505-4299-9d8a-a6c92f6ef228';
r_qbutton_g[5] = 'f53b5da9-5e99-4874-a634-d06ae81a2b09';
r_qbutton_g[6] = '89af5387-168a-4924-a49d-f938e061b7ba';
r_qbutton_g[7] = '9424ca60-11e4-4904-86b9-10ecf2442f5c';
r_qbutton_g[8] = '91d03a5f-52f9-4bac-a763-9be838f83288';
r_qbutton_g[9] = 'bb937ed8-6ace-4fb6-bc63-2e90a737e32c';
r_qbutton_g[10] = '98de991a-e305-4d37-869a-4f345fb07427';
r_qbutton_g[11] = 'a9e6d954-bf8a-4e97-b840-8ae786fe9aa9';

var r_qbutton_h = new Array ();

r_qbutton_h[0] = '206bc58d-00cc-4442-bc00-dcf221b40aa0';
r_qbutton_h[1] = 'de5f4f9c-95f0-411d-9ac9-5086409ad09a';
r_qbutton_h[2] = '657a0d32-84f6-4d6b-aab3-0b6768d27d0e';
r_qbutton_h[3] = 'da3a694a-8d60-47db-b132-13a21caee580';
r_qbutton_h[4] = 'ea7dac3f-a47f-4ece-8c36-05d322a611e3';
r_qbutton_h[5] = '37a43193-248c-43e0-8475-b65fa47b99ff';
r_qbutton_h[6] = 'bebc512b-04e1-44eb-a6b4-284b0a3674f4';
r_qbutton_h[7] = '2f5e2dac-add7-4810-ad65-b8e5a79bf963';
r_qbutton_h[8] = 'e56ad45a-6ed9-4087-ae7e-28415d7a9af8';
r_qbutton_h[9] = '8ea108a5-8e72-49a9-b8d8-b69aa371e8f2';
r_qbutton_h[10] = 'e10e110e-ee11-4f71-b7b5-8e49855bef0f';
r_qbutton_h[11] = '3fad023e-830e-4763-b0ca-17bb26047f83';
r_qbutton_h[12] = 'd723f734-86d1-46c0-9af5-635b4f7a4840';
r_qbutton_h[13] = '3fad023e-830e-4763-b0ca-17bb26047f83';
r_qbutton_h[14] = 'de5f4f9c-95f0-411d-9ac9-5086409ad09a';

var r_qbutton_i = new Array ();

r_qbutton_i[0] = 'fjepjdv06';
r_qbutton_i[1] = 'y2huxjqk4';
r_qbutton_i[2] = 'pz2zhvfsw';
r_qbutton_i[3] = 'cziool681';
r_qbutton_i[4] = '03wpap4au';
r_qbutton_i[5] = 'dqrczzygi';
r_qbutton_i[6] = 'o1j1rf9j2';
r_qbutton_i[7] = 'szxjz7l95';
r_qbutton_i[8] = 'zbpetfwaf';
r_qbutton_i[9] = 'hkqzrqwla';
r_qbutton_i[10] = 'tfofq0day';


Asena.addCommand({ pattern: 'denim ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/denim-text-effect-online-919.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: '2steel ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Steel 2 text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/steel-text-effect-online-921.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});


Asena.addCommand({ pattern: 'happy ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Happy cat  text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/write-text-on-foggy-window-online-free-1015.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});


Asena.addCommand({ pattern: '2thunder ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Thunder 2  text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/online-thunder-text-effect-generator-1031.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'transformer ?(.*)', fromMe: true,dontAddCommandList: true , desc: "transformer text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/create-a-transformer-text-effect-online-1035.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'metallic ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Matallic text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'greenneon ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Green neon text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/green-neon-text-effect-874.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'gold ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Golden text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/abstra-gold-text-effect-859.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'wood ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Wood text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/wood-text-effect-856.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'bljewelry ?(.*)', fromMe: true,dontAddCommandList: true , desc: " blue jewelry text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'blmetal ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Black metal text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/black-metal-text-effect-829.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: '4neon ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Neon 4 text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});


Asena.addCommand({ pattern: '5neon ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Neon 5 Red text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});


Asena.addCommand({ pattern: 'rusty ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Rusty  text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/rusty-metal-text-effect-860.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'blmetal ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Blue metal text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/blue-metal-text-effect-831.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'silver ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Glossy silver  text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/3d-chrome-text-effect-827.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'rock ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Rock text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/rock-text-effect-online-915.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'road ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Road text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/road-warning-text-effect-878.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'honey ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Honey text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/honey-text-effect-868.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'prgem ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Purple gem text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/create-a-metallic-text-effect-free-online-1041.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'blgem ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Blue gem text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/blue-gem-text-effect-830.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'carbon ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Carbon text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/carbon-text-effect-833.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});


Asena.addCommand({ pattern: 'marble ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Marble text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text")
  const effect_url = "https://textpro.me/marble-text-effect-863.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

//Example for text effect with two input
Asena.addCommand({ pattern: 'glitch ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Glitch text effect" }, async (message, match) => {
  if (match == '') return await message.sendMessage("Give me text\nExample .glitch steel;effect")
  const [text1, text2] = match.split(';')
  if (!text1 || !text2) return await message.sendMessage("Give me text\nExample .glitch steel;effect")
  const effect_url = "https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html"
  const { status, url } = await textProMe(effect_url, match)
  if (!status) return
  const { buffer } = await getBuffer(url)
  if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
});

Asena.addCommand({ pattern: 'queen ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-a-personalized-queen-card-avatar-730.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton[Math.floor(Math.random() * r_qbutton.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)
    })

Asena.addCommand({ pattern: 'starwars ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-a-star-wars-character-mascot-logo-online-707.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton_b[Math.floor(Math.random() * r_qbutton_b.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)
    })

Asena.addCommand({ pattern: 'gamelogo ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/make-team-logo-online-free-432.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton_c[Math.floor(Math.random() * r_qbutton_c.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)
    })

Asena.addCommand({ pattern: 'logoneon ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-blue-neon-logo-online-507.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton_d[Math.floor(Math.random() * r_qbutton_d.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)
    })
Asena.addCommand({ pattern: 'signneon ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton_e[Math.floor(Math.random() * r_qbutton_e.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)
    })
Asena.addCommand({ pattern: 'pubgbg ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/colorful-pubg-logo-maker-online-613.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton_f[Math.floor(Math.random() * r_qbutton_f.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)
    })

Asena.addCommand({ pattern: 'gamelg ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton_g[Math.floor(Math.random() * r_qbutton_g.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)
    })


Asena.addCommand({ pattern: 'logometal ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/metal-mascots-logo-maker-486.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton_h[Math.floor(Math.random() * r_qbutton_h.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)
    })



Asena.addCommand({ pattern: 'angelgrwing ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton_i[Math.floor(Math.random() * r_qbutton_i.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)
    })
Asena.addCommand({ pattern: 'angelwing ?(.*)', fromMe: true,dontAddCommandList: true , desc: "Denim text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html"
        const res = await ePhotoDownload(effect_url, match,r_qbutton_a[Math.floor(Math.random() * r_qbutton_a.length)])
        if(!res.status)return
        const buff = await getBuffer(res.url)
        if (buff.buffer !== false) return await message.sendMessage(buff.buffer, {}, MessageType.image)