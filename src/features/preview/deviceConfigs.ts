import type { PreviewDevice } from '@/types/resume';

export interface DeviceConfig {
  id: PreviewDevice;
  label: string;
  frameClass: string;
}

export const deviceConfigs: DeviceConfig[] = [
  { id: 'desktop', label: 'Desktop', frameClass: 'pc-frame-wrap' },
  { id: 'mobile', label: 'Mobile', frameClass: 'iphone-frame-wrap' },
];

export function getDeviceConfig(id: PreviewDevice): DeviceConfig {
  return deviceConfigs.find((d) => d.id === id) ?? deviceConfigs[0];
}
