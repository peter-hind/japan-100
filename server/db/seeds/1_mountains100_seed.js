export async function seed(knex) {
  // Inserts seed entries
  await knex('mountains100').insert([
    {
      id: 1,
      name: 'Fuji-san',
      prefecture: 'Shizuoka-ken / Yamanashi-ken',
      elevation_m: 3776,
      description:
        "Japan's highest and most iconic peak, revered in art and literature.",
      geojson: 'geojson',
    },
    {
      id: 2,
      name: 'Kita-dake',
      prefecture: 'Yamanashi-ken',
      elevation_m: 3192,
      description:
        'Rising 3,193 meters high, Kita-dake is the second highest peak in Japan, offering a thrilling challenge to hikers.',
      geojson: 'geojson',
    },
    {
      id: 3,
      name: 'Hotaka-dake',
      prefecture: 'Nagano-ken / Gifu-ken',
      elevation_m: 3190,
      description:
        "Nestled within the rugged terrain of the Northern Japanese Alps, this stunning location boasts alpine beauty that's a hiker's dream.",
      geojson: 'geojson',
    },
    {
      id: 4,
      name: 'Aino-dake',
      prefecture: 'Shizuoka-ken / Yamanashi-ken',
      elevation_m: 3189,
      description:
        'This destination offers rugged trails and breathtaking alpine views, providing hikers with an authentic and challenging experience.',
      geojson: 'geojson',
    },
    {
      id: 5,
      name: 'Yariga-take',
      prefecture: 'Nagano-ken / Gifu-ken',
      elevation_m: 3180,
      description: 'Known as the "Spear Mountain" due to its sharp peak.',
      geojson: 'geojson',
    },
    {
      id: 6,
      name: 'Warusawa-dake',
      prefecture: 'Shizuoka-ken',
      elevation_m: 3141,
      description: 'Known for its rugged terrain and panoramic views.',
      geojson: 'geojson',
    },
    {
      id: 7,
      name: 'Akaishi-dake',
      prefecture: 'Shizuoka-ken / Nagano-ken',
      elevation_m: 3120,
      description: 'A challenging peak in the Southern Alps.',
      geojson: 'geojson',
    },
    {
      id: 8,
      name: 'Ontake-san',
      prefecture: 'Nagano-ken',
      elevation_m: 3067,
      description: 'A sacred volcano and a popular pilgrimage site.',
      geojson: 'geojson',
    },
    {
      id: 9,
      name: 'Shiomi-dake',
      prefecture: 'Shizuoka-ken / Nagano-ken',
      elevation_m: 3047,
      description: 'Offers stunning panoramic views and challenging routes.',
      geojson: 'geojson',
    },
    {
      id: 10,
      name: 'Senjoga-take',
      prefecture: 'Yamanashi-ken / Nagano-ken',
      elevation_m: 3033,
      description: 'Known for its rugged terrain and stunning alpine beauty.',
      geojson: 'geojson',
    },
  ])
}
