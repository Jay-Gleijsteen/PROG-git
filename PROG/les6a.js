function mockString(inputString) {
    let mockedString = '';
  
    for (let i = 0; i < inputString.length; i++) {
      if (i % 2 === 0) {
        // gebruik een loop om door te gaan met de string mocken totdat het eindigt
        // Zet elk even karakter in hoofdletters
        mockedString += inputString[i].toUpperCase();
      } else {
        // Zet elk oneven karakter in kleine letters
        mockedString += inputString[i].toLowerCase();
      }
    }
  
    return mockedString;
    //returned de mocked string
  }
  
  const originalString = "Ik wil mario wonder spelen";
  //verander hier wat je gemocked will helpen
  const mockedString = mockString(originalString);
  
  console.log(originalString); // Toont de originele string
  console.log(mockedString);   // Toont de 'gemockte' string
  