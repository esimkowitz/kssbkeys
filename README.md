# KSSB Keys

![CI](https://github.com/esimkowitz/kssbkeys/workflows/CI/badge.svg) [![Version](https://vsmarketplacebadge.apphb.com/version/esimkowitz.kssbkeys.svg)](https://marketplace.visualstudio.com/items?itemName=esimkowitz.kssbkeys)

This extension has been developed to provide useful commands and keyboard shortcuts to VS Code users who use a screen reader like NVDA. It is very much a work in progress.

## Features

The current release provides the following keyboard shortcuts to enhance the VS Code experience (assumes a Windows keyboard; substitute `Cmd` for `Ctrl` if using a Mac):

- Create a new file from the Explorer pane using `Ctrl + N`
- Create a new folder from the Explorer pane using `Ctrl + Shift + N`
- Focus to the current visible notification using `Tab`
- Dismiss notifications that are currently displayed using `Escape`. This is already the current behavior but the feedback is only visual. Also since we're adding a new action when notifications are visible, this ensures the least confusion.
