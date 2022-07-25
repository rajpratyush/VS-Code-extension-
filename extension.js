const vscode = require('vscode');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */


function activate(context) {
	let disposable = vscode.commands.registerCommand('txtfetcher.helloWorld', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		let documentText;
		let data;
		if (editor) {
			let document = editor.document;

			// Get the document text
			documentText = document.getText();

			data = documentText.split("def ")

			console.log(data[1])

			console.log(data[2])


			// DO SOMETHING WITH `documentText`
		}

		vscode.window.showInformationMessage("Hai");
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
