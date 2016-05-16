#target illustrator

function DealWithOversetText_SingleLine() {
    function recordFontSize() {
        for (var i = 0; i < doc.textFrames.length; i++) {
            var t = doc.textFrames[i];
            if (t.kind == TextType.AREATEXT && t.editable && !t.locked && !t.hidden) {
                t.note = t.textRange.characterAttributes.size;
            }
        };
    }

    function removeNotesOnText() {
        for (var i = 0; i < doc.textFrames.length; i++) {
            var t = doc.textFrames[i];
            t.note = "";
        }
    }

    function isOverset(textBox) {
        if (textBox.lines.length > 0) {
            if (textBox.lines[0].characters.length < textBox.characters.length) {
                return true;
            } else {
                return false;
            }
        } else if (textBox.characters.length > 0) {
            return true;
        }
    }

    function shrinkFont(textBox) {
        var totalCharCount = textBox.characters.length;
        var lineCount = textBox.lines.length;
        if (textBox.lines.length > 0) {
            var firstLineCharCount = textBox.lines[0].characters.length;
            if (isOverset(textBox)) {
                var inc = 0.01;
                while (isOverset(textBox)) {
                    textBox.textRange.characterAttributes.size -= inc;
                }
            }
        } else if (textBox.characters.length > 0) {
            var inc = 0.01;
            while (isOverset(textBox)) {
                textBox.textRange.characterAttributes.size -= inc;
            }
        }
    }

    function resetSize(textAreaBox) {
        var t = textAreaBox;
        if (t.contents != "") {
            if (t.note != "") {
                t.textRange.characterAttributes.size = (t.note * 1);
            }
        }
    }

    function resetAllTextBoxes() {
        for (var i = 0; i < doc.textFrames.length; i++) {
            var t = doc.textFrames[i];
            if (t.kind == TextType.AREATEXT && t.editable && !t.locked && !t.hidden) {
                resetSize(t);
            }
        };
    }

    function shrinkAllTextBoxes() {
        for (var i = 0; i < doc.textFrames.length; i++) {
            var t = doc.textFrames[i];
            if (t.kind == TextType.AREATEXT && t.editable && !t.locked && !t.hidden) {
                shrinkFont(t);
            }
        };
    }

    if (app.documents.length > 0) {
        var doc = app.activeDocument;
        if (doc.activeDataSet == doc.dataSets[0]) {
            recordFontSize();
        }

        resetAllTextBoxes();
        shrinkAllTextBoxes();

        if (doc.activeDataSet == doc.dataSets[doc.dataSets.length - 1]) {
            removeNotesOnText();
        }
    }
}
DealWithOversetText_SingleLine();
