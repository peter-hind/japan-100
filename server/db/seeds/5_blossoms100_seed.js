export async function seed(knex) {
  // Inserts seed entries
  await knex('blossoms100').insert([
    {
      id: 1,
      name: 'Kyusho-koen',
      prefecture: 'Tottori-ken',
      tree_count: 240,
      description:
        'With lanterns illuminating the blossoms and stalls selling food and drinks, the park is a popular yozakura destination.',
      geojson: 'geojson',
    },
    {
      id: 2,
      name: 'Matsuejozan-koen',
      prefecture: 'Shimane-ken',
      tree_count: 200,
      description:
        'Matsue Castle was designated a national treasure in 2015, and it is surrounded today by a park with some 200 somei yoshino, yaezakura, and shidarezakura trees.',
      geojson: 'geojson',
    },
    {
      id: 3,
      name: 'Kakuzan-koen',
      prefecture: 'Okayama-ken',
      tree_count: 1000,
      description:
        "In early April, the somei yoshino trees that have been planted throughout the castle's main enclosure (honmaru) burst into dazzling light pink. The blossoms are also stunning when illuminated at night.",
      geojson: 'geojson',
    },
    {
      id: 4,
      name: 'Ueno-koen',
      prefecture: 'Hiroshima-ken',
      tree_count: 600,
      description:
        'Each year in early April, crowds throng to the sakura festival, held near the pond, to view performances on a specially constructed outdoor stage and to shop at stalls selling food and local specialties.',
      geojson: 'geojson',
    },
    {
      id: 5,
      name: 'Kotohiki-koen',
      prefecture: 'Kagawa-ken',
      tree_count: 200,
      description:
        'It is renowned for its yozakura, with approximately 200 somei yoshino being lit up with lanterns during the height of the cherry blossom season.',
      geojson: 'geojson',
    },
    {
      id: 6,
      name: 'Kagamino-koen',
      prefecture: 'Kochi-ken',
      tree_count: 600,
      description:
        "Kagamino Park's biggest attraction is an enchanting, 200-meter-long sakura tunnel that is lit up with lanterns at night during the hanami season.",
      geojson: 'geojson',
    },
    {
      id: 7,
      name: 'Nishi-koen',
      prefecture: 'Fukuoka-ken',
      tree_count: 1300,
      description:
        'The landscaping of Nishi Park began in 1885, and with the planting of many trees, including 1,300 cherries, a verdant oasis for local residents has materialized in the middle of an urban metropolis.',
      geojson: 'geojson',
    },
    {
      id: 8,
      name: 'Omura-koen',
      prefecture: 'Nagasaki-ken',
      tree_count: 2000,
      description:
        'The park is famous for its Omurazakura blossoms as well as its approximately 300,000 Japanese irises that flower from late May to mid-June.',
      geojson: 'geojson',
    },
    {
      id: 9,
      name: 'Ichifusa-damu',
      prefecture: 'Kumamoto-ken',
      tree_count: 10000,
      description:
        "Mizukami seeks to become Japan's best sakura-viewing village. In addition to the 10,000 somei yoshino trees along the dam lake, it also boasts a “cherry blossoms gallery” where some 70 varieties of cherry blossoms can be seen.",
      geojson: 'geojson',
    },
    {
      id: 10,
      name: 'Nagojo-koen',
      prefecture: 'Okinawa-ken',
      tree_count: 3800,
      description:
        'The cherry trees around the Nago Castle Ruins are among the earliest blooming sakuras in Japan.',
      geojson: 'geojson',
    },
  ])
}
