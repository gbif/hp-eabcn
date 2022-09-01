var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      // route: '/data'
    }
  },
  occurrence: {
    mapSettings: {
      lat: 60,
      lng: -100,
      zoom: 4.9115440763665068
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: {
      type: 'and',
      predicates: [
        {
          type: 'equals',
          key: 'taxonKey',
          value: 6
        },
        {
          type: 'in',
          key: 'gadmGid',
          values: [
            "CHN.10_1",
            "CHN.11_1",
            "CHN.15_1",
            "CHN.17_1",
            "CHN.18_1",
            "CHN.19_1",
            "CHN.23_1",
            "CHN.24_1",
            "CHN.31_1",
            "JPN",
            "KOR",
            "PRK",
            "RUS.12_1",
            "RUS.24_1",
            "RUS.28_1",
            "RUS.3_1",
            "RUS.40_1",
            "RUS.56_1",
            "RUS.60_1",
            "RUS.61_1",
            "RUS.83_1"
          ]
        }
      ]
    },
    // occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  }
};
