document.addEventListener("DOMContentLoaded", function () {
  const referenceText =
    "हम पर बाहर से बार-बार आक्रमण हुए। विदेशियों की विजय हुई पर ग्राम पंचायतें अपने स्थान पर ज्यों की त्यों बनी रहीं। अंग्रेजी शासन के विस्तार के फलस्वरूप अन्य संस्थाओं के बिखर जाने के साथ-साथ ये पंचायतें भी नष्ट हो गईं। जिस समय हम लोग ब्रिटिश सरकार से भारत के लिए स्वराज्य प्राप्त करने के प्रयत्न में लगे हुए थे उस समय गाँव-गाँव में जो कांग्रेस कमेटियाँ स्थापित हुईं वे एक प्रकार से पंचायतें ही तो थीं पर उस समय हमारे हाथों में अधिकार नहीं था और जो पंचायतें स्थापित हुईं वे जनता की इच्छा से ही स्थापित हुईं। हमारे हाथों में जब अधिकार आया तो उस समय ये ग्राम पंचायतें सभी स्थानों पर थीं। संविधान बनाते समय भी यही सोचा गया कि ऊँची व्यवस्थापिका सभाओं तक पहुँचने के लिए पंचायतें ही सबसे पहली कड़ी होंगी। उसके बाद सभी प्रदेशों और राज्यों की सरकारों ने पंचायत संबंधी कानून पास किए और पंचायतें स्थापित होने लगी थीं। इस समय प्रायः सभी राज्यों में पंचायतें हैं। यह दूसरी बात है कि कहीं पर उनका काम भली-भाँति चल रहा है और कहीं उतने सुचारू रूप से नहीं चल रहा। आज यह सुनकर मुझे बहुत प्रसन्नता हुई कि आपके इस राज्य में पंचायतों को ठीक रूप से चलाने पर बड़ा जोर दिया जा रहा है। जिनका काम सबसे अच्छा और सुंदर समझा जाता है उनको पुरस्कार दिया जाता है। इसलिए मैंने आपकी ओर से आज दो-चार पंचायतों के मुखिया लोगों को अनुदान दिया। मैं उनको बधाई भी देना चाहता हूँ कि उनका काम चार हजार ग्राम पंचायतों में सबसे अच्छा समझा गया। हमें यह स्मरण रखना चाहिए कि पहले की हमारी पंचायतें क्यों मिट गईं? हमारे देश में पंचायतें परंपरा से चली आ रही थीं। अंग्रेजों ने भी मुक्त कंठ से इस बात को स्वीकार किया था कि भारत का प्रत्येक गाँव गणराज्य था पर एक समय आया जब गाँव स्वतंत्र गणराज्य न रहे और देश परतंत्र हो गया। इसका कारण हममें कमजोरियों का आना था। हमें उन कमजोरियों से अभी भी बचते रहना चाहिए जिससे फिर से वह दिन न देखना पड़े। वह कमजोरी थी उन पंचायतों का संकीर्ण दृष्टिकोण। लोगों ने पंचायतों की परिधि के क्षेत्र को ही अपना देश माना और इस कारण जब एक पंचायत पर आक्रमण हुआ तो दूसरी पंचायतों ने उसकी रक्षा में हाथ बँटाना अपना धर्म नहीं समझा। इसी प्रकार विदेशियों ने एक-एक पर आक्रमण करके सारे देश पर अपना अधिकार";
  const wordReplacements = [
    {
      original: "बार-बार",
      replacements: ["बारबार"],
    },
    { original: "ज्यों की त्यों", replacements: ["ज्यों-की-त्यों"] },
    {
      original: "साथ-साथ",
      replacements: ["साथ साथ", "साथसाथ"],
    },
    {
      original: "गाँव-गाँव",
      replacements: ["गांव-गांव", "गॉव-गॉव", "गांव गांव", "गॉव गॉव"],
    },
    {
      original: "कमेटियाँ",
      replacements: ["कमेटियां"],
    },
    {
      original: "ऊँची",
      replacements: ["ऊंची"],
    },
    {
      original: "पहुँचने",
      replacements: ["पहुंचने"],
    },
    {
      original: "संबंधी",
      replacements: ["संबन्धी", "सम्बंधी", "सम्बन्धी"],
    },
    {
      original: "भली-भाँति",
      replacements: ["भली-भांति", "भली भांति", "भलीभांति"],
    },
    {
      original: "दो-चार",
      replacements: ["2-4", "दो चार"],
    },
    {
      original: "चार",
      replacements: ["4"],
    },
    {
      original: "हूँ",
      replacements: ["हूं"],
    },
    {
      original: "गाँव",
      replacements: ["गांव"],
    },
    {
      original: "बँटाना",
      replacements: ["बंटाना"],
    },
    {
      original: "एक-एक",
      replacements: ["1-1"],
    },
    {
      original: "सम्मतियाँ",
      replacements: ["सम्मतियां"],
    },
    {
      original: "भाँति",
      replacements: ["भांति"],
    },
  ];

  const referenceDiv = document.getElementById("referenceText");
  referenceDiv.innerHTML = referenceText;

  const userInput = document.getElementById("userInput");
  const resultElement = document.getElementById("result");

  userInput.addEventListener("input", function () {
    const userText = userInput.value;

    const wordMap = createWordMap(wordReplacements);

    const sanitizedReferenceText = referenceText;
    const sanitizedUserText = userText;

    const replacedReferenceText = replaceWords(sanitizedReferenceText, wordMap);
    const replacedUserText = replaceWords(sanitizedUserText, wordMap);

    const levenshteinDistance = customLevenshteinDistance(
      replacedReferenceText,
      replacedUserText
    );
    const maxLen = Math.max(
      replacedReferenceText.length,
      replacedUserText.length
    );
    const levenshteinSimilarity = 1 - levenshteinDistance / maxLen;
    const levenshteinAccuracy = (levenshteinSimilarity * 100).toFixed(2);

    const referenceWords = referenceText.split(/\s+/);
    const userWords = userText.split(/\s+/);

    const highlightedReferenceWords = [];

    for (let i = 0; i < referenceWords.length; i++) {
      switch (true) {
        case referenceWords[i] === userWords[i]:
          highlightedReferenceWords.push(
            `<span style="color: green;">${referenceWords[i]}</span>`
          );
          break;
        default:
          highlightedReferenceWords.push(
            `<span style="color: red;">${referenceWords[i]}</span>`
          );
      }
    }

    const highlightedReferenceText = highlightedReferenceWords.join(" ");

    resultElement.innerHTML = `Levenshtein Accuracy: ${levenshteinAccuracy}%`;
    referenceDiv.innerHTML = highlightedReferenceText;
  });

  function createWordMap(replacements) {
    const wordMap = new Map();
    for (const replacement of replacements) {
      for (const replacementWord of replacement.replacements) {
        wordMap.set(replacementWord, replacement.original);
      }
    }
    return wordMap;
  }

  function replaceWords(text, wordMap) {
    let newText = text;
    for (const [replacementWord, originalWord] of wordMap.entries()) {
      newText = newText.replace(new RegExp(replacementWord, "g"), originalWord);
    }
    return newText;
  }

  function customLevenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        if (i === 0) {
          dp[i][j] = j;
        } else if (j === 0) {
          dp[i][j] = i;
        } else if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
        }
      }
    }

    return dp[m][n];
  }
});
