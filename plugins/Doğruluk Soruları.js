/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran

Special Thanks:
@PrensesdcBot for soruce!
@bberc for soruce!
@1305025157 for ideas!
And other helpers...
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'soru ?(.*)', fromMe: true}, (async (message, match) => {

    await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *襤??te Sorun Geliyor..* ??五 ', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

    });

    await new Promise(r => setTimeout(r, 2100));

    var r_text = new Array ();
r_text[0] = " *Telefonunda en son arad覺??覺n ??ey neydi?* ";
r_text[1] = " *Birisi k覺z arkada??覺n / erkek arkada??覺ndan ayr覺lmak i癟in sana 1 milyon tl 繹nerseydi, yapar m覺yd覺n?* ";
r_text[2] = " *Yerden bir ??eyi al覺p hi癟 yedin mi?* ";
r_text[3] = " *Y覺lan, kurba??a gibi ??eylerden yemek zorunda kald覺n m覺?* ";
r_text[4] = " *Bir g羹n kar??覺 cins olarak uyan覺rsan, ilk yapaca??覺n ??ey nedir?* ";
r_text[5] = " *B羹y羹yen hayali bir arkada??覺n覺z var m覺yd覺?* ";
r_text[6] = " *En k繹t羹 al覺??kanl覺??覺n覺z nedir?* ";
r_text[7] = " *Banyoda ??ark覺 s繹yler misin?* ";
r_text[8] = " *Toplumda en utan癟 verici an覺n覺z neydi?* ";
r_text[9] = " *Aynada kendinle hi癟 konu??tun mu?* ";
r_text[10] = " *Web ge癟mi??inizi, birileri g繹r羹rse utanaca??覺n覺z ??ey ne olurdu?* ";
r_text[11] = " *Uykunda konu??ur musun?* ";
r_text[12] = " *??zelden sana yazan birine son att覺??覺n mesaj neydi?* ";
r_text[13] = " *S繹yledi??iniz veya yapt覺??覺n覺z bir ??eyi silmek i癟in zamanda geriye gidebilseydiniz, bu ne olurdu?* ";
r_text[14] = " *Yeniden do??mu?? olsayd覺n, hangi y羹z y覺lda do??mak isterdin?* ";
r_text[15] = " *Hala yapt覺??覺n en 癟ocuk癟a ??ey nedir?* ";
r_text[16] = " *Hangi 癟ocuk filmini tekrar tekrar izleyebilirsin?* ";
r_text[17] = " *Sa癟ma takma adlar覺n var m覺?* ";
r_text[18] = " *Telefonunuzda hangi uygulamada en 癟ok zaman harc覺yorsunuz?* ";
r_text[19] = " *Tek bir oturu??ta yedi??in en 癟ok yemek ne?* ";
r_text[20] = " *Tek ba??覺nayken dans ediyor musun?* ";
r_text[21] = " *Karanl覺ktan korkar m覺s覺n?*" ;
r_text[22] = " *B羹t羹n g羹n evdeysen ne yapard覺n?*" ;
r_text[23] = " *G羹nde ka癟 繹z 癟ekim yap覺yorsunuz?*" ;
r_text[24] = " *En son ne zaman di??lerini f覺r癟alad覺n?*" ;
r_text[25] = " *En sevdi??in pijamalar neye benziyor?*" ;
r_text[26] = " *Yapmaman gereken bir ??eyi yaparken hi癟 yakaland覺n m覺? E??er yakaland覺ysan yapt覺??覺n ??ey ne?*" ;
r_text[27] = " *V羹cudunun hangi b繹l羹m羹n羹 seviyorsun, hangi k覺sm覺ndan nefret ediyorsun?* ";
r_text[28] = " *Hi癟 bitlendin mi?* ";
r_text[29] = " *Pantolonunu moda i癟in hi癟 kestin mi?* ";
r_text[30] = " *Taba??覺n覺 yal覺yor musun?* ";
r_text[31] = " *Kimsenin senin hakk覺nda bilmedi??i bir ??ey varm覺?* ";
r_text[32] = " *E??er bu gruptaki herkesi yanan bir binadan kurtarmaya 癟al覺??覺yor olsayd覺n ve birini geride b覺rakmak zorunda kal覺rsan, kimi geride b覺rak覺rd覺n?* ";
r_text[33] = " *Telefonda arad覺??覺n son ??ey neydi?* ";
r_text[34] = " *Hi癟 asans繹rde gaz ka癟覺rd覺n m覺?* ";
r_text[35] = " *Banyodayken yanl覺??l覺kla hi癟 kimse i癟eri girdi mi?* ";
r_text[36] = " *Bir g羹nl羹??羹ne kar??覺 cins olsan ne yapard覺n?* ";
r_text[37] = " *Hayat覺n覺zda bir ??ey de??i??tirebilseydiniz, ne olurdu?* ";
r_text[38] = " *En b羹y羹k pi??manl覺??覺n nedir?* ";
r_text[39] = " *Kimsenin bulamad覺??覺 k繹t羹 bir ??ey yapt覺n覺z m覺?* ";
r_text[40] = " *Telefonunuzdaki en utan癟 verici foto??raf hangisidir?* ";
r_text[41] = " *??imdiye kadar g繹rd羹??羹n羹z en korkun癟 r羹ya nedir?* ";
r_text[42] = " *??orab覺n覺 de??i??tirirken aya??覺n覺 koklar m覺s覺n?* ";
r_text[43] = " *Bir ili??kinizdeki en b羹y羹k korkunuz nedir?* ";
r_text[44] = " *Hi癟 ya??覺n覺z hakk覺nda yalan s繹ylediniz mi?* ";
r_text[45] = " *En komik ilk randevunuz neydi?* ";
r_text[46] = " *En garip al覺??kanl覺??覺n nedir?* ";
r_text[47] = " *Ka癟 tane 癟ocuk sahibi olmak istersiniz?* ";
r_text[48] = " *??ocukluktaki lakab覺n neydi?* ";
r_text[49] = " *En sevdi??iniz yemek nedir?* ";
r_text[50] = " *Hayalindeki meslek ne?* ";
r_text[51] = " *Bir adada 3 g羹n s覺k覺??覺p kal覺rsan, ne yapars覺n?* ";
r_text[52] = " *En sevdi??iniz ki??i kimlerdir ve neden?* ";
r_text[53] = " *襤lk g繹r羹??te a??ka inan覺r m覺s覺n?* ";
r_text[54] = " *A??ka inan覺yor musunuz?* ";
r_text[55] = " *??ans覺n覺z olursa hangi 羹lkede ya??amak istersiniz?* ";
r_text[56] = " *Hayalinizdeki d羹??羹n nedir?* ";
r_text[57] = " *??imdiye dek ya??ad覺??覺n覺z en garip r羹yay覺 a癟覺klayabilir misiniz?* ";
r_text[58] = " *En b羹y羹k pi??manl覺??覺n nedir?* ";
r_text[59] = " *Sa癟覺n覺 y覺kamadan en uzun ne kadar s羹re bekledin?* ";
r_text[60] = " *Herhangi bir 羹nl羹 ile evlenseydin, kim olurdu?* ";
r_text[61] = " *Ka癟 tane erkek/k覺z arkada??覺n oldu?* ";
r_text[62] = " *??u an sevgilin varm覺?* ";
r_text[63] = " *??u an sevdi??in varm覺?* ";
r_text[64] = " *V羹cudunun hangi b繹l羹m羹n羹 seviyorsun, hangi k覺sm覺ndan nefret ediyorsun?* ";
r_text[65] = " *Aynada kendine hayran hayran bakar m覺s覺n?* ";
r_text[66] = " *Hayran oldu??un 羹nl羹 kim?* ";
r_text[67] = " *Sevdi??iniz birinin 繹n羹nde s繹yledi??iniz veya yapt覺??覺n覺z en utan癟 verici ??ey nedir?* ";
r_text[68] = " *Hayallerinizdeki insanla evleneceksin denilse, telefonsuz bir y覺l ge癟irir miydiniz?* ";
r_text[69] = " *Hayat覺n覺z覺n geri kalan覺nda sadece tek bir sa癟 modeli yapabilseydin, k覺v覺rc覺k sa癟lar覺 m覺 yoksa d羹z sa癟lar覺 m覺 se癟erdin?* ";
r_text[70] = " *Senden daha k覺sa biriyle 癟覺kar m覺s覺n?* ";
r_text[71] = " *Aynaya uzun s羹re bakmak seni korkutur mu?* ";
r_text[72] = " *Sevgilinle ilgili yapt覺??覺n en utan癟 verici ??ey nedir?* ";
r_text[73] = " *Iss覺z bir adada bu gruptan kimin mahsur kalmas覺n覺 isterdiniz?* ";
r_text[74] = " *Hi癟 terk edildin mi? Bunun nedeni neydi?* ";
r_text[75] = " *Yapabilseydin kendin 羹zerinde de??i??tirebilece??in bir fiziksel 繹zellik nedir?* ";
r_text[76] = " *Hayat覺nda yapt覺??覺n en do??ru ??ey?* ";
r_text[77] = " *Do??a 羹st羹 bi yetenek edinebilsen bu ne olurdu?* ";
r_text[78] = " *Birine sevdi??ini nas覺l belli edersin?* ";
r_text[79] = " *??ocuklu??un nas覺l ge癟ti?* ";
r_text[80] = " *Bi kelime 羹ret ve ne anlama geldi??ini s繹yle* ";
r_text[81] = " *Mucizelere inan覺r m覺s覺n?* ";
r_text[82] = " *Seni en 癟ok ne sinirlendirir?* ";
r_text[83] = " *Hayatta unutmad覺??覺n biri var m覺?* ";
r_text[84] = " *D繹vme yapt覺rmak istesen ne yapt覺r覺rd覺n?* ";
r_text[85] = " *E??er bir zaman makinen olsayd覺 ve ge癟mi??e gidip yapt覺??覺n tek bir ??eyi silebilecek olsayd覺n, neyi silerdin?* ";
r_text[86] = " *Seni ve sevgilini esir alsalar, ya onun can覺 ya senin can覺n deseler kimi se癟erdin?* ";
r_text[87] = " *??ekil de??i??tirme 繹zelli??in olsayd覺 ilk neye d繹n羹??羹rd羹n?* ";
r_text[88] = " *Hi癟 sevgilin oldu mu?* ";
r_text[89] = " *襤nsanlardan uzak kalmay覺 sever misin?* ";
r_text[90] = " *Gece mi G羹nd羹z m羹?* ";
r_text[91] = " *襤nsanlar覺n d羹??羹ncelerini okuyabilseydin ilk kiminkini okurdun?* ";
r_text[92] = " *Senin i癟in 癟ok 繹zel birine b羹y羹k bir yalan s繹yledin mi?* ";
r_text[93] = " *Bu gruptan biriyle 癟覺kmak istesen o kim olurdu?* ";
r_text[94] = " *Sana g繹re bu gruptaki kim seni daha 癟ok seviyor?* ";
r_text[95] = " *Yanl覺z kald覺??覺nda ne t羹r hayaller kurars覺n?* ";
r_text[96] = " *Ya??murlu bir sonbahar ak??am覺 m覺 yoksa karl覺 bir k覺?? gecesimi?* ";
r_text[97] = " *Bu grupta kendini kime daha yak覺n hissediyorsun?* ";
r_text[98] = " *Bu gruptaki herkes tehlikede! Sadece bir ki??iyi kurtarma ??ans覺n var. Di??er kalanlar %40 ihtimalle hayatta kalacaklar. Kimi kurtar覺rs覺n?* ";
r_text[99] = " *Hi癟 sana a??k覺n覺 itiraf eden birini reddettinmi? Ettiysen ismi ne?* ";
r_text[100] = " *Sevgili mi kanka m覺?* ";
r_text[101] = " *襤tiraf Vakti! Hi癟 daha 繹nce birini aldatt覺 m覺?* ";
r_text[102] = " *襤tiraf Vakti! Hi癟 繹zelini ba??ka biriyle payla??t覺n m覺?* ";
r_text[103] = " *襤tiraf Vakti! Gece gizlice d羹??羹nd羹??羹n biri varm覺? Varsa ad覺 ne?* ";
r_text[104] = " *襤tiraf Vakti! Daha 繹nce hi癟 a??k覺n覺 kalbine g繹md羹n m羹?* ";
r_text[105] = " *襤tiraf Vakti! Bu grupta sana a??覺k olabilecek kimler var?* ";
r_text[106] = " *襤tiraf Vakti! Hayalindeki sevgili i癟in en yak覺n arkada??覺ndan vazge癟ermisin?* ";
r_text[107] = " *襤tiraf Vakti! Bu grupta fizik ve 癟ekicilik olarak en fazla be??endi??in ki??i kim?* ";
r_text[108] = " *Kapana K覺s覺ld覺n! ??abuk cevap ver! Aileni terkedip en fazla arzulad覺??覺n ki??inin yan覺na gitmek mi yoksa 40'覺na kadar aile evinde oturmak m覺?* ";
r_text[109] = " *Kapana K覺s覺ld覺n! Ba??覺na silah do??rultulmu?? ve ya senin can覺n yada ailenin can覺. Hangisini se癟ersin?* ";
r_text[110] = " *Kapana K覺s覺ld覺n! ??irkin ama zengin biriyle mi 癟覺kmak istersin yada g羹zel ama fakir biriyle mi?* ";
r_text[111] = " *Joker Soru! Bu soruya denk gelmek senin 癟ok ??ansl覺 oldu??unu g繹sterir. 襤??te sana sorum:\nA??k m覺 Para m覺?* ";

