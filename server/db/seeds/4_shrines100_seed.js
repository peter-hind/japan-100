export async function seed(knex) {
  // Inserts seed entries
  await knex('shrines100').insert([
    {
      id: 1,
      name: 'Hokkaido-jingu',
      prefecture: 'Hokkaido',
      kami: 'Okunitama, Okuninushi, Sukunahikona, Meiji-teika',
      description:
        'The Hokkaido Shrine enshrines four kami including the soul of the Emperor Meiji. A number of early explorers of Hokkaidō such as Mamiya Rinzō are also enshrined.',
      geojson: 'geojson',
    },
    {
      id: 2,
      name: 'Iwakiyama-jinja',
      prefecture: 'Aomori-ken',
      kami: 'Okuninushi',
      description:
        'The main festival of the shrine, the Oyama-sankei, features a parade from the shrine to the top of the mountain, and is held annually at the time of the autumn equinox.',
      geojson: 'geojson',
    },
    {
      id: 3,
      name: 'Komagata-jinja',
      prefecture: 'Iwate-ken',
      kami: 'Akagiyama-no-kami',
      description:
        'The name "Komagata" is derived from an ancient poem that referred to Akagi Shrine as the "Kara Shrine," singing praises of a spinning top (koma) as "kara."',
      geojson: 'geojson',
    },
    {
      id: 4,
      name: 'Shiogama-jinja',
      prefecture: 'Miyagi-ken',
      kami: 'Shiotsuchi-Oji-no-kami,  Takemikazuchi-no-Kami, Futsunushi-no-Kami',
      description:
        'The kami of Shiogama Jinja have long been worshipped as guardian deities of seafarers, notably fisherman, and of pregnant women.',
      geojson: 'geojson',
    },
    {
      id: 5,
      name: 'Shiwahiko-jinja',
      prefecture: 'Miyagi-ken',
      kami: 'Shihiko-Okami',
      description:
        'It was formerly situated in Iwakiri, to the west of Shiogama, but it was transferred to the precincts of Shiogama Jinja in 1874.',
      geojson: 'geojson',
    },
    {
      id: 6,
      name: 'Gassan-jinja',
      prefecture: 'Yamagata-ken',
      kami: 'Tsukuyomi-no-Mikoto',
      description:
        'Located on the peak of Mount Gassan, Gassan Jinja is one of the most beautiful shrines in Japan.',
      geojson: 'geojson',
    },
    {
      id: 7,
      name: 'Yudonosan-jinja',
      prefecture: 'Yamagata-ken',
      kami: 'Oyamatsu-no-Mikoto, Onamuchi-no-Mikoto, Sukunahiko-no-Mikoto',
      description:
        'The shrine is unique in that it has no main building, but instead uses the mountain itself as a Kannabi, or a rock as an Iwakura.',
      geojson: 'geojson',
    },
    {
      id: 8,
      name: 'Dewa-jinja',
      prefecture: 'Yamagata-ken',
      kami: 'Ukanomitama',
      description:
        'A path of 2,446 stone steps leads up to this shrine amidst 600-year-old sugi trees, past the famous Gojunoto five story pagoda.',
      geojson: 'geojson',
    },
    {
      id: 9,
      name: 'Koshio-jinja',
      prefecture: 'Akita-ken',
      kami: 'Ohiko-no-mikoto, Takemikazuchi-no-mikoto',
      description:
        'A path of 2,446 stone steps leads up to this shrine amidst 600-year-old sugi trees, past the famous Gojunoto five story pagoda.',
      geojson: 'geojson',
    },
    {
      id: 10,
      name: 'Babatsutsukowake-jinja',
      prefecture: 'Fukushima-ken',
      kami: 'Ajisukitakahikone-no-mikoto',
      description:
        'Inside the precinct, ancient trees with hundreds of years of history stand tall, silently watching.',
      geojson: 'geojson',
    },
  ])
}
