// 03_Shortcuts.js
// VS Code Default Shortcuts for Windows

// ============================================
// VS CODE SHORTCUTS - WINDOWS
// ============================================

const vsCodeShortcuts = {
  // File Operations
  fileOperations: [
    { shortcut: 'Ctrl + N', description: 'New File' },
    { shortcut: 'Ctrl + O', description: 'Open File' },
    { shortcut: 'Ctrl + K Ctrl + O', description: 'Open Folder' },
    { shortcut: 'Ctrl + S', description: 'Save File' },
    { shortcut: 'Ctrl + Shift + S', description: 'Save As' },
    { shortcut: 'Ctrl + W', description: 'Close File' },
    { shortcut: 'Ctrl + Shift + W', description: 'Close Folder' },
    { shortcut: 'Ctrl + K W', description: 'Close All Editors' },
  ],

  // Editing
  editing: [
    { shortcut: 'Ctrl + Z', description: 'Undo' },
    { shortcut: 'Ctrl + Shift + Z', description: 'Redo' },
    { shortcut: 'Ctrl + X', description: 'Cut Line' },
    { shortcut: 'Ctrl + C', description: 'Copy Line' },
    { shortcut: 'Ctrl + V', description: 'Paste' },
    { shortcut: 'Ctrl + Shift + K', description: 'Delete Line' },
    { shortcut: 'Ctrl + Enter', description: 'Insert Line Below' },
    { shortcut: 'Ctrl + Shift + Enter', description: 'Insert Line Above' },
    { shortcut: 'Alt + Up', description: 'Move Line Up' },
    { shortcut: 'Alt + Down', description: 'Move Line Down' },
    { shortcut: 'Ctrl + Shift + Alt + Up', description: 'Copy Line Up' },
    { shortcut: 'Ctrl + Shift + Alt + Down', description: 'Copy Line Down' },
  ],

  // Selection & Navigation
  selectionNavigation: [
    { shortcut: 'Ctrl + A', description: 'Select All' },
    { shortcut: 'Ctrl + L', description: 'Select Line' },
    { shortcut: 'Ctrl + Home', description: 'Go to Beginning of File' },
    { shortcut: 'Ctrl + End', description: 'Go to End of File' },
    { shortcut: 'Ctrl + G', description: 'Go to Line' },
    { shortcut: 'Ctrl + F', description: 'Find' },
    { shortcut: 'Ctrl + H', description: 'Replace' },
    { shortcut: 'Ctrl + F3', description: 'Find Next Match' },
    { shortcut: 'Ctrl + Shift + F3', description: 'Find Previous Match' },
  ],

  // View & Display
  viewDisplay: [
    { shortcut: 'Ctrl + ,', description: 'Open Settings' },
    { shortcut: 'Ctrl + K Ctrl + S', description: 'Open Keyboard Shortcuts' },
    { shortcut: 'Ctrl + `', description: 'Toggle Integrated Terminal' },
    { shortcut: 'Ctrl + B', description: 'Toggle Sidebar' },
    { shortcut: 'Ctrl + Shift + X', description: 'Open Extensions' },
    { shortcut: 'Ctrl + Shift + G', description: 'Open Source Control' },
    { shortcut: 'Ctrl + Shift + D', description: 'Open Debug' },
    { shortcut: 'F11', description: 'Toggle Full Screen' },
    { shortcut: 'Ctrl + Shift + F', description: 'Open Search in Folder' },
  ],

  // Code Editing
  codeEditing: [
    { shortcut: 'Ctrl + /', description: 'Toggle Line Comment' },
    { shortcut: 'Shift + Alt + A', description: 'Toggle Block Comment' },
    { shortcut: 'Ctrl + ]', description: 'Indent Line' },
    { shortcut: 'Ctrl + [', description: 'Outdent Line' },
    { shortcut: 'Ctrl + Alt + Up', description: 'Add Cursor Above' },
    { shortcut: 'Ctrl + Alt + Down', description: 'Add Cursor Below' },
    { shortcut: 'Ctrl + D', description: 'Add Selection to Next Match' },
    { shortcut: 'Ctrl + K Ctrl + D', description: 'Move Last Selection to Next Match' },
  ],



  // Debugging
  debugging: [
    { shortcut: 'F5', description: 'Start Debugging' },
    { shortcut: 'Shift + F5', description: 'Stop Debugging' },
    { shortcut: 'F9', description: 'Toggle Breakpoint' },
    { shortcut: 'F10', description: 'Step Over' },
    { shortcut: 'F11', description: 'Step Into' },
    { shortcut: 'Shift + F11', description: 'Step Out' },
  ],

  // Other
  other: [
    { shortcut: 'F12', description: 'Go to Definition' },
    { shortcut: 'Shift + F12', description: 'Find All References' },
    { shortcut: 'Ctrl + Space', description: 'Trigger Suggest' },
    { shortcut: 'Alt + F12', description: 'Open Definition to the Side' },
  ],
};

// Display function to print shortcuts in table format
function displayShortcuts() {
  console.log( '\n===== VS CODE SHORTCUTS FOR WINDOWS =====\n' );

  for ( const category in vsCodeShortcuts ) {
    console.log( `\n--- ${ category.toUpperCase() } ---` );
    console.log( 'Shortcut | Description' );
    console.log( '---------|-------------------------' );

    vsCodeShortcuts[ category ].forEach( item => {
      console.log( `${ item.shortcut.padEnd( 15 ) } | ${ item.description }` );
    } );
  }
}

// Call the function to display shortcuts
displayShortcuts();

// Export for use in other files (if needed)
// module.exports = vsCodeShortcuts;