var i = Math.floor(112*Math.random())

await message.sendMessage(`${r_text[i]}`);

}));

Asena.addCommand({pattern: 'zorsoru ?(.*)', fromMe: true}, (async (message, match) => {

    await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Senin 襤癟in En Zor Sorular覺 Se癟iyorum..* ???? ', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

    });

    await new Promise(r => setTimeout(r, 2100));

    var r_text = new Array ();
r_text[0] = " *Biriyle 癟覺karken yapt覺??覺n en utan癟 verici ??ey neydi?* ";
r_text[1] = " *Toplu ta??覺ma ara癟lar覺nda yapt覺??覺n en 癟覺lg覺nca ??ey neydi?* ";
r_text[2] = " *??imdiye kadar bir ba??kas覺na s繹yledi??in en ac覺mas覺zca ??ey neydi?* ";
r_text[3] = " *Hi癟bir sonucu olmayaca??覺n覺 bilsen ne yapmak isterdin?* ";
r_text[4] = " *Arkada??lar覺nla yapmay覺 sevdi??in ama sevgilinin 繹n羹nde asla yapmayaca??覺n ??ey nedir?* ";
r_text[5] = " *Bu hayatta en 癟ok kimi k覺skan覺yorsun?* ";
r_text[6] = " *A??k i癟in her ??eyi yapar覺m ama ???bunu??? yapmam dedi??in ??ey nedir?* ";
r_text[7] = " *??e??itli bat覺l inan癟lar覺n var m覺? Varsa onlar neler?* ";
r_text[8] = " *Sevdi??ini itiraf etmekten utand覺??覺n film hangisidir?* ";
r_text[9] = " *En utan verici ki??isel bak覺m al覺??kanl覺??覺n nedir?* ";
r_text[10] = " *Kimsenin bilmeyece??i garanti olsa kimi 繹ld羹rmek isterdin?* ";
r_text[11] = " *Ba??kas覺 i癟in ald覺??覺n en ucuz hediye nedir?* ";
r_text[12] = " *Hi癟 toplum i癟inde 癟覺plak kald覺n m覺?* ";
r_text[13] = " *Hi癟 toplum i癟indeyken burnunu kar覺??t覺rd覺n m覺?* ";
r_text[14] = " *Gece ge癟 saatte yapt覺??覺n en utan癟 verici ??ey nedir?* ";
r_text[15] = " *??覺plak olmak m覺 yoksa d羹??羹nd羹??羹n her ??eyin ti??繹rt羹nde yazmas覺 m覺? Hangisini se癟erdin?* ";
r_text[16] = " *Hi癟 havuza i??eyip hi癟bir ??ey olmam覺?? gibi davrand覺n m覺?* ";
r_text[17] = " *Sence bu grupta en k繹t羹 giyinen ki??i kimdir?* ";
r_text[18] = " *Bu odadaki insanlardan kiminle hayat覺n覺 de??i??tirmek isterdin? Neden?* ";
r_text[19] = " *Tuvalete oturdu??un zaman ne d羹??羹n羹rs羹n?* ";
r_text[20] = " *Yapt覺??覺nda utanmana neden olan mahcup zevkin nedir?* ";
r_text[21] = " *Burnunu kar覺??t覺r覺r m覺s覺n?*" ;
r_text[22] = " *En utan癟 verici an覺n neydi?*" ;
r_text[23] = " *Hi癟 s覺n覺fta y羹ksek sesle osurdun mu?*" ;
r_text[24] = " *Hi癟 seksi bir foto??raf覺n覺 癟ekmeyi denedin mi?*" ;
r_text[25] = " *Gizli a??k覺n kim?*" ;
r_text[26] = " *Yapmaman gereken bir ??eyi yaparken hi癟 yakaland覺n m覺? E??er yakaland覺ysan yapt覺??覺n ??ey ne?*" ;
r_text[27] = " *Bu odadaki en seksi ki??i sence kim?* ";
r_text[28] = " *Mevcut sevgilinle evlenece??ini d羹??羹n羹yor musun?* ";
r_text[29] = " *Kimsenin senin hakk覺nda bilmedi??i ??ey nedir?* ";
r_text[30] = " *Hi癟 izlememen gereken bir film izledin mi? 襤zlediysen ad覺 ne?* ";
r_text[31] = " *Yapt覺??覺n en yasa d覺??覺 ??ey neydi?* ";
r_text[32] = " *Karde??ini 1 milyon TL kar??覺l覺??覺nda ba??ka bir karde??le de??i??ir misin?* ";
r_text[33] = " *Birden fazla ki??iyle evlenme ??ans覺n olsa kimleri se癟erdin?* ";
r_text[34] = " *Sence bu gruptaki en k繹t羹 insan kim olabilir?* ";
r_text[35] = " *Sevgilinden ayr覺lman i癟in birisi sana 1 milyon TL verse ayr覺l覺r m覺yd覺n?* ";
r_text[36] = " *Sevgilin seni hi癟 utand覺rd覺 m覺? Utand覺rd覺ysa o nedir?* ";
r_text[37] = " *Hi癟 sevgilini aldatmay覺 d羹??羹nd羹n m羹?* ";
r_text[38] = " *Hi癟 birini g繹zetlerken yakaland覺n m覺?* ";
r_text[39] = " *Hi癟 burnunu kar覺??t覺r覺rken yakaland覺n m覺?* ";
r_text[40] = " *Hi癟 sosyal medyada pi??man oldu??un bir ??ey payla??t覺n m覺? Payla??t覺ysan konusu ne?* ";
r_text[41] = " *Du??ta i??iyor musun?* ";
r_text[42] = " *??orab覺n覺 de??i??tirirken aya??覺n覺 koklar m覺s覺n?* ";
r_text[43] = " *Hayat覺n覺n en utan癟 verici an覺 neydi?* ";
r_text[44] = " *Birisi sana d羹nyan覺n en zengini olmay覺 teklif etse bile asla yapmayaca??覺n ??ey nedir?* ";
r_text[45] = " *Bu gruptan kiminle sevgili olmak isterdin?* ";
r_text[46] = " *Sence bu grupta yer alan ve en k繹t羹 sevgili olacak ki??i kimdir?* ";
r_text[47] = " *Hi癟 sevgilinin arkada??覺na a??覺k oldun mu?* ";
r_text[48] = " *Hayat覺nda yapt覺??覺n en kaba ??ey neydi?* ";
r_text[49] = " *Birine yapt覺??覺n en i??ren癟 ??aka neydi?* ";
r_text[50] = " *Sevgilinle yapmak istedi??in en 癟覺lg覺nca ??ey nedir?* ";
r_text[51] = " *Bir ba??kas覺ndan etkilenerek yapt覺??覺n en 癟覺lg覺nca ??ey neydi?* ";
r_text[52] = " *??覺plak kalmak veya akl覺ndan ge癟enlerin kafan覺n 羹st羹nde yazmas覺 aras覺nda bir se癟im yapmak zorunda olsan hangisini se癟erdin?* ";
r_text[53] = " *Daha 繹nce hi癟 s羹m羹??羹n羹n tad覺na bakt覺n m覺?* ";
r_text[54] = " *Tuvalette otururken d羹??羹nd羹??羹n baz覺 ??eyler nelerdir?* ";
r_text[55] = " *Bir par癟as覺 oldu??un en utan癟 verici durum neydi?* ";
r_text[56] = " *En utan癟 verici al覺??kanl覺??覺n nedir?* ";
r_text[57] = " *Daha 繹nce hi癟 alt覺na i??edi??in oldu mu?* ";
r_text[58] = " *襤nsanlar覺n i癟indeyken en utand覺??覺n an neydi?* ";
r_text[59] = " *襤nsanlara ters gelmesine ra??men yapmaktan en b羹y羹k keyif ald覺??覺n ??ey nedir?* ";
r_text[60] = " *Gizliden gizliye ilgi duydu??un ki??i kim?* ";
r_text[61] = " *G繹r羹n羹m羹n羹 1-10 aras覺nda nas覺l de??erlendirirsin?* ";
r_text[62] = " *Hi癟 yanl覺??l覺kla bir arkada??覺n覺n s覺rr覺n覺 ortaya 癟覺kard覺n m覺? ??覺kard覺ysan o nedir?* ";
r_text[63] = " *??u anki k覺z arkada??覺nla/erkek arkada??覺nla evlenece??ini d羹??羹n羹yor musun?* ";
r_text[64] = " *Hi癟 kulak kirinin tad覺na bakt覺n m覺?* ";
r_text[65] = " *Hi癟 terinin tad覺na bakt覺n m覺?* ";
r_text[66] = " *Bu grupta yer alan ve tan覺d覺??覺n en k繹t羹 ki??i oldu??una inand覺??覺n ki??i kim?* ";
r_text[67] = " *Sevdi??iniz birinin 繹n羹nde s繹yledi??iniz veya yapt覺??覺n覺z en utan癟 verici ??ey nedir?* ";
r_text[68] = " *Ger癟ek d覺??覺 olan en b羹y羹k korkun nedir?* ";
r_text[69] = " *A??覺k oldu??un ki??inin 繹n羹nde en 癟ok utand覺??覺n zaman ne zamand覺?* ";
r_text[70] = " *Yata??覺n覺 en son ne zaman 覺slatt覺n?* ";
r_text[71] = " *Kimsenin bilmedi??i en b羹y羹k s覺rr覺n nedir?* ";
r_text[72] = " *Kendini seksi yapmak i癟in ne yapars覺n?* ";
r_text[73] = " *Seni en 癟ok ne tahrik eder?* ";
r_text[74] = " *Ba??ka birinin k覺z arkada??覺yla 癟覺kabilecek olsayd覺n bu kim olurdu?* ";
r_text[75] = " *A??覺k oldu??un ki??iye s覺n覺r tan覺madan bir mesaj g繹nderecek olsayd覺n bu ne olurdu?* ";
r_text[76] = " *Bu gruptan bir ki??iyle evlenmek isteseydin bu kim olurdu?* ";

var i = Math.floor(77*Math.random())

await message.sendMessage(`${r_text[i]}`);

}));

