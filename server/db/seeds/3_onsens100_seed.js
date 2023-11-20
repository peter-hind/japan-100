export async function seed(knex) {
  // Inserts seed entries
  await knex('onsens100').insert([
    {
      id: 1,
      name: 'Jozankei-onsen',
      prefecture: 'Hokkaido',
      benefits: 'Cuts, Burns, Wellbeing',
      description:
        "The largest hot spring town in Hokkaido  with about 20 ryokan inns, Jozankei Onsen in Shikotsu-Toya National Park is one of Hokkaido's major tourist attractions, drawing 1.4 million visitors a year.",
      geojson: 'geojson',
    },
    {
      id: 2,
      name: 'Noboribetsu-onsen',
      prefecture: 'Hokkaido',
      benefits: 'Skin Conditions, Blood Pressure, Wellbeing',
      description:
        'Natural spring waters flow down from Jigokudani (Hell Valley) , resulting in naturally created baths and nine types of water.',
      geojson: 'geojson',
    },
    {
      id: 3,
      name: 'Suyaku-onsen',
      prefecture: 'Aomori-ken',
      benefits: 'Diabetes, Childhood Illness, Heart Disease',
      description:
        'The specialty of the hot spring is the "Sennin Bath" (A thousand people bath).',
      geojson: 'geojson',
    },
    {
      id: 4,
      name: 'Tsuta-onsen',
      prefecture: 'Aomori-ken',
      benefits: 'Wellbeing, Burns, Heart Disease',
      description:
        'Records of hot spring resorts here date all the way back to the year 1147. In the 1900s and onward, authors and celebrities began visiting Tsuta Onsen to unwind.',
      geojson: 'geojson',
    },
    {
      id: 5,
      name: 'Hanamaki-onsen',
      prefecture: 'Iwate-ken',
      benefits: 'Diabetes, Cuts, Burns',
      description:
        'Famous for its outdoor baths constructed from Japanese Cypress trees, Hanamaki Onsen is one of the best-known hot springs in Japan.',
      geojson: 'geojson',
    },
    {
      id: 6,
      name: 'Geto-onsen',
      prefecture: 'Iwate-ken',
      benefits: 'Heart Disease, Childhood Illness, Wellbeing',
      description:
        "Some tourists come not only for springs, but to spend more days and enjoy one of Japan's most beautiful nature spots.",
      geojson: 'geojson',
    },
    {
      id: 7,
      name: 'Sukawa-onsen',
      prefecture: 'Akita-ken',
      benefits: 'Menstrual Problems, Skin Disease, Burns',
      description:
        'Offers great views of the Dainiciiwa rock formation from its outdoor pools, especially in Autumn.',
      geojson: 'geojson',
    },
    {
      id: 8,
      name: 'Naruko-onsen',
      prefecture: 'Miyagi-ken',
      benefits: 'Diabetes, Wellbeing, Cuts',
      description:
        'It is counted as one of the three Tohoku famous hot springs with Iizaka Onsen in Fukushima Prefecture and Akiu Onsen in Miyagi Prefecture.',
      geojson: 'geojson',
    },
    {
      id: 9,
      name: 'Togatta-onsen',
      prefecture: 'Miyagi-ken',
      benefits: 'Arteriosceloresis, Leg injuries',
      description:
        'One of the three top onsen in Tohoku, it is famous for miraculously healing problmes with the legs.',
      geojson: 'geojson',
    },
    {
      id: 10,
      name: 'Gaga-onsen',
      prefecture: 'Miyagi-ken',
      benefits: 'Stress, Digestive Issues, Skin Disease',
      description:
        'Gaga Onsen is recognized as one of the three most efficacious hot springs for treating gastrointestinal illness.',
      geojson: 'geojson',
    },
  ])
}
