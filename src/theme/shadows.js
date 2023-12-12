export const Shadow = {
  GENERIC: {
    LIGHT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    MEDIUM: '0px 4px 4px 2px rgba(0, 0, 0, 0.25)',
    STRONG: ''
  },
  CARD: {
    normal: (color = '#CDCDCD') =>
      `0 0 0 1px ${color}, 0 5px 5px rgba(12, 12, 12, 0.05), 0 0 24px rgba(12, 12, 12, 0.015)`,
    hover: (color = '#CDCDCD') =>
      `0 0 0 1px ${color}, 0 5px 10px rgba(12, 12, 12, 0.5), 0 0 40px rgba(12, 12, 12, 0.015)`,
    FOCUS: '',
    ACTIVE: ''
  },
  NAV: '0px 4px 12px 8px rgba(0, 0, 0, 0.25)',
  POPOUT: '0 4px 12px rgba(12, 12, 12, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)',
  MODAL:
    '0 24px 38px 3px rgba(12, 12, 12, 0.16), 0 9px 86px 8px rgba(12, 12, 12, 0.1), 0 11px 15px -7px rgba(12, 12, 12, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
}
