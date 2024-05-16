describe('Basic user flow for Website', () => {
  // First, live site
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
  });

  //General Note: use localStorage to check content
  
  // Initial Note creation
  it('Initial Note creation', async () => {
    console.log('Initial Note creation...');

    //adding new note and then checking for the noteContent update
    const button = await page.$('button');
    await button.click();
    
    const noteContent = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem('stickynotes-notes'));
    });
    
    expect(noteContent[0].content).toBe("");
  });

  // Editing and saving new note
  it('Editing and saving new note', async () => {
    console.log('Editing and saving new note...');
    
    //typing into area after focusing into note
    await page.click('textarea');
    await page.keyboard.type('First');
    
    //simulating unfocusing the note (saving)
    await page.keyboard.press('Tab');

    const noteContent = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem('stickynotes-notes'));
    });

    expect(noteContent[0].content).toBe("First");
  });

  // Editing and saving previously made note
  it('Editing and saving previously made note', async () => {
    console.log('Editing and saving previously made note...');
    
    //typing into area after focusing into note
    await page.click('textarea');
    await page.keyboard.type(' and Second');

    //simulating unfocusing the note (saving)
    await page.keyboard.press('Tab');
    
    const noteContent = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem('stickynotes-notes'));
    });

    expect(noteContent[0].content).toBe("First and Second");
  });
  
  // Editing note then reloading while note is focused (should not save edits made)
  it('Editing note then reloading while note is focused', async () => {
    console.log('Editing note then reloading while note is focused...');
    
     //typing into area after focusing into note
    await page.click('textarea');
    await page.keyboard.type(' and Third');
    
    const noteContent = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem('stickynotes-notes'));
    });

    expect(noteContent[0].content).toBe("First and Second");
  });
  
  // Unfocused note deletion
  it('Unfocused note deletion', async () => {
    console.log('Unfocused note deletion...');

    //note should already be unfocused
    //typing into area after focusing into note
    await page.click('textarea', { clickCount: 2 });

    const noteContent = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem('stickynotes-notes'));
    });

    expect(noteContent).toBe("[]");
  });
  
  // checking all saved notes remain after reloading
  it('checking all saved notes remain after reloading', async () => {
    console.log('checking all saved notes remain after reloading...');
  });
  
});
