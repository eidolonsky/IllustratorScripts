function saveAsAIEPSPNG(dest) {
    if (app.documents.length>0) {
        var saveAIOptions = new IllustratorSaveOptions()
        var aiDoc = new File(dest)
        saveAIOptions.embedICCProfile = true
        saveAIOptions.embedLinkedFiles = true
        app.activeDocument.saveAs(aiDoc, saveAIOptions)

        var epsDoc = new File(dest + '.eps')
        var saveEPSOptions = new EPSSaveOptions()
        saveEPSOptions.cmykPostScript = true
        saveEPSOptions.embedAllFonts = true
        app.activeDocument.saveAs(epsDoc, saveEPSOptions)

        var exportPNGOptions = new ExportOptionsPNG24()
        var type = ExportType.PNG24
        var pngDoc = new File(dest + '.png')
        app.activeDocument.exportFile(pngDoc, type, exportPNGOptions)
    }
}

var filePath = Folder(app.activeDocument.path).selectDlg('Select the folder to save the files.')
var fileName = prompt('Please enter file name', '', 'Choose File Name')
var dest = filePath + "/" + fileName

saveAsAIEPSPNG(dest)