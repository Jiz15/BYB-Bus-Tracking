import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tracking: resolve(__dirname, 'tracking.html'),
        liveTracking: resolve(__dirname, 'live-tracking.html'),
        attendance: resolve(__dirname, 'attendance.html'),
      },
    },
  },
});
