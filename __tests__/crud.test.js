describe('Basic user flow for Website', () => {
  // First, visit the lab 8 website
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
  });

  // Initial Note creation
  it('Initial Note creation', async () => {
    console.log('Initial Note creation...');
  });

  // Editing and saving new note
  it('Editing and saving new note', async () => {
    console.log('Editing and saving new note...');
  });

  // Editing and saving previously made note
  it('Editing and saving previously made note', async () => {
    console.log('Editing and saving previously made note...');
  });
  
  // Editing note then reloading while note is focused (should not save edits made)
  it('Editing note then reloading while note is focused', async () => {
    console.log('Editing note then reloading while note is focused...');
  });
  
  // Unfocused note deletion
  it('Unfocused note deletion', async () => {
    console.log('Unfocused note deletion...');
  });
  
  // checking all saved notes remain after reloading
  it('checking all saved notes remain after reloading', async () => {
    console.log('checking all saved notes remain after reloading...');
  });
  
});
