export const AURORA_CONFIG = {
  enabled: true,
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1024,
  DYE_RESOLUTION_MOBILE: 512,
  DENSITY_DISSIPATION: 2.6,
  VELOCITY_DISSIPATION: 1.6,
  PRESSURE: 0.8,
  PRESSURE_ITERATIONS: 20,
  CURL: 32,
  SPLAT_RADIUS: 0.22,
  SPLAT_RADIUS_MOBILE: 0.32,
  SPLAT_FORCE: 5200,
  COLOR_CYCLE: 0.18,
} as const;

/** Theme 1 — forest gold / emerald */
const THEME1_HUES = [43, 38, 52, 160, 145, 28];
/** Theme 2 — warm stone / clay */
const THEME2_HUES = [28, 22, 35, 18, 40, 15];

let activeTheme: 'theme1' | 'theme2' = 'theme1';

export function setAuroraTheme(theme: 'theme1' | 'theme2') {
  activeTheme = theme;
}

function hsvToRgb(h: number, s: number, v: number) {
  h = (((h % 360) + 360) % 360) / 360;
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  const table = [
    [v, t, p],
    [q, v, p],
    [p, v, t],
    [p, q, v],
    [t, p, v],
    [v, p, q],
  ][i % 6];
  return { r: table[0], g: table[1], b: table[2] };
}

export function generateAuroraColor() {
  const hues = activeTheme === 'theme1' ? THEME1_HUES : THEME2_HUES;
  const hue = hues[Math.floor(Math.random() * hues.length)] + (Math.random() * 14 - 7);
  const sat = activeTheme === 'theme1' ? 0.72 : 0.55;
  const val = activeTheme === 'theme1' ? 1 : 0.85;
  const intensity = activeTheme === 'theme1' ? 0.24 : 0.2;
  const c = hsvToRgb(hue, sat, val);
  return { r: c.r * intensity, g: c.g * intensity, b: c.b * intensity };
}

export function isAuroraMobile() {
  return /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
}
