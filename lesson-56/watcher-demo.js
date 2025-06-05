import { watch } from 'fs/promises';

async function watchDirectory(directory) {
  const watcher = watch(directory);

  for await (const event of watcher) {
    console.log(`File "${event.filename}" was "${event.eventType}".`);
  }
}

watchDirectory('./test').catch(console.error);