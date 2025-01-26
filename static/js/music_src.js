const music_src = [
  "https://od.lk/s/NzVfNDY4ODc1ODFf/%28I%20Want%20to%20Be%20Your%29%20Mirror.mp3",
  "https://od.lk/s/NzVfNDY4ODc1ODJf/Are%20You%20Bored%20Yet_%20%28feat.%20Clairo%29.mp3",
  "https://od.lk/s/NzVfNDY4ODc1ODNf/Blossoms.mp3",
  "https://od.lk/s/NzVfNDY4ODc1ODRf/Can%20I%20Call%20You%20Tonight_.mp3",
  "https://od.lk/s/NzVfNDY4ODc1ODVf/Certainty.mp3",
  "https://od.lk/s/NzVfNDY4ODc1ODZf/Dancing%20with%20my%20phone.mp3",
  "https://od.lk/s/NzVfNDY4ODc1ODdf/Down%20the%20Line.mp3",
  "https://od.lk/s/NzVfNDY4ODc1OTJf/Each%20Time%20You%20Fall%20in%20Love.mp3",
  "https://od.lk/s/NzVfNDY4ODc1OTNf/Every%20Time%20Around.mp3",
  "https://od.lk/s/NzVfNDY4ODc1OTRf/Flash.mp3",
  "https://od.lk/s/NzVfNDY4ODc1OTVf/Gamma%20Rays.mp3",
  "https://od.lk/s/NzVfNDY4ODc1OTZf/Go%20Higher.mp3",
  "https://od.lk/s/NzVfNDY4ODc1OTdf/Hot%20Motion.mp3",
  "https://od.lk/s/NzVfNDY4ODc1OThf/Hot%20Rod.mp3",
  "https://od.lk/s/NzVfNDY4ODc1OTlf/If%20I%20Could%20Find%20You%20%28Eternity%29.mp3",
  "https://od.lk/s/NzVfNDY4ODc2MDBf/In%20Between.mp3",
  "https://od.lk/s/NzVfNDY4ODc2MDFf/Italo%20Disco.mp3",
  "https://od.lk/s/NzVfNDY4ODc2MDJf/japan.mp3",
  "https://od.lk/s/NzVfNDY4ODc2MDNf/Lamb%27s%20Wool.mp3",
  "https://od.lk/s/NzVfNDY4ODc1MjRf/Let%20It%20Happen.mp3",
  "https://od.lk/s/NzVfNDY4ODc1MjNf/Love%20Again.mp3",
  "https://od.lk/s/NzVfNDY4ODc1Mjdf/Lovers%20Rock.mp3",
  "https://od.lk/s/NzVfNDY4ODc1Mjhf/May%201st.mp3",
  "https://od.lk/s/NzVfNDY4ODc1Mjlf/Metamodernity.mp3",
  "https://od.lk/s/NzVfNDY4ODc1MzBf/Move%20with%20the%20Season.mp3",
  "https://od.lk/s/NzVfNDY4ODc1MzVf/Mrs%20Magic.mp3",
  "https://od.lk/s/NzVfNDY4ODc1MzZf/New%20Gold%20%28feat.%20Tame%20Impala%20and%20Bootie%20Brown%29.mp3",
  "https://od.lk/s/NzVfNDY4ODc1Mzdf/No%20More%20Lies.mp3",
  "https://od.lk/s/NzVfNDY4ODc1Mzhf/Parking%20Lots.mp3",
  "https://od.lk/s/NzVfNDY4ODc1Mzlf/Past%20Life.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NDhf/Powerlines.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NDlf/Quarterback.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NTBf/Saturnine.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NTFf/Shoot.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NTZf/Sky%20So%20Blue.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NTdf/So%20Good%20at%20Being%20in%20Trouble.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NThf/Social%20Jetlag.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NTlf/Something%20Stupid%20%28From%20_Better%20Call%20Saul_%29.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NjBf/Staring.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NjFf/Sugar.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NjJf/Tangerine.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NjNf/The%20Absent%20Sea.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NjRf/The%20Bay.mp3",
  "https://od.lk/s/NzVfNDY4ODc1Njlf/The%20Fire.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NzBf/THE%20SHADE.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NzFf/What%20You%20Know.mp3",
  "https://od.lk/s/NzVfNDY4ODc1NzVf/Wings%20Of%20Time%20-%20From%20the%20Motion%20Picture%20Dungeons%20%26%20Dragons_%20Honor%20Among%20Thieves.mp3",
  "https://od.lk/s/NzVfNDY4ODc1Nzhf/Within%20You%2C%20Within%20Me.mp3",
  "https://od.lk/s/NzVfNDY4ODc1Nzlf/You%20Are%20the%20Right%20One.mp3",
  "https://od.lk/s/NzVfNDY4ODc1ODBf/Young%20Folks.mp3"
];


