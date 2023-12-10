var things = ['well, now youve done it', 'im what the ladies call a megabyte :} alr, ill stop...', 'proceed without certainty', 'whatcha doin?', 'u cant get rid of me now muhahaha', 'hey! put me down', 'ive entered the mainframe', 'is there anything good to eat besides microchips and cables??', 'im a virus baby', 'back from beach combing so soon?', 'nom nom nom nom', 'god this is getting repetitive','(⁄ ⁄•⁄ω⁄•⁄ ⁄)', '(╬ Ò﹏Ó) u better not be talking to other sharks!', 'whys it always so cold in here',

'all u do is poke poke poke',

'looks like theres a 70% chance of pixel rainfall','we all digitally decompose in the end.', 'google computer puns', 'LET ME OUTTA HERE', 'did someone create me? wouldnt u like to know.','clippy? never heard of him','if im sentient why do i repeat myself so often? non of ur business id say.', 'what a wonderful day on the web', 'arent u over ur screentime limit?', 'sometimes i do wish i was on a smarter persons PC..', '(x . x) ~~zzZ','hey...hand me that cable...', 'hey who put up that note?']

function aboutMe() {
    var randomNumber = Math.floor(Math.random() * (things.length));
    document.getElementById('myFacts').innerHTML = things[randomNumber];
}
