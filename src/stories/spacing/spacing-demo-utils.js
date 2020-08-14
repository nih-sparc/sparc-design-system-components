export const spaces = [
  0,
  2,
  4,
  8,
  12,
  16,
  24,
  32,
  40,
  48,
  56,
  64
]

export const areas = [
  {
    unit: 'y',
    suffix: ['top', 'bottom']
  },
  {
    unit: 'x',
    suffix: ['left', 'right']
  },
  {
    unit: 'b',
    suffix: ['bottom']
  },
  {
    unit: 't',
    suffix: ['top']
  },
  {
    unit: 'l',
    suffix: ['left']
  },
  {
    unit: 'r',
    suffix: ['right']
  }
]

export const generateTable = (unit, attribute) => {
    return spaces.map(space => {
    const rem = space / 16;

    return areas.map(area => {
      return {
        "class": `.${unit}${area.unit}-${space}`,
        "property": area.suffix.map(suffix => { return `${attribute}-${suffix}: ${rem}rem;` })
      }
    }).flat()
  }).flat()
}
