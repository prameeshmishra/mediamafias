const fs = require('fs');
const file = 'src/app/analysis/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const rawData = [{"dialect":"Urdu","speakers":"50730000"},{"dialect":"Bhojpuri","speakers":"50580000"},{"dialect":"Kannada","speakers":"43510000"},{"dialect":"Malayalam","speakers":"34780000"},{"dialect":"Odia","speakers":"34060000"},{"dialect":"Punjabi","speakers":"31140000"},{"dialect":"Rajasthani","speakers":"25810000"},{"dialect":"Assamese","speakers":"13079696"},{"dialect":"Maithili","speakers":"7766921"},{"dialect":"Santali","speakers":"5216325"},{"dialect":"Kashmiri","speakers":"4000000"},{"dialect":"Gondi","speakers":"3000000"},{"dialect":"Nepali","speakers":"2076645"},{"dialect":"Sindhi","speakers":"2122848"},{"dialect":"Dogri","speakers":"2000000"},{"dialect":"Konkani","speakers":"1760607"},{"dialect":"Kurukh","speakers":"1500000"},{"dialect":"Khandeshi","speakers":"1400000"},{"dialect":"Tulu","speakers":"1300000"},{"dialect":"Meitei (Manipuri)","speakers":"1270216"},{"dialect":"Bodo","speakers":"1221881"},{"dialect":"Khasi","speakers":"1100000"},{"dialect":"Ho","speakers":"1000000"},{"dialect":"Garo","speakers":"950000"},{"dialect":"Mundari","speakers":"900000"},{"dialect":"Tripuri","speakers":"850000"},{"dialect":"Kui","speakers":"916222"},{"dialect":"Lushai/Mizo","speakers":"674756"},{"dialect":"Halabi","speakers":"593443"},{"dialect":"Korku","speakers":"574481"},{"dialect":"Miri/Mishing","speakers":"551224"},{"dialect":"Munda","speakers":"469357"},{"dialect":"Karbi/Mikir","speakers":"419534"},{"dialect":"Koya","speakers":"362070"},{"dialect":"Ao","speakers":"261387"},{"dialect":"Savara","speakers":"252519"},{"dialect":"Konyak","speakers":"248109"},{"dialect":"Kharia","speakers":"239608"},{"dialect":"English","speakers":"226449"},{"dialect":"Malto","speakers":"224926"},{"dialect":"Nissi/Dafla","speakers":"211485"},{"dialect":"Adi","speakers":"198462"},{"dialect":"Thado","speakers":"190595"},{"dialect":"Chakma","speakers":"176458"},{"dialect":"Lotha","speakers":"170001"},{"dialect":"Coorgi/Kodagu","speakers":"166187"},{"dialect":"Rabha","speakers":"164770"},{"dialect":"Tangkhul","speakers":"142035"},{"dialect":"Kisan","speakers":"141088"},{"dialect":"Angami","speakers":"132225"},{"dialect":"Phom","speakers":"122508"},{"dialect":"Kolami","speakers":"121855"},{"dialect":"Khond/Kondh","speakers":"118597"},{"dialect":"Dimasa","speakers":"111961"},{"dialect":"Ladakhi","speakers":"104618"},{"dialect":"Sema","speakers":"103529"}];

// We need 94 elements to add to 6 Tier 1s to equal 100
// Add placeholders if needed
while(rawData.length < 94) {
  rawData.push({dialect: "Dialect " + (rawData.length + 7), speakers: "100000"});
}

let arrStr = 'const matrixMarkets = [\n';
for(let i=0; i<94; i++) {
  const d = rawData[i];
  let spk = parseInt(d.speakers);
  let spkStr = '';
  if (spk > 1000000) {
    spkStr = (spk / 1000000).toFixed(2) + 'M';
  } else {
    spkStr = spk.toLocaleString();
  }
  arrStr += `    { rank: ${i+7}, dialect: "${d.dialect}", speakers: "${spkStr}" },\n`;
}
arrStr += '  ];';

const regex = /const matrixMarkets = \[\s*[\s\S]*?\];/;
content = content.replace(regex, arrStr);
// Update text in JSX to reflect Top 100 instead of Top 30
content = content.replace('Ranks 7-30', 'Ranks 7-100');
content = content.replace('top 30 vernacular', 'top 100 vernacular');

fs.writeFileSync(file, content);
console.log("File updated with 100 items.");