Asena.addCommand({pattern: '18soru ?(.*)', fromMe: true}, (async (message, match) => {

    await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' ???? *Haz覺r m覺s覺n* ???? ', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

    });

    await new Promise(r => setTimeout(r, 2100));

    var r_text = new Array ();
r_text[0] = " *Bu gruptan bir kar??覺 cins ile yatmak isteseydin o kim olurdu?* ";
r_text[1] = " *??n羹nde iki se癟enek var, 1 y覺l sex k繹lesi mi olmak istersin yoksa cinsel organ覺na k繹t羹 bir ameliyat m覺?* ";
r_text[2] = " *Kendini 癟覺plak hayal ediyormusun?* ";
r_text[3] = " *Hangi 羹nl羹 ile sex yapmak isterdin?* ";
r_text[4] = " *Sevi??ti??in en s覺rad覺??覺 yer neresi?* ";
r_text[5] = " *En son ne zaman masturbasyon yapt覺n?* ";
r_text[6] = " *Kendine dokunurken nas覺l hissedersin?* ";
r_text[7] = " *Hi癟 ba??ka bir 癟ifti seks yaparken izledin mi?* ";
r_text[8] = " *Birinin sana s繹yledi??i en seksi ??eyler neler?* ";
r_text[9] = " *Hi癟 aynada kendi v羹cuduna uzun s羹re bak覺p hayal kurdun mu?* ";
r_text[10] = " *Hi癟 bir gecelik ili??ki hikayen oldu mu?* ";
r_text[11] = " *Hi癟 Nude att覺n m覺?* ";
r_text[12] = " *Hi癟 bir 繹??retmeninle ilgili fantezi kurdun mu?* ";
r_text[13] = " *Zevk vermeyi mi almay覺 m覺 tercih edersin?* ";
r_text[14] = " *Asla yapmayaca??覺n bir cinsel aktivite s繹yle.* ";
r_text[15] = " *Ergenken yaparken yakaland覺??覺n en m羹stehcen ??ey?* ";
r_text[16] = " *Hayat覺nda ka癟 tane cinsel partnerin oldu?* ";
r_text[17] = " *Sana ilk orgazm覺n覺 kim ya??att覺?* ";
r_text[18] = " *Hi癟 birinin bekaretini bozdun mu?* ";
r_text[19] = " *En sevdi??in porno t羹r羹 ne?* ";
r_text[20] = " *Hi癟 halka a癟覺k bir tuvalette mast羹rbasyon yapt覺n m覺?* ";
r_text[21] = " *Hi癟 bir seks oyunca??覺 kulland覺n m覺?* ";
r_text[22] = " *Hi癟 anal seks denedin mi?* ";
r_text[23] = " *V羹cuduna ba??kas覺n覺n dokunmas覺 seni ate??lendirirmi?* ";
r_text[24] = " *Birisinde cinsel olarak 癟ekici buldu??un ilk ??ey nedir?* ";
r_text[25] = " *Mast羹rbasyon yapt覺??覺n en garip yer neresiydi?* ";
r_text[26] = " *Cinsel tercihin ne?*" ;
r_text[27] = " *Seks arzun ne kadar y羹ksek?* ";
r_text[28] = " *Sana ??aplak at覺lmas覺n覺 sever misin?* ";
r_text[29] = " *Seni tahrik etmenin en kesin yolu nedir?* ";
r_text[30] = " *Dirty talk sever misin?* ";
r_text[31] = " *??stte olmay覺 m覺 tercih edersin, altta olmay覺 m覺?* ";
r_text[32] = " *Birini orgazm yapmak i癟in neresinden 繹persin?* ";
r_text[33] = " *Kar??覺 cinsi nas覺l orgazm yapars覺n?* ";
r_text[34] = " *襤lk 繹p羹c羹??羹n羹 a癟覺kla.* ";
r_text[35] = " *Ka癟 ki??iyle seks yapt覺n?* ";
r_text[36] = " *Sexting???i ilk kiminle yapt覺n? 襤yi miydi?* ";
r_text[37] = " *Hi癟 seks yaparken yakaland覺n m覺?* ";
r_text[38] = " *Penisin ya da vajinan olsa ilk ne yapard覺n?* ";
r_text[39] = " *Bug羹ne kadar cinsellik hakk覺nda d羹??羹ncen nedir?* ";
r_text[40] = " *V羹cudundan memnun musun?* ";
r_text[41] = " *E??er erkeksen penisinin boyutunu ve ??eklini a癟覺kla. Bundan memnun musun?* ";
r_text[42] = " *Kendi spermini tatt覺n m覺? Be??endin mi?* ";
r_text[43] = " *En s覺rad覺??覺 / tabu fantezilerini tarif et.* ";
r_text[44] = " *Hayalini kurdu??un en garip ki??i kim?* ";
r_text[45] = " *Mast羹rbasyon yaparken hep hayal kurar m覺s覺n?* ";
r_text[46] = " *En garip al覺??kanl覺??覺n nedir?* ";
r_text[47] = " *Utand覺??覺n herhangi bir fikrin var m覺? Varsa nedir?* ";
r_text[48] = " *Bo??al覺rken ne hissediyorsun?* ";
r_text[49] = " *Bo??al覺rken hi癟 f覺??k覺r覺yor musun?* ";
r_text[50] = " *Cinsel organ覺na dokunmadan orgazm olabilir misin?* ";
r_text[51] = " *Meme u癟lar覺n ne kadar hassas? Meme ucunla oynar m覺s覺n?* ";
r_text[52] = " *Ba??ka bir ki??iyle ya da mast羹rbasyon yoluyla orgazm yapmay覺 daha kolay buluyor musun?* ";
r_text[53] = " *Hard veya soft bir temastan hangisiyle daha kolay bo??al覺rs覺n?* ";
r_text[54] = " *Sevgilinle ilgili yapt覺??覺n en utan癟 verici ??ey nedir?* ";
r_text[55] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nSevglinin seni tahrik eden en sexy yeri neresidir?* ";
r_text[56] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nSana en yak覺n kar??覺 cins kuzenin ile sex yapmak istedin mi?* ";
r_text[57] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nBu gruptaki kar??覺 cins birini 癟覺plak g繹rme ??ans覺n var! Kimi g繹rmek isterdin?* ";
r_text[58] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nMazo??ist ve sexy bir sevgili ile ate??li geceler ge癟irmek mi yoksa s覺radan ve sana g繹re 癟ok daha az sexy biri ile ate??li geceler ge癟irmek mi?* ";
r_text[59] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nBu gruptaki birinin nude foto??raf覺n覺 g繹rebileceksin ama 1 ay mast羹rbasyon yapmayacaks覺n. Yinede g繹rmek ister miydin?* ";
r_text[60] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nErkekler i癟in; Tek gecelik ili??ki hakk覺n ve 繹n羹nde iki se癟enek var: Lana Rhoads mu Barabara Palvin mi\nK覺zlar 襤癟in; Johnny Sins mi Jordi mi?* ";
r_text[61] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nBu gruptan kimle gelecek vaat eden hayaller kurdun?* ";
r_text[62] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nSana nerdeyse insan kadar ger癟ek癟i ve a??覺r覺 sexy bir robot verecekler ama ayda sadece 1 kez ili??kiye girebileceksin yada orta 癟ekicilik d羹zeyinde bir insan ile istedi??in zaman sex yapabileceksin. Hangisini se癟erdin? ";
r_text[63] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nHayalindeki 繹p羹??me sahnesi ve kimle yapmak istedi??ini a癟覺kla. ";
r_text[64] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nHi癟 beklemedi??in bir orgazm oldu mu? ";
r_text[65] = " *Bu Soruyu Cevaplamak Zorundas覺n!\nAyn覺 anda birden fazla ki??i taraf覺ndan etkilendin mi? ";

var i = Math.floor(66*Math.random())

await message.sendMessage(`${r_text[i]}`);

}));

