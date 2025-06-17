import type { RendererListener } from '@/preload';

import { useEffect } from 'react';

export const useRendererListener = (channel: string, listener: RendererListener) => {
  useEffect(() => {
    electron.ipcRenderer.on(channel, listener);
    return () => {
      electron.ipcRenderer.removeListener(channel, listener);
    };
  }, [channel, listener]);
};
