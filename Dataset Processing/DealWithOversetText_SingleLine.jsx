function DealWithOversetText_SingleLine() {
  var defaultSizeTagName = "overset_text_default_size";
  var defaultIncrement = 0.1;

  function recordFontSizeInTag(size, art){
    var tag;
    var tags = art.tags;
    try {
      tag = tags.getByName(defaultSizeTagName);
      tag.value = size;
    } catch(e) {
      tag = tags.add();
      tag.name = defaultSizeTagName;
      tag.value = size;
    }
  };

  function readFontSizeFromTag(art){
    var tag;
    var tags = art.tags;
    try {
      tag = tags.getByName(defaultSizeTagName);
      return tag.value * 1;
    } catch(e) {
      return null;
    }
  };

  function recordFontSize() {
    var doc = app.activeDocument;
    for (var i = 0; i < doc.textFrames.length; i++) {
      var t = doc.textFrames[i];
      if ((t.kind == TextType.AREATEXT || t.kind == TextType.PATHTEXT) && t.editable && !t.locked && !t.hidden) {
        // t.note = t.textRange.characterAttributes.size;
        recordFontSizeInTag(t.textRange.characterAttributes.size, t);
      }
    };
  };

  function isOverset(textBox, lineAmt) {
    if (textBox.lines.length > 0) {
      var charactersOnVisibleLines = 0;
      if(typeof(lineAmt) != "undefined"){
        lineAmt = 1;
      }
      for (var i = 0; i < lineAmt; i++) {
        charactersOnVisibleLines += textBox.lines[i].characters.length;
      }
      if (charactersOnVisibleLines < textBox.characters.length) {
        return true;
      } else {
        return false;
      }
    } else if (textBox.characters.length > 0) {
      return true;
    }
  };

  function shrinkFont(textBox) {
    var totalCharCount = textBox.characters.length;
    var lineCount = textBox.lines.length;
    if (textBox.lines.length > 0) {
      var firstLineCharCount = textBox.lines[0].characters.length;
      if (isOverset(textBox, lineCount)) {
        var inc = defaultIncrement;
        while (isOverset(textBox, lineCount)) {
          textBox.textRange.characterAttributes.size -= inc;
        }
      }
    } else if (textBox.characters.length > 0) {
      var inc = defaultIncrement;
      while (isOverset(textBox, lineCount)) {
        textBox.textRange.characterAttributes.size -= inc;
      }
    }
  };

  function resetSize(textAreaBox) {
    var t = textAreaBox;
    if (t.contents != "") {
      // if (t.note != "") {
      //     t.textRange.characterAttributes.size = (t.note * 1);
      // }
      var size = readFontSizeFromTag(t);
      if(size != null){
        t.textRange.characterAttributes.size = size;
      }
    }
  };

  function removeTagsOnText(){
    var doc = app.activeDocument;
    for (var i = 0; i < doc.textFrames.length; i++) {
      try {
        doc.textFrames[i].tags.getByName(defaultSizeTagName).remove();
      } catch (e) {

      }
    }
  };

  function resetAllTextBoxes() {
    for (var i = 0; i < doc.textFrames.length; i++) {
      var t = doc.textFrames[i];
      if ((t.kind == TextType.AREATEXT || t.kind == TextType.PATHTEXT) && t.editable && !t.locked && !t.hidden) {
        resetSize(t);
      }
    };
  };

  function shrinkAllTextBoxes() {
    for (var i = 0; i < doc.textFrames.length; i++) {
      var t = doc.textFrames[i];
      if ((t.kind == TextType.AREATEXT || t.kind == TextType.PATHTEXT) && t.editable && !t.locked && !t.hidden) {
        shrinkFont(t);
      }
    };
  };
  if (app.documents.length > 0) {
    var doc = app.activeDocument;
    if (doc.dataSets.length > 0 && doc.activeDataSet == doc.dataSets[0]) {
      recordFontSize();
    }
    resetAllTextBoxes();
    shrinkAllTextBoxes();
    if (doc.dataSets.length > 0 && doc.activeDataSet == doc.dataSets[doc.dataSets.length - 1]) {
      removeTagsOnText();
    }
  }
  return true;
};
DealWithOversetText_SingleLine();
