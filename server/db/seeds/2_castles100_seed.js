export async function seed(knex) {
  // Inserts seed entries
  await knex('castles100').insert([
    {
      id: 1,
      name: 'Mito-jo',
      prefecture: 'Ibaraki-ken',
      ruin_status: true,
      description:
        'It was originally named Baba castle, however after it was taken by the Edo clan, it was expanded and given its present name.',
      geojson: 'geojson',
    },
    {
      id: 2,
      name: 'Bannaji-jo',
      prefecture: 'Tochigi-ken',
      ruin_status: false,
      description:
        'This temple still retains many remnants of its origins as a fortified samurai residence.',
      geojson: 'geojson',
    },
    {
      id: 3,
      name: 'Minowa-jo',
      prefecture: 'Gunma-ken',
      ruin_status: true,
      description:
        'Takeda Shingen used Minowa Castle has his regional headquarters in Kōzuke, and at various times appointed generals such as Sanada Yukitaka and Naitō Masatoyo as castellans.',
      geojson: 'geojson',
    },
    {
      id: 4,
      name: 'Kanayama-jo',
      prefecture: 'Gunma-ken',
      ruin_status: true,
      description:
        'A round pond still remaining in this location is a surviving remnant of a Japanese garden that once occupied this site.',
      geojson: 'geojson',
    },
    {
      id: 5,
      name: 'Hachigata-jo',
      prefecture: 'Saitama-ken',
      ruin_status: true,
      description:
        'Hachigata Castle was regarded as a key to the control of Musashi Province and was a major stronghold for the Later Hōjō clan during the Sengoku Period.',
      geojson: 'geojson',
    },
    {
      id: 6,
      name: 'Kawagoe-jo',
      prefecture: 'Saitama-ken',
      ruin_status: false,
      description:
        'It is the closest castle to Tokyo to be accessible to visitors, as Edo castle is now the Imperial palace, and largely inaccessible.',
      geojson: 'geojson',
    },
    {
      id: 7,
      name: 'Sakura-jo',
      prefecture: 'Chiba-ken',
      ruin_status: true,
      description:
        'Sakura Castle was considered a location of strategic importance, in particular as it protected the eastern flank of Edo.',
      geojson: 'geojson',
    },
    {
      id: 8,
      name: 'Edo-jo',
      prefecture: 'Tokyo-to',
      ruin_status: true,
      description:
        'After the resignation of the shōgun and the Meiji Restoration, it became the Tokyo Imperial Palace. Some moats, walls and ramparts of the castle survive to this day.',
      geojson: 'geojson',
    },
    {
      id: 9,
      name: 'Hachioji-jo',
      prefecture: 'Tokyo-to',
      ruin_status: true,
      description:
        'It is called Hachioji because Hachioji Gongen; a deity of the Gion faith is enshrined there.',
      geojson: 'geojson',
    },
    {
      id: 10,
      name: 'Odawara-jo',
      prefecture: 'Kanagawa-ken',
      ruin_status: false,
      description:
        'Odawara was a stronghold of the Doi clan during the Kamakura period, and a fortified residence built by their collateral branch, the Kobayakawa clan.',
      geojson: 'geojson',
    },
  ])
}