/*

let music_src = 
[
  {
    "link": "http://192.168.0.106:5500/songs/Are You Bored Yet_ (feat. Clairo).mp3",
    "title": "Are You Bored Yet? (feat. Clairo)",
    "artist": "Wallows/Clairo",
    "album": "Nothing Happens",
    "year": "2019"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Blossoms.mp3",
    "title": "Blossoms",
    "artist": "Meltt",
    "album": "Eternal Embers",
    "year": "2023"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Can I Call You Tonight_.mp3",
    "title": "Can I Call You Tonight?",
    "artist": "Dayglow",
    "album": "Fuzzybrain",
    "year": "2019"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Certainty.mp3",
    "title": "Certainty",
    "artist": "Temples",
    "album": "Certainty",
    "year": "2016"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Dancing with my phone.mp3",
    "title": "Dancing with my phone",
    "artist": "HYBS",
    "album": "Making Steak",
    "year": "2022"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Down the Line.mp3",
    "title": "Down the Line",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Each Time You Fall in Love.mp3",
    "title": "Each Time You Fall in Love",
    "artist": "Cigarettes After Sex",
    "album": "Cigarettes After Sex",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Every Time Around.mp3",
    "title": "Every Time Around",
    "artist": "Vansire",
    "album": "After Fillmore County",
    "year": "2020"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Flash.mp3",
    "title": "Flash",
    "artist": "Cigarettes After Sex",
    "album": "Cigarettes After Sex",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Gamma Rays.mp3",
    "title": "Gamma Rays",
    "artist": "Temples",
    "album": "Exotico",
    "year": "2023"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Go Higher.mp3",
    "title": "Go Higher",
    "artist": "HYBS",
    "album": "Making Steak",
    "year": "2022"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Hot Motion.mp3",
    "title": "Hot Motion",
    "artist": "Temples",
    "album": "Hot Motion",
    "year": "2019"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Hot Rod.mp3",
    "title": "Hot Rod",
    "artist": "Dayglow",
    "album": "Fuzzybrain",
    "year": "2019"
  },
  {
    "link": "http://192.168.0.106:5500/songs/If I Could Find You (Eternity).mp3",
    "title": "If I Could Find You (Eternity)",
    "artist": "The Holydrug Couple",
    "album": "Moonlust",
    "year": "2015"
  },
  {
    "link": "http://192.168.0.106:5500/songs/In Between.mp3",
    "title": "In Between",
    "artist": "WILLIS",
    "album": "Locals 4",
    "year": "2022"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Italo Disco.mp3",
    "title": "Italo Disco",
    "artist": "Last Dinosaurs",
    "album": "Yumeno Garden",
    "year": "2018"
  },
  {
    "link": "http://192.168.0.106:5500/songs/(I Want to Be Your) Mirror.mp3",
    "title": "(I Want to Be Your) Mirror",
    "artist": "Temples",
    "album": "Volcano",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/japan.mp3",
    "title": "japan",
    "artist": "Yot Club",
    "album": "japan",
    "year": "2019"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Lamb's Wool.mp3",
    "title": "Lamb's Wool",
    "artist": "Foster The People",
    "album": "Lamb's Wool",
    "year": "2020"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Let It Happen.mp3",
    "title": "Let It Happen",
    "artist": "Tame Impala",
    "album": "Currents",
    "year": "2015"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Love Again.mp3",
    "title": "Love Again",
    "artist": "Meltt",
    "album": "Swim Slowly",
    "year": "2019"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Lovers Rock.mp3",
    "title": "Lovers Rock",
    "artist": "TV Girl",
    "album": "French Exit",
    "year": "2014"
  },
  {
    "link": "http://192.168.0.106:5500/songs/May 1st.mp3",
    "title": "May 1st",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Metamodernity.mp3",
    "title": "Metamodernity",
    "artist": "Vansire",
    "album": "Metamodernity",
    "year": "2019"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Move with the Season.mp3",
    "title": "Move with the Season",
    "artist": "Temples",
    "album": "Sun Structures (Deluxe Version)",
    "year": "2014"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Mrs Magic.mp3",
    "title": "Mrs Magic",
    "artist": "Strawberry Guy",
    "album": "Mrs Magic",
    "year": "2019"
  },
  {
    "link": "http://192.168.0.106:5500/songs/New Gold (feat. Tame Impala and Bootie Brown).mp3",
    "title": "New Gold (feat. Tame Impala and Bootie Brown)",
    "artist": "Gorillaz/Tame Impala/Bootie Brown",
    "album": "Cracker Island",
    "year": "2023"
  },
  {
    "link": "http://192.168.0.106:5500/songs/No More Lies.mp3",
    "title": "No More Lies",
    "artist": "Thundercat/Tame Impala",
    "album": "No More Lies",
    "year": "2023"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Parking Lots.mp3",
    "title": "Parking Lots",
    "artist": "Plums",
    "album": "Jen",
    "year": "2015"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Past Life.mp3",
    "title": "Past Life",
    "artist": "Tame Impala",
    "album": "Currents",
    "year": "2015"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Powerlines.mp3",
    "title": "Powerlines",
    "artist": "Tame Impala",
    "album": "Currents B-Sides & Remixes",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Quarterback.mp3",
    "title": "Quarterback",
    "artist": "Wallows",
    "album": "Quarterback",
    "year": "2021"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Saturnine.mp3",
    "title": "Saturnine",
    "artist": "Mystery Jets",
    "album": "Curve Of The Earth",
    "year": "2016"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Shoot.mp3",
    "title": "Shoot",
    "artist": "Promoting Sounds/Ron Grams",
    "album": "Shoot",
    "year": "2021"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Sky So Blue.mp3",
    "title": "Sky So Blue",
    "artist": "Hot Flash Heat Wave",
    "album": "Sky So Blue",
    "year": "2019"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Social Jetlag.mp3",
    "title": "Social Jetlag",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/So Good at Being in Trouble.mp3",
    "title": "So Good at Being in Trouble",
    "artist": "Unknown Mortal Orchestra",
    "album": "II (10 Year Anniversary Edition)",
    "year": "2023"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Something Stupid (From _Better Call Saul_).mp3",
    "title": "Something Stupid (From \"Better Call Saul\")",
    "artist": "Lola Marsh",
    "album": "Something Stupid (From \"Better Call Saul\")",
    "year": "2018"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Staring.mp3",
    "title": "Staring",
    "artist": "Tipling Rock",
    "album": "Staring",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Sugar.mp3",
    "title": "Sugar",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Tangerine.mp3",
    "title": "Tangerine",
    "artist": "Beach Fossils",
    "album": "Somersault",
    "year": "2017"
  },
  {
    "link": "http://192.168.0.106:5500/songs/The Absent Sea.mp3",
    "title": "The Absent Sea",
    "artist": "Meltt",
    "album": "Eternal Embers",
    "year": "2023"
  },
  {
    "link": "http://192.168.0.106:5500/songs/The Bay.mp3",
    "title": "The Bay",
    "artist": "Yot Club",
    "album": "The Bay",
    "year": "2020"
  },
  {
    "link": "http://192.168.0.106:5500/songs/The Fire.mp3",
    "title": "The Fire",
    "artist": "Meltt",
    "album": "Eternal Embers",
    "year": "2023"
  },
  {
    "link": "http://192.168.0.106:5500/songs/THE SHADE.mp3",
    "title": "THE SHADE",
    "artist": "Rex Orange County",
    "album": "WHO CARES?",
    "year": "2022"
  },
  {
    "link": "http://192.168.0.106:5500/songs/What You Know.mp3",
    "title": "What You Know",
    "artist": "Two Door Cinema Club",
    "album": "Tourist History",
    "year": "2010"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Wings Of Time - From the Motion Picture Dungeons & Dragons_ Honor Among Thieves.mp3",
    "title": "Wings Of Time - From the Motion Picture Dungeons & Dragons: Honor Among Thieves",
    "artist": "Tame Impala",
    "album": "Wings Of Time (From the Motion Picture Dungeons & Dragons: Honor Among Thieves)",
    "year": "2023"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Within You, Within Me.mp3",
    "title": "Within You, Within Me",
    "artist": "Meltt",
    "album": "Eternal Embers",
    "year": "2023"
  },
  {
    "link": "http://192.168.0.106:5500/songs/You Are the Right One.mp3",
    "title": "You Are the Right One",
    "artist": "Sports",
    "album": "Naked All the Time",
    "year": "2015"
  },
  {
    "link": "http://192.168.0.106:5500/songs/Young Folks.mp3",
    "title": "Young Folks",
    "artist": "Peter Bjorn and John",
    "album": "Writer's Block",
    "year": "2006"
  }
]
*/