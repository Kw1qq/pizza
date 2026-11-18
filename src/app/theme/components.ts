import type { MantineThemeComponents } from '@mantine/core'

import actionIconStyles from './styles-components/action-icon.module.css'
import badgeStyles from './styles-components/badge.module.css'
import buttonStyles from './styles-components/button.module.css'
import cardStyles from './styles-components/card.module.css'
import chipStyles from './styles-components/chip.module.css'
import dialogStyles from './styles-components/dialog.module.css'
import inputStyles from './styles-components/input.module.css'
import selectionStyles from './styles-components/selection.module.css'
import tabsStyles from './styles-components/tabs.module.css'

export const components: MantineThemeComponents = {
  ActionIcon: {
    classNames: actionIconStyles,
    defaultProps: { color: 'pizza', variant: 'light', radius: 'xl' }
  },
  Anchor: {
    defaultProps: { c: 'brown.8', underline: 'never' }
  },
  Badge: {
    classNames: badgeStyles,
    defaultProps: { color: 'pizza', radius: 'xl', tt: 'none' }
  },
  Button: {
    classNames: buttonStyles,
    defaultProps: { radius: 'xl', size: 'md', color: 'pizza' }
  },
  Card: {
    classNames: cardStyles,
    defaultProps: { radius: 'xl', padding: 'lg' }
  },
  Chip: {
    classNames: chipStyles,
    defaultProps: { color: 'pizza', radius: 'xl', size: 'md' }
  },
  Input: {
    classNames: inputStyles,
    defaultProps: { radius: 'xl', size: 'md' }
  },
  TextInput: {
    classNames: inputStyles,
    defaultProps: { radius: 'xl', size: 'md' }
  },
  Textarea: {
    classNames: inputStyles,
    defaultProps: { radius: 'md', size: 'md', autosize: true, minRows: 3 }
  },
  Select: {
    classNames: inputStyles,
    defaultProps: { radius: 'xl', size: 'md' }
  },
  Checkbox: {
    classNames: selectionStyles,
    defaultProps: { color: 'pizza', size: 'md', radius: 'sm' }
  },
  Radio: {
    classNames: selectionStyles,
    defaultProps: { color: 'pizza', size: 'md' }
  },
  Tabs: {
    classNames: tabsStyles,
    defaultProps: { color: 'pizza' }
  },
  Modal: {
    classNames: dialogStyles,
    defaultProps: { radius: 'xl', centered: true }
  },
  Drawer: {
    classNames: dialogStyles,
    defaultProps: { radius: 'xl' }
  }
}
