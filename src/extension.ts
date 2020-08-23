import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const newFolder = vscode.commands.registerCommand('kssbkeys.explorerNewFolder', () => {
        vscode.window.showInformationMessage("Enter folder name.");
		vscode.commands.executeCommand("explorer.newFolder");
	});

	context.subscriptions.push(newFolder);
}

export function deactivate() {}