Asena.addCommand({pattern: 'lgbtsoru ?(.*)', fromMe: true}, (async (message, match) => {

    await message.client.sendMessage(message.jid, '@' + message.reply_message.jid.split('@')[0] + ' *Sorun Geliyor..* ???喉????????? ', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

    });

    await new Promise(r => setTimeout(r, 2100));

    var r_text = new Array ();
r_text[0] = " *Hi癟 hemcinsin ile ilgili +18 ??eyler d羹??羹nd羹n m羹?* ";
r_text[1] = " *Sadece hemcinsin ile ili??ki ya??ayacak olsan, bu gruptan kimle yapard覺n?* ";
r_text[2] = " *Yapt覺??覺n ??eyler y羹z羹nden yada, konu??ma ??eklinden dolay覺 kendini ???trans??? olarak d羹??羹nd羹n m羹?* ";
r_text[3] = " *Bu gruptan hemcinsin ile sevgili olsan kiminle olurdun?* ";
r_text[4] = " *G繹kku??a??覺 rengini severmisin?* ";
r_text[5] = " *LGBT karakterlere sahip oyunlar覺 oynamaktan zevk al覺r m覺s覺n?* ";
r_text[6] = " *1 G羹nl羹??羹ne ba??ka bir hemcinsine d繹n羹??ebilseydin bu kim olurdu?* ";
r_text[7] = " *Arkada??lar覺ndan sana g繹re kim daha 癟ok LGBT biri olmaya daha yatk覺n?* ";
r_text[8] = " *D羹nyan覺n en zengin insan覺 olacaks覺n ama hemcins bir partnerin olacak yada fakirlikten k覺r覺lacaks覺n ama kar??覺 cins bir partnerin olacak. Hangisini se癟erdi?* ";
r_text[9] = " *Hemcinsin ile ya??ad覺??覺n her tek gecelik ili??kide 1 Milyon Dolar alacaks覺n. Ama bu para sadece 3 g羹n duracak. Birdaha almak i癟in tekrar ili??kiye girermisin?* ";
r_text[10] = " *Hi癟 kendini bu bedene ait olmad覺??覺n覺 hissetti??in zaman oldu mu?* ";
r_text[11] = " *A??k覺n覺 itiraf edicek olsan hangi hemcinsine bunu s繹ylersin?* ";
r_text[12] = " *G繹kku??a??覺 renkli bir giysiyi giymekten 癟ekinir misin?* ";
r_text[13] = " *Sence normal ili??kimi yoksa hemcins ili??ki mi daha zevkli?* ";
r_text[14] = " *LGBT hakk覺nda k繹t羹 d羹??羹nenler i癟in sen ne d羹??羹n羹yorsun?* ";
r_text[15] = " *LGBT destekleyen ki??ileri sosyal medyadan takip edermisin?* ";
r_text[16] = " *Sadece tek bir hemcinsin ile ili??ki ya??ayacaksan bu kim olurdu?* ";
r_text[17] = " *Hi癟 k覺z/erkek olsam dedin mi?* ";
r_text[18] = " *Kar??覺 cins k覺yafetlerini giymek ister misin? Sana yak覺??aca??覺n覺 d羹??羹n羹yor musun?* ";
r_text[19] = " *Hi癟bir bask覺 olmasa ve %100 cinsiyet de??i??tirme ameliyat覺 olsa bunu yapar m覺yd覺n?* ";
r_text[20] = " *Hemcinsinin giydi??i hangi k覺yafetler seni tahrik eder?* ";
r_text[21] = " *Y覺llard覺r en yak覺n arkada??覺n ve her??eyiniz bir olan biri sana ilgi duymaya ba??lad覺. Onu hayat覺ndan 癟覺kar覺r m覺s覺n?* ";
r_text[22] = " *Hemcinsin sana a??k覺n覺 itiraf etse ilk tepkin ve sonras覺nda ne olurdu?* ";
r_text[23] = " *200 Lira kar??覺l覺??覺nda LGBT bayra??覺 olan bir hoodie???yi 1 g羹nl羹??羹ne giyer misin?* ";
r_text[24] = " *1000 Lira kar??覺l覺??覺nda hemcinsin ile dudaktan 繹p羹??羹r m羹s羹n? ??stelik bunu her yapt覺??覺nda 1000 lira alacaks覺n. Daha da fazla yapar m覺s覺n?* ";
r_text[25] = " *En yak覺n hemcins arkada??覺n seni tahrik etmeye 癟al覺??覺yor. Bunun olmas覺na izin verir misin?* ";
r_text[26] = " *Hemcinsin ile a??覺r覺 ate??li bir ortam olu??turdunuz. Kontrol羹 kaybediyorsunuz.. Bundan zevk al覺p ak覺??覺na b覺rak覺r m覺s覺n yoksa DUR mu dersin?* ";
r_text[27] = " *Kar??覺 cinsinden arad覺??覺n a??k覺 ve sevgiyi hemcinsin sana 癟ok daha fazlas覺 ile veriyor. 襤kiniz i癟in bir ??ans覺n oldu??unu d羹??羹n羹r m羹s羹n?* ";

var i = Math.floor(27*Math.random())

await message.sendMessage(`${r_text[i]}`);

}));

Asena.addCommand({pattern: 'infosoru', fromMe: true}, (async (message, match) => {

    await message.sendMessage('???蒿sage: *.soru <reply>*\n??對??Desc: Arkada??lar覺n覺za sorabilece??iniz g羹zel ve d羹??羹nd羹r羹c羹 sorular.\n\n???蒿sage: *.zorsoru <reply>*\n??對??Desc: Normalden daha zorlay覺c覺 sorular i癟in haz覺rlan!\n\n???蒿sage: *.18soru <reply>*\n??對??Desc: +18 do??ruluk sorular覺 sorar.\n\n???蒿sage: *.lgbtsoru <reply>*\n??對??Desc: LGBT konular覺 hakk覺nda soru sorar.\n???? _Filter Destekliyor!_');

}));
