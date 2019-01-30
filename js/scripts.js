var validChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function clipMessageAlpha(messageIn) {
  var messageToClip = messageIn.toLowerCase();
  var messageSplit = messageToClip.split("");
  var charactersToJoin = [];
  validCharacterSeeker:
  for (var i = 0; i < messageSplit.length; i++) {
    for (var j = 0; j < validChars.length; j++) {
      if (messageSplit[i] == validChars[j]) {
        charactersToJoin.push(messageSplit[i]);
        console.log(charactersToJoin);
        continue validCharacterSeeker;
      }
    }
  }
  var messageAlpha = charactersToJoin.join("");
  console.log(messageAlpha)
  return messageAlpha;
}

function gridSizeSeeker(messageIn) {
  var gridWidth = 1;
  var gridHeight = 1;
  var gridSize = [];
  var squareTarget = 1;
  var messageToMeasure = messageIn.length;
  measurementTrack:
  for (var i = 1; i <= 12; i++) {
    if(Math.pow(i, 2) >= messageToMeasure) {
      gridWidth = i;
      if (Math.sqrt(messageToMeasure) >= (gridWidth - 0.5)) {
        gridHeight = i;
      }
      else {
        gridHeight = i-1;
      }
      break;
    }
  }

  console.log(Math.sqrt(messageToMeasure));
  console.log(gridWidth);
  console.log(gridHeight);
  console.log(squareTarget);
  gridSize = [gridWidth, gridHeight];
  console.log(gridSize);
  return gridSize;
}

function printToGrid(messageIn, gridSize) {
  var gridTotalSize = gridSize[0] * gridSize[1];
  var messageSplit = messageIn.split("");
  console.log(gridSize[0]);
  console.log(gridSize[1]);
  console.log(gridTotalSize);
  console.log(messageSplit);
  var targetRow = 1;
  var targetCol = 1;
  var arraySystem = [];
  var currentRowArray = [];
  for (var i = 0; i < messageIn.length; i++) {
    if (targetCol < gridSize[0]) {
      currentRowArray.push(messageSplit[i]);
      targetCol++;
      console.log(currentRowArray);
      if (i == messageIn.length-1) {
        arraySystem.push(currentRowArray);
      }
    }
    else if (targetCol == gridSize[0] && targetRow < gridSize[1] || i == (messageIn.length - 1)) {
      currentRowArray.push(messageSplit[i]);
      arraySystem.push(currentRowArray);
      console.log(arraySystem);
      currentRowArray = [];
      targetCol = 1;
      targetRow++;

    }
  }
  return arraySystem;
}

function encoderAlpha(letterGrid, gridSize) {
  var gridToEncode = letterGrid;
  var gridCol = gridSize[0];
  var gridRow = gridSize[1];
  var lettersEncodedAlpha = [];
  var lettersEncodedBeta = [];
  var lettersEncodedDelta = [];

  for (var i = 0; i < gridCol; i++) {
    for (var j = 0; j < gridRow; j++) {
      var letterToPush = gridToEncode[j].shift();
      lettersEncodedAlpha.push(letterToPush);
      console.log(lettersEncodedAlpha);
    }
  }

  for (var i = 0; i < lettersEncodedAlpha.length; i++) {
    for (var j = 0; j < validChars.length; j++) {
      if (lettersEncodedAlpha[i] == validChars[j]) {
        lettersEncodedBeta.push(lettersEncodedAlpha[i])
      }
    }
  }
  console.log(lettersEncodedBeta);

  for (var i = 1; i <= lettersEncodedBeta.length; i++) {
    lettersEncodedDelta.push(lettersEncodedBeta[i-1]);
    if((i%5) == 0 && i != lettersEncodedBeta.length) {
      lettersEncodedDelta.push(" ");
    }
  }
  console.log(lettersEncodedDelta);
  var finalEncode = lettersEncodedDelta.join("");
  return finalEncode;
}

$(document).ready(function() {
  $("form#base-text").submit(function(event) {
    event.preventDefault();
    var string = $("input#text-input").val();
    var result = clipMessageAlpha(string);
    var gridEstimate = gridSizeSeeker(result);
    var printedGrid = printToGrid(result, gridEstimate);
    var encodedMessage = encoderAlpha(printedGrid, gridEstimate);
    console.log(result);
    console.log(gridEstimate);
    console.log(encodedMessage);
    $("#encoded").text(encodedMessage);
  });
});
