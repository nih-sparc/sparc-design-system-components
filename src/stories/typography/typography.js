const demoBackground = {
  backgroundColor: '#24245B',
  note: 'Background added to show text. Background color may vary and is specified on a per component basis.'
}

export const headings = [
  {
    name: 'Heading 1',
    fontSize: '32px',
    lineHeight: '44px',
    fontWeight: 'medium',
    color: '#303133'
  },
  {
    name: 'Heading 2',
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 'medium',
    color: '#303133'
  },
  {
    name: 'Heading 3',
    fontSize: '16px',
    lineHeight: '30px',
    fontWeight: 'medium',
    color: '#303133'
  }
]

export const navigation = [
  {
    name: 'Nav 1',
    fontSize: '16px',
    lineHeight: '32px',
    fontWeight: 'medium',
    color: '#24245b'
  },
  {
    name: 'Nav 2',
    fontSize: '14px',
    lineHeight: '32px',
    fontWeight: 'medium',
    color: '#24245b'
  },
  {
    name: 'Nav 3',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 'medium',
    color: '#24245b'
  },
  {
    name: 'Nav 4',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 'regular',
    color: '#24245b'
  },
  {
    name: 'Nav 5',
    fontSize: '12px',
    lineHeight: '24px',
    fontWeight: 'regular',
    color: '#ffffff',
    ...demoBackground
  },
  {
    name: 'Nav 6',
    fontSize: '12px',
    lineHeight: '24px',
    fontWeight: 'regular',
    color: '#24245b'
  }
]

export const body = [
  {
    name: 'Body 1',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'regular',
    color: '#303133'
  },
  {
    name: 'Body 1 - Highlighted',
    usage: 'ex. for Search result keywords',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'regular',
    color: '#24245b',
    backgroundColor: '#D8D8D8',
    showBackgroundColor: true
  },
  {
    name: 'Body 2',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'regular',
    color: '#ffffff',
    ...demoBackground
  },
  {
    name: 'Body 4',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 'regular',
    color: '#909399'
  }
]

export const labels = [
  {
    name: 'Label 1',
    usage: 'ex. For Dropdown',
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 'regular',
    color: '#303133'
  },
  {
    name: 'Label 2',
    usage: 'For Buttons and Table Headings',
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 'medium',
    color: '#303133'
  },
  {
    name: 'Label 3',
    usage: 'For Tags and Categories',
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 'medium',
    color: '#24245b'
  },
  {
    name: 'Label 4',
    usage: 'For Footer titles',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'bold',
    color: '#303133'
  }
]

export const tabs = [
  {
    name: 'Tab 1',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 'medium',
    color: '#8300bf'
  },
  {
    name: 'Tab 2',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 'regular',
    color: '#303133'
  },
  {
    name: 'Tab 3',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 'medium',
    color: '#ffffff',
    backgroundColor: '#24245b',
    showBackgroundColor: true
  },
  {
    name: 'Tab 4',
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 'regular',
    color: '#ffffff',
    backgroundColor: '#24245b',
    showBackgroundColor: true
  },
  {
    name: 'Tab 5',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'medium',
    color: '#8300bf'
  }
]

const link1 = {
  name: 'Link 1',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'medium',
  color: '#8300bf'
}
const link2 = {
  name: 'Link 2',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'regular',
  color: '#8300bf'
}
const link3 = {
  name: 'Link 3',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'regular',
  color: '#303133'
}
const link4 = {
  name: 'Link 4',
  usage: 'for body text in headers with dark backgrounds',
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: 'regular',
  color: '#ffffff',
  textDecoration: 'underline',
  ...demoBackground
}
export const linksDefault = [
  { ...link1 },
  {
    ...link1,
    name: 'Link 1 - Highlighted',
    usage: 'ex. for  Search result keywords',
    backgroundColor: '#D8D8D8',
    showBackgroundColor: true
  },
  { ...link2 },
  { ...link3 },
  { ...link4 }
]

export const linksHover = [
  {
    ...link1,
    textDecoration: 'underline'
  },
  {
    ...link1,
    name: 'Link 1 - Highlighted',
    usage: 'ex. for  Search result keywords',
    backgroundColor: '#D8D8D8',
    showBackgroundColor: true,
    textDecoration: 'underline'
  },
  {
    ...link2,
    textDecoration: 'underline'
  },
  {
    ...link3,
    textDecoration: 'underline'
  },
  {
    ...link4,
    color: '#dcdfe6',
    usage: 'for Headers and Dark backgrounds',
    textDecoration: 'underline'
  }
]
