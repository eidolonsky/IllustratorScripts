// group everything visible
var doc = app.activeDocument
for (var i=doc.layers.length-1;i>=0;i--) {
    doc.layers[i].locked = false
    if (doc.layers[i].visible === false) {
        doc.layers[i].visible = true
        doc.layers[i].remove()
    }
}
app.executeMenuCommand('selectall');
app.executeMenuCommand('group');
var groupItems = doc.groupItems[0]

// compare the width & height
// make the larger one 1200px, with scale locked
var gWidth = groupItems.width
var gHeight = groupItems.height
var maxSize = 120000
var factor = gWidth >= gHeight ? maxSize / gWidth : maxSize / gHeight
groupItems.resize(factor, factor)

// make artboard same size with group
var w = groupItems.width
var h = groupItems.height

var abBounds = doc.artboards[0].artboardRect
var ableft = abBounds[0]
var abtop = abBounds[1]
var abwidth = abBounds[2] - ableft
var abheight = abtop- abBounds[3]

var abctrx = abwidth/2+ableft;
var abctry = abtop-abheight/2;

var ableft = abctrx-w/2; 
var abtop = abctry+h/2;
var abright = abctrx+w/2; 
var abbottom = abctry-h/2;

doc.artboards[0].artboardRect = [ableft, abtop, abright, abbottom];

// align group center of artboard
groupItems.position = [ableft, abtop]
