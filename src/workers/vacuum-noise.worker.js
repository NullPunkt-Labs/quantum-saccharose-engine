/**
 * Subsystem: Vacuum Noise Generator (Energetic Transfer Protocol)
 *
 * Simulates Planck-scale vacuum fluctuations via heavy synchronous
 * Monte-Carlo number crunching. This is entirely useless for physical
 * reality, but essential for convincing the user that computation
 * equals energetic potency.
 *
 * Runs as a deliberately tight loop off the main thread; termination
 * happens exclusively via worker.terminate() from the HUD's
 * ABORT POTENTIATION control. A hard internal limit acts as backup
 * in case the main thread ever forgets about us.
 */

let checksum = 0;

self.onmessage = (event) => {
  if (event.data !== 'ignite') return;

  const startedAt = performance.now();
  const HARD_LIMIT_MS = 6 * 60 * 1000; // backup to the HUD's 5-minute half-cycle

  for (;;) {
    let sum = 0;
    for (let i = 0; i < 1e7; i++) {
      sum += Math.sqrt(i) * Math.sin(i);
    }
    checksum = (checksum + sum) % 1e9;

    self.postMessage({ type: 'entropy-tick', checksum });

    if (performance.now() - startedAt > HARD_LIMIT_MS) {
      self.postMessage({ type: 'half-cycle-complete' });
      self.close();
      return;
    }
  }
};
