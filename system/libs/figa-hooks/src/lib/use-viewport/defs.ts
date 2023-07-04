interface ViewportData {
  status: 'idle' | 'measuring' | 'measured';
  height: number;
  width: number;
}

interface ViewportConfig {
  delay?: number;
  throttle?: boolean;
  measuringActive?: boolean;
}

export type { ViewportData, ViewportConfig };
