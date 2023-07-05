---
layout: literature
description: Explore the literature enabled by occurrence data of East Asia as well as from researchers in the East Asia.
permalink: /literature
---
<script>
  var siteConfig = {
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ['KR', 'KP', 'JP', 'CN', 'RU', 'TW', 'MN']
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['KR', 'KP', 'JP', 'CN', 'RU', 'TW', 'MN']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  }
};
</script>
#copid from hp-bison (https://github.com/gbif/hp-bison/blob/master/literature.md)
