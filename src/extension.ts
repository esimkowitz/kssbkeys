import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const newFolder = vscode.commands.registerCommand('kssbkeys.explorerNewFolder', () => {
		vscode.window.showInformationMessage("Enter folder name");
		vscode.commands.executeCommand("explorer.newFolder");
	});

	const dismissNotification = vscode.commands.registerCommand('kssbkeys.dismissNotification', () => {
		vscode.window.showInformationMessage("Notification dismissed");
		vscode.commands.executeCommand("notifications.hideToasts");
	});

	context.subscriptions.push(newFolder, dismissNotification);
}

export function deactivate() {}
