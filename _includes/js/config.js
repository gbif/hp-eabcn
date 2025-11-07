var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "MERCATOR": [
          "BRIGHT",
          "NATURAL"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "vocabularyLocale": "en",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {},
  "occurrenceSearch": {
    "scope": {
      "type": "and",
      "predicates": [
        {
          "type": "equals",
          "key": "taxonKey",
          "value": 6
        },
        {
          "type": "in",
          "key": "gadmGid",
          "values": [
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
            "RUS.83_1",
            "MNG",
            "TWN"
          ]
        }
      ]
    },
    "mapSettings": {
      "lat": 54.67,
      "lng": 146.28,
      "zoom": 3.59
    }
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {}
}