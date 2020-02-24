const theme = {
  padding: '10',
  fontMain: 'Fira Mono',
  fontSecondary: 'Work Sans'
}

export const LightTheme = {
  ...theme,
  bgColor: 'rgb(255,255,255)',
  textPrimary: 'rgb(1,1,1)',
  textSecondary: 'rgb(100,100,100)',
  colorUnfocused: 'rgb(150,150,150)'
}

export const DarkTheme = {
  ...theme,
  bgColor: 'rgb(1,1,1)',
  textPrimary: 'rgb(255,255,255)',
  textSecondary: 'rgb(150,150,150)',
  colorUnfocused: 'rgb(100,100,100)'
}
