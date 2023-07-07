---
# copid from hp-bison (https://github.com/gbif/hp-bison/blob/master/literature.md)
layout: literature
description: Default template for occurrence search
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
