export function setSelectedTheme(theme) {
  return { type: 'SET_SELECTED_THEME', theme }
}
export function toggleThemeDropdownIsOpen() {
  return { type: 'TOGGLE_THEME_DROPDOWN_IS_OPEN' }
}
