const PAQ = require('../lib');
const paq = new PAQ();

test('Sync task test', () => {
  const syncTask = (n) => {
    for (let i = 0; i < n; i++) {
      paq.addTask(() => {
        console.log('Step', i, 'sync');
        return i;
      });
    }
  };

  syncTask(5);
});
