$(document).ready(function() {
    const paragraph = "सफलता जाहिर करने का सबसे अच्छा तरीका है कि सफलता तक पहुँचने वाले सभी मार्गों का विश्लेषण करें।";
    const textArray = paragraph.split("");
  
    const userInput = $("#user-input");
    const startButton = $("#start-btn");
    const timeDisplay = $("#time-display");
    const accuracyDisplay = $("#accuracy-display");
  
    let startTime, endTime, timerInterval;
  
    // English to Hindi Converter
    $("#englishInput").on("input", function() {
      const englishText = $(this).val();
  
      $.ajax({
        url: `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURI(
          englishText
        )}`,
        success: function (result) {
          if (result[0] != undefined && result[0] != null) {
            const hindiText = result[0][0][0];
            $("#hindiOutput").text(hindiText);
          } else {
            $("#hindiOutput").text("");
          }
        },
      });
    });
  
    // Typing Speed Test
    startButton.click(function () {
      userInput.val("");
      accuracyDisplay.text("0");
      timeDisplay.text("0");
      userInput.focus();
      startButton.prop("disabled", true);
      startTimer();
    });
  
    userInput.on("input", function () {
      const userTyped = userInput.val();
      const accuracy = calculateAccuracy(userTyped);
      accuracyDisplay.text(accuracy.toFixed(2));
  
      if (userTyped === paragraph) {
        clearInterval(timerInterval);
        startButton.prop("disabled", false);
      }
    });
  
    function calculateAccuracy(userTyped) {
      const correctCharacters = userTyped.split("").filter((char, i) => char === textArray[i]);
      const accuracy = (correctCharacters.length / textArray.length) * 100;
      return accuracy;
    }
  
    function startTimer() {
      startTime = new Date().getTime();
      timerInterval = setInterval(updateTime, 1000);
    }
  
    function updateTime() {
      endTime = new Date().getTime();
      const elapsedTime = (endTime - startTime) / 1000;
      timeDisplay.text(elapsedTime.toFixed(1));
    }
  });
  