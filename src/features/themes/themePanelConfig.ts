import type { ThemeId } from '@/features/themes/types';

export interface ThemePanelConfig {
  badge: string;
  title: string;
  accent: string;
  desc: string;
  chips: string[];
}

export const THEME_PANEL_CONFIGS: Record<ThemeId, ThemePanelConfig> = {
  professional: {
    badge: '商务简历',
    title: '正式配置',
    accent: '#1e40af',
    desc: '适合传统行业与校招，字段映射为姓名、职位和联系方式。',
    chips: ['姓名', '职位', '联系'],
  },
  minimal: {
    badge: '极简',
    title: '留白配置',
    accent: '#334155',
    desc: '大留白、细线条，适合设计类与互联网岗位。',
    chips: ['姓名', '方向', '联系'],
  },
  sidebar: {
    badge: '双栏',
    title: '侧栏配置',
    accent: '#0f766e',
    desc: '左侧色块展示个人信息，右侧为经历正文。',
    chips: ['姓名', '岗位', '侧栏'],
  },
  tech: {
    badge: '极客',
    title: '终端配置',
    accent: '#059669',
    desc: '深色终端风，适合工程师与开源贡献者。',
    chips: ['姓名', 'Stack', 'GitHub'],
  },
  elegant: {
    badge: '衬线',
    title: '优雅配置',
    accent: '#78350f',
    desc: '衬线字体与经典排版，适合咨询、金融、法务。',
    chips: ['姓名', '头衔', '联系'],
  },
  creative: {
    badge: '创意',
    title: '渐变配置',
    accent: '#7c3aed',
    desc: '渐变背景与大胆排版，适合设计、品牌、创意岗位。',
    chips: ['姓名', '标签', '作品'],
  },
  academic: {
    badge: '学术',
    title: '履历配置',
    accent: '#1d4ed8',
    desc: '严谨结构，适合科研、高校、PhD 申请。',
    chips: ['姓名', '机构', '发表'],
  },
  compact: {
    badge: '紧凑',
    title: '一页配置',
    accent: '#475569',
    desc: '小字号高密度排版，力求内容塞进一页 A4。',
    chips: ['姓名', '职位', '技能'],
  },
  product: {
    badge: '产品',
    title: '清爽配置',
    accent: '#0891b2',
    desc: '卡片式模块，适合产品经理与运营岗位。',
    chips: ['姓名', '方向', '项目'],
  },
  dark: {
    badge: '暗色',
    title: '霓虹配置',
    accent: '#a855f7',
    desc: '暗色背景霓虹点缀，适合创意与技术跨界。',
    chips: ['姓名', '角色', '链接'],
  },
  magazine: {
    badge: '杂志',
    title: '排版配置',
    accent: '#dc2626',
    desc: '杂志式大标题与分栏，适合媒体、内容、市场。',
    chips: ['姓名', '栏目', '亮点'],
  },
  timeline: {
    badge: '时间轴',
    title: '节点配置',
    accent: '#2563eb',
    desc: '纵向时间轴串联经历，适合长履历展示。',
    chips: ['经历', '节点', '项目'],
  },
};

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const normalized = hex.replace('#', '').trim();
  const full =
    normalized.length === 3 ? normalized.split('').map((c) => c + c).join('') : normalized;
  const value = Number.parseInt(full, 16);
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
}

function shadeHex(hex: string, amount: number): string {
  const { r, g, b } = hexToRgb(hex);
  const clamp = (v: number) => Math.max(0, Math.min(255, v));
  const ch = (v: number) => clamp(v + amount).toString(16).padStart(2, '0');
  return `#${ch(r)}${ch(g)}${ch(b)}`;
}

export function applyPanelAccent(accent: string): void {
  const { r, g, b } = hexToRgb(accent);
  const root = document.documentElement;
  root.style.setProperty('--accent', accent);
  root.style.setProperty('--accent-hover', shadeHex(accent, -24));
  root.style.setProperty('--accent-soft', `rgba(${r}, ${g}, ${b}, 0.10)`);
  root.style.setProperty('--accent-muted', `rgba(${r}, ${g}, ${b}, 0.28)`);
  root.style.setProperty('--shadow-glow', `0 0 0 3px rgba(${r}, ${g}, ${b}, 0.18)`);
}

export function getThemePanelConfig(id: ThemeId): ThemePanelConfig {
  return THEME_PANEL_CONFIGS[id] ?? THEME_PANEL_CONFIGS.professional;
}
