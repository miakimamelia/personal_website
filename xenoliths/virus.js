var things = [
    'yup, im still here.',
    'that one looks like a shrimp chip',
    'i hope you put those back where you found them',
    'whats so special about these? i see them everyday on my way to work',
    'hey! that one looks like u!',
    'these better not turn into nfts',
    'u have a talent in making up ridiculous names, next you will be calling me a Selachimorpha.',
    'that one looks like a shrimp chip',
    '(x . x) ~~zzZ',
    'bro will call anything rare these days',
    'round and around and around and around we go',
    'ive seen better', 
    'this has to be a joke'

  ];
  
  function aboutMe() {
    var randomNumber = Math.floor(Math.random() * (things.length));
    document.getElementById('myFacts').innerHTML = things[randomNumber];
  }
  