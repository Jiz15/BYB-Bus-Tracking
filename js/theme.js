/**
 * Big Yellow Bus - Advanced Theme & Appearance Manager
 * Default Brand Theme: Midnight Navy (#06033A)
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'byb_theme_settings';

  // Preset themes - Midnight Navy (#06033A) is default
  const PRESET_THEMES = {
    midnight: {
      id: 'midnight',
      name: 'Midnight Navy',
      tag: 'Default',
      primaryHex: '#06033A',
      accentHex: '#1b3b87',
      rgb: {
        '50': '238 241 248',
        '100': '220 227 242',
        '200': '189 203 231',
        '300': '148 170 216',
        '400': '100 132 196',
        '500': '48 78 156',
        '600': '6 3 58',      // #06033A
        '700': '15 18 77',
        '800': '10 12 58',
        '900': '6 3 58',
        '950': '3 1 34',
        'accent': '27 59 135'
      },
      hex: {
        '50': '#eef1f8',
        '100': '#dce3f2',
        '200': '#bdcbe7',
        '300': '#94aad8',
        '400': '#6484c4',
        '500': '#304e9c',
        '600': '#06033A',
        '700': '#0f124d',
        '800': '#0a0c3a',
        '900': '#06033A',
        '950': '#030122',
        'accent': '#1b3b87'
      }
    },
    amber: {
      id: 'amber',
      name: 'School Bus Amber',
      tag: 'Classic Bus',
      primaryHex: '#d97706',
      accentHex: '#b45309',
      rgb: {
        '50': '254 243 199',
        '100': '253 230 138',
        '200': '252 211 77',
        '300': '245 158 11',
        '400': '217 119 6',
        '500': '180 83 9',
        '600': '217 119 6',
        '700': '180 83 9',
        '800': '146 64 14',
        '900': '120 53 15',
        '950': '69 26 3',
        'accent': '180 83 9'
      },
      hex: {
        '50': '#fef3c7',
        '100': '#fde68a',
        '200': '#fcd34d',
        '300': '#f59e0b',
        '400': '#d97706',
        '500': '#b45309',
        '600': '#d97706',
        '700': '#b45309',
        '800': '#92400e',
        '900': '#78350f',
        '950': '#451a03',
        'accent': '#b45309'
      }
    },
    indigo: {
      id: 'indigo',
      name: 'Electric Indigo',
      tag: 'Tech',
      primaryHex: '#3525cd',
      accentHex: '#712ae2',
      rgb: {
        '50': '245 243 255',
        '100': '237 233 254',
        '200': '221 214 254',
        '300': '196 181 253',
        '400': '167 139 250',
        '500': '139 92 246',
        '600': '113 42 226',
        '700': '91 33 182',
        '800': '76 29 149',
        '900': '53 37 205',
        '950': '30 18 100',
        'accent': '113 42 226'
      },
      hex: {
        '50': '#f5f3ff',
        '100': '#ede9fe',
        '200': '#ddd6fe',
        '300': '#c4b5fd',
        '400': '#a78bfa',
        '500': '#8b5cf6',
        '600': '#712ae2',
        '700': '#5b21b6',
        '800': '#4c1d95',
        '900': '#3525cd',
        '950': '#1e1264',
        'accent': '#712ae2'
      }
    },
    emerald: {
      id: 'emerald',
      name: 'Emerald Fleet',
      tag: 'Eco-Transit',
      primaryHex: '#059669',
      accentHex: '#047857',
      rgb: {
        '50': '236 253 245',
        '100': '209 250 229',
        '200': '167 243 208',
        '300': '110 231 183',
        '400': '52 211 153',
        '500': '16 185 129',
        '600': '5 150 105',
        '700': '4 120 87',
        '800': '6 95 70',
        '900': '4 78 57',
        '950': '2 44 34',
        'accent': '4 120 87'
      },
      hex: {
        '50': '#ecfdf5',
        '100': '#d1fae5',
        '200': '#a7f3d0',
        '300': '#6ee7b7',
        '400': '#34d399',
        '500': '#10b981',
        '600': '#059669',
        '700': '#047857',
        '800': '#065f46',
        '900': '#044e39',
        '950': '#022c22',
        'accent': '#047857'
      }
    },
    ocean: {
      id: 'ocean',
      name: 'Ocean Azure',
      tag: 'Skyline',
      primaryHex: '#0284c7',
      accentHex: '#0369a1',
      rgb: {
        '50': '240 249 255',
        '100': '224 242 254',
        '200': '186 230 253',
        '300': '125 211 252',
        '400': '56 189 248',
        '500': '14 165 233',
        '600': '2 132 199',
        '700': '3 105 161',
        '800': '7 89 133',
        '900': '12 74 110',
        '950': '8 47 73',
        'accent': '3 105 161'
      },
      hex: {
        '50': '#f0f9ff',
        '100': '#e0f2fe',
        '200': '#bae6fd',
        '300': '#7dd3fc',
        '400': '#38bdf8',
        '500': '#0ea5e9',
        '600': '#0284c7',
        '700': '#0369a1',
        '800': '#075985',
        '900': '#0c4a6e',
        '950': '#082f49',
        'accent': '#0369a1'
      }
    },
    purple: {
      id: 'purple',
      name: 'Royal Purple',
      tag: 'Regal',
      primaryHex: '#7c3aed',
      accentHex: '#6d28d9',
      rgb: {
        '50': '250 245 255',
        '100': '243 232 255',
        '200': '233 213 255',
        '300': '216 180 254',
        '400': '192 132 252',
        '500': '168 85 247',
        '600': '124 58 237',
        '700': '109 40 217',
        '800': '91 33 182',
        '900': '76 29 149',
        '950': '59 7 100',
        'accent': '109 40 217'
      },
      hex: {
        '50': '#faf5ff',
        '100': '#f3e8ff',
        '200': '#e9d5ff',
        '300': '#d8b4fe',
        '400': '#c084fc',
        '500': '#a855f7',
        '600': '#7c3aed',
        '700': '#6d28d9',
        '800': '#5b21b6',
        '900': '#4c1d95',
        '950': '#3b0764',
        'accent': '#6d28d9'
      }
    },
    crimson: {
      id: 'crimson',
      name: 'Crimson Rose',
      tag: 'Executive',
      primaryHex: '#be123c',
      accentHex: '#9f1239',
      rgb: {
        '50': '255 241 242',
        '100': '255 228 230',
        '200': '254 205 211',
        '300': '253 164 175',
        '400': '251 113 133',
        '500': '244 63 94',
        '600': '190 18 60',
        '700': '159 18 57',
        '800': '136 19 55',
        '900': '76 5 25',
        '950': '48 1 14',
        'accent': '159 18 57'
      },
      hex: {
        '50': '#fff1f2',
        '100': '#ffe4e6',
        '200': '#fecdd3',
        '300': '#fda4af',
        '400': '#fb7185',
        '500': '#f43f5e',
        '600': '#be123c',
        '700': '#9f1239',
        '800': '#881337',
        '900': '#4c0519',
        '950': '#30010e',
        'accent': '#9f1239'
      }
    },
    slate: {
      id: 'slate',
      name: 'Slate Charcoal',
      tag: 'Minimal',
      primaryHex: '#1e293b',
      accentHex: '#334155',
      rgb: {
        '50': '248 250 252',
        '100': '241 245 249',
        '200': '226 232 240',
        '300': '203 213 225',
        '400': '148 163 184',
        '500': '100 116 139',
        '600': '30 41 59',
        '700': '51 65 85',
        '800': '30 41 59',
        '900': '15 23 42',
        '950': '2 6 23',
        'accent': '51 65 85'
      },
      hex: {
        '50': '#f8fafc',
        '100': '#f1f5f9',
        '200': '#e2e8f0',
        '300': '#cbd5e1',
        '400': '#94a3b8',
        '500': '#64748b',
        '600': '#1e293b',
        '700': '#334155',
        '800': '#1e293b',
        '900': '#0f172a',
        '950': '#020617',
        'accent': '#334155'
      }
    }
  };

  // Convert Hex to RGB
  function hexToRgb(hex) {
    let clean = hex.replace('#', '');
    if (clean.length === 3) {
      clean = clean.split('').map(c => c + c).join('');
    }
    const num = parseInt(clean, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  // Convert RGB to HSL
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  }

  // Convert HSL to Hex
  function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
  }

  // Generate complete color palette from any arbitrary hex color
  function generatePaletteFromHex(baseHex) {
    const rgb = hexToRgb(baseHex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    const shades = {
      '50': hslToHex(hsl.h, Math.max(15, hsl.s * 0.25), 97),
      '100': hslToHex(hsl.h, Math.max(25, hsl.s * 0.35), 92),
      '200': hslToHex(hsl.h, Math.max(35, hsl.s * 0.5), 84),
      '300': hslToHex(hsl.h, Math.max(45, hsl.s * 0.65), 72),
      '400': hslToHex(hsl.h, Math.max(55, hsl.s * 0.8), 58),
      '500': hslToHex(hsl.h, hsl.s, 46),
      '600': baseHex, // Primary target color
      '700': hslToHex(hsl.h, hsl.s, Math.max(15, hsl.l - 8)),
      '800': hslToHex(hsl.h, hsl.s, Math.max(10, hsl.l - 16)),
      '900': baseHex,
      '950': hslToHex(hsl.h, hsl.s, Math.max(5, hsl.l - 24)),
      'accent': hslToHex((hsl.h + 15) % 360, hsl.s, Math.min(60, hsl.l + 10))
    };

    const rgbShades = {};
    for (const [key, hexVal] of Object.entries(shades)) {
      const c = hexToRgb(hexVal);
      rgbShades[key] = `${c.r} ${c.g} ${c.b}`;
    }

    return {
      id: 'custom',
      name: 'Custom (' + baseHex.toUpperCase() + ')',
      tag: 'Custom',
      primaryHex: baseHex,
      accentHex: shades.accent,
      hex: shades,
      rgb: rgbShades
    };
  }

  // Load saved configuration from localStorage
  function loadConfig() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read saved theme:', e);
    }
    // Default theme is Midnight Navy (#06033A)
    return {
      themeId: 'midnight',
      customColor: '#06033A',
      mode: 'light' // 'light' or 'dark'
    };
  }

  // Save configuration to localStorage
  function saveConfig(cfg) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
    } catch (e) {
      console.warn('Could not save theme:', e);
    }
  }

  // Apply palette and CSS variables to the document
  function applyTheme(config, triggerEvent = true) {
    let themeObj;
    if (config.themeId === 'custom' && config.customColor) {
      themeObj = generatePaletteFromHex(config.customColor);
    } else {
      themeObj = PRESET_THEMES[config.themeId] || PRESET_THEMES.midnight;
    }

    const root = document.documentElement;

    // Apply RGB and Hex CSS custom properties
    for (const [key, val] of Object.entries(themeObj.rgb)) {
      root.style.setProperty(`--brand-${key}-rgb`, val);
    }
    for (const [key, val] of Object.entries(themeObj.hex)) {
      root.style.setProperty(`--brand-${key}`, val);
    }

    root.style.setProperty('--brand-primary', themeObj.primaryHex);
    root.style.setProperty('--brand-primary-rgb', themeObj.rgb['600']);
    root.style.setProperty('--brand-accent', themeObj.accentHex);
    root.style.setProperty('--brand-accent-rgb', themeObj.rgb.accent);

    // Apply light / dark appearance mode
    if (config.mode === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme-mode', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme-mode', 'light');
    }

    root.setAttribute('data-active-theme', themeObj.id);

    // Update UI Indicators on current page
    updateIndicators(themeObj, config.mode);

    if (triggerEvent) {
      window.dispatchEvent(new CustomEvent('byb-theme-changed', {
        detail: { theme: themeObj, mode: config.mode }
      }));
    }
  }

  // Update indicators, labels, and active borders on page
  function updateIndicators(themeObj, mode) {
    document.querySelectorAll('[data-theme-indicator-swatch]').forEach(el => {
      el.style.backgroundColor = themeObj.primaryHex;
    });

    document.querySelectorAll('[data-theme-indicator-dot]').forEach(el => {
      el.style.backgroundColor = themeObj.primaryHex;
    });

    document.querySelectorAll('[data-theme-name-display]').forEach(el => {
      el.textContent = themeObj.name;
    });

    // Update preset cards in modal if open
    document.querySelectorAll('[data-theme-option]').forEach(btn => {
      const tid = btn.getAttribute('data-theme-option');
      const isSelected = tid === themeObj.id;
      if (isSelected) {
        btn.classList.add('ring-2', 'ring-offset-2', 'ring-slate-900', 'shadow-md');
        btn.classList.remove('border-slate-200');
        const check = btn.querySelector('[data-theme-check]');
        if (check) check.classList.remove('hidden');
      } else {
        btn.classList.remove('ring-2', 'ring-offset-2', 'ring-slate-900', 'shadow-md');
        btn.classList.add('border-slate-200');
        const check = btn.querySelector('[data-theme-check]');
        if (check) check.classList.add('hidden');
      }
    });

    // Update mode buttons in modal if present
    document.querySelectorAll('[data-mode-option]').forEach(btn => {
      const m = btn.getAttribute('data-mode-option');
      if (m === mode) {
        btn.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-slate-100', 'text-slate-600');
      } else {
        btn.classList.remove('bg-slate-900', 'text-white', 'shadow-sm');
        btn.classList.add('bg-slate-100', 'text-slate-600');
      }
    });
  }

  // Render or get Theme Modal
  function ensureThemeModal() {
    let modal = document.getElementById('byb-theme-modal');
    if (modal) return modal;

    modal = document.createElement('div');
    modal.id = 'byb-theme-modal';
    modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    const config = loadConfig();
    const activeTheme = config.themeId === 'custom'
      ? generatePaletteFromHex(config.customColor)
      : (PRESET_THEMES[config.themeId] || PRESET_THEMES.midnight);

    const presetCardsHtml = Object.values(PRESET_THEMES).map(theme => {
      const isSelected = theme.id === activeTheme.id;
      return `
        <button type="button" data-theme-option="${theme.id}" onclick="window.BYBTheme.selectPreset('${theme.id}')"
          class="relative flex items-center gap-3 p-3 rounded-2xl border text-left transition-all hover:border-slate-400 bg-white group ${isSelected ? 'ring-2 ring-offset-2 ring-slate-900 shadow-md border-transparent' : 'border-slate-200'}">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-sm shrink-0" style="background-color: ${theme.primaryHex};">
            <span class="w-3.5 h-3.5 rounded-full border border-white/60" style="background-color: ${theme.accentHex};"></span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-xs text-slate-900 truncate">${theme.name}</span>
              ${theme.tag ? `<span class="text-[9px] font-bold px-1.5 py-0.2 rounded-full ${theme.id === 'midnight' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-slate-100 text-slate-600'}">${theme.tag}</span>` : ''}
            </div>
            <div class="text-[11px] font-mono text-slate-500 mt-0.5">${theme.primaryHex}</div>
          </div>
          <span data-theme-check class="material-symbols-outlined text-[18px] text-emerald-600 shrink-0 ${isSelected ? '' : 'hidden'}">check_circle</span>
        </button>
      `;
    }).join('');

    modal.innerHTML = `
      <div class="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden transform scale-95 transition-all duration-300 max-h-[90vh] flex flex-col" id="byb-theme-modal-card">
        
        <!-- Header -->
        <div class="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm" style="background-color: var(--brand-primary, #06033A);">
              <span class="material-symbols-outlined text-[20px]">palette</span>
            </div>
            <div>
              <h2 class="text-lg font-extrabold text-slate-900 leading-tight">Theme &amp; Appearance</h2>
              <p class="text-xs text-slate-500">Default brand color is <strong class="text-slate-800 font-mono">#06033A</strong> (Midnight Navy)</p>
            </div>
          </div>
          <button type="button" onclick="window.BYBTheme.closeModal()" class="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition">
            <span class="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <!-- Scrollable Body -->
        <div class="p-6 overflow-y-auto space-y-6">
          
          <!-- Mode Toggle -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Display Mode</label>
            <div class="grid grid-cols-2 gap-3 p-1.5 bg-slate-100 rounded-2xl">
              <button type="button" data-mode-option="light" onclick="window.BYBTheme.setMode('light')" class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${config.mode === 'light' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined text-[18px]">light_mode</span>
                <span>Light Mode</span>
              </button>
              <button type="button" data-mode-option="dark" onclick="window.BYBTheme.setMode('dark')" class="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${config.mode === 'dark' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                <span class="material-symbols-outlined text-[18px]">dark_mode</span>
                <span>Dark Midnight</span>
              </button>
            </div>
          </div>

          <!-- Curated Brand Theme Presets -->
          <div>
            <div class="flex items-center justify-between mb-2.5">
              <label class="text-xs font-bold uppercase tracking-wider text-slate-500">Curated Color Themes</label>
              <button type="button" onclick="window.BYBTheme.resetToDefault()" class="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 underline underline-offset-2">
                <span class="material-symbols-outlined text-[14px]">restart_alt</span>
                Reset to #06033A Default
              </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${presetCardsHtml}
            </div>
          </div>

          <!-- Custom Color Picker -->
          <div class="p-4 rounded-2xl border border-slate-200/90 bg-slate-50/50">
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">Custom Primary Color</label>
            <div class="flex items-center gap-3">
              <div class="relative w-12 h-10 rounded-xl overflow-hidden border border-slate-300 shadow-sm shrink-0 cursor-pointer">
                <input type="color" id="byb-custom-color-input" value="${activeTheme.primaryHex}" oninput="window.BYBTheme.onCustomColorInput(this.value)" class="absolute inset-0 w-[200%] h-[200%] -top-2 -left-2 cursor-pointer border-0 p-0">
              </div>
              <input type="text" id="byb-custom-hex-text" value="${activeTheme.primaryHex}" placeholder="#06033A" maxlength="7" onchange="window.BYBTheme.onCustomHexText(this.value)" class="flex-1 h-10 px-3.5 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800 uppercase focus:outline-none focus:ring-2 focus:ring-slate-900">
              <button type="button" onclick="window.BYBTheme.applyCustomFromInput()" class="px-4 h-10 rounded-xl text-white font-bold text-xs shadow-sm transition hover:opacity-90 shrink-0" style="background-color: var(--brand-primary, #06033A);">
                Apply Color
              </button>
            </div>
            <p class="text-[11px] text-slate-400 mt-2">Pick any hex code. The system will dynamically generate full 50-950 UI shades &amp; accents.</p>
          </div>

          <!-- Live Component Preview -->
          <div class="p-4 rounded-2xl border border-slate-200 bg-white">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">Live Component Preview</span>
            <div class="flex flex-wrap items-center gap-3">
              <button type="button" class="px-4 py-2 rounded-xl text-white font-bold text-xs shadow-md transition" style="background-color: var(--brand-primary, #06033A);">
                Primary Action Button
              </button>
              <span class="px-3 py-1 rounded-lg text-xs font-bold" style="background-color: var(--brand-50, #eef1f8); color: var(--brand-700, #06033A); border: 1px solid var(--brand-200, #bdcbe7);">
                Active Tag / Filter
              </span>
              <div class="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-sm" style="background-color: var(--brand-primary, #06033A);">
                BYB
              </div>
              <span class="text-xs font-extrabold" style="color: var(--brand-primary, #06033A);">
                Sample Highlight Text
              </span>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div class="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/70 shrink-0">
          <div class="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span class="w-2.5 h-2.5 rounded-full" style="background-color: var(--brand-primary, #06033A);"></span>
            <span>Saved automatically across all pages</span>
          </div>
          <button type="button" onclick="window.BYBTheme.closeModal()" class="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs shadow hover:bg-slate-800 transition">
            Done
          </button>
        </div>

      </div>
    `;

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.BYBTheme.closeModal();
      }
    });

    document.body.appendChild(modal);
    return modal;
  }

  // Global Theme API
  window.BYBTheme = {
    presets: PRESET_THEMES,

    getConfig: function () {
      return loadConfig();
    },

    selectPreset: function (themeId) {
      const cfg = loadConfig();
      cfg.themeId = themeId;
      if (themeId !== 'custom') {
        cfg.customColor = PRESET_THEMES[themeId].primaryHex;
      }
      saveConfig(cfg);
      applyTheme(cfg);

      const colorInput = document.getElementById('byb-custom-color-input');
      const hexText = document.getElementById('byb-custom-hex-text');
      if (colorInput && PRESET_THEMES[themeId]) colorInput.value = PRESET_THEMES[themeId].primaryHex;
      if (hexText && PRESET_THEMES[themeId]) hexText.value = PRESET_THEMES[themeId].primaryHex;

      if (typeof window.showToast === 'function') {
        window.showToast(`Theme changed to ${PRESET_THEMES[themeId].name}`, 'info', 'palette');
      }
    },

    setMode: function (mode) {
      const cfg = loadConfig();
      cfg.mode = mode;
      saveConfig(cfg);
      applyTheme(cfg);

      if (typeof window.showToast === 'function') {
        window.showToast(`Appearance set to ${mode === 'dark' ? 'Dark Midnight' : 'Light'} Mode`, 'info', mode === 'dark' ? 'dark_mode' : 'light_mode');
      }
    },

    onCustomColorInput: function (hex) {
      const hexText = document.getElementById('byb-custom-hex-text');
      if (hexText) hexText.value = hex;
      const cfg = loadConfig();
      cfg.themeId = 'custom';
      cfg.customColor = hex;
      saveConfig(cfg);
      applyTheme(cfg, false);
    },

    onCustomHexText: function (val) {
      let hex = val.trim();
      if (!hex.startsWith('#')) hex = '#' + hex;
      if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        const colorInput = document.getElementById('byb-custom-color-input');
        if (colorInput) colorInput.value = hex;
        this.onCustomColorInput(hex);
      }
    },

    applyCustomFromInput: function () {
      const hexText = document.getElementById('byb-custom-hex-text');
      if (hexText) {
        this.onCustomHexText(hexText.value);
        if (typeof window.showToast === 'function') {
          window.showToast(`Custom theme color applied (${hexText.value.toUpperCase()})`, 'success', 'palette');
        }
      }
    },

    resetToDefault: function () {
      this.selectPreset('midnight');
      this.setMode('light');
      if (typeof window.showToast === 'function') {
        window.showToast('Reset to default Midnight Navy (#06033A) theme', 'success', 'restart_alt');
      }
    },

    openModal: function () {
      const modal = ensureThemeModal();
      modal.classList.remove('opacity-0', 'pointer-events-none');
      const card = document.getElementById('byb-theme-modal-card');
      if (card) {
        card.classList.remove('scale-95');
        card.classList.add('scale-100');
      }
    },

    closeModal: function () {
      const modal = document.getElementById('byb-theme-modal');
      if (modal) {
        modal.classList.add('opacity-0', 'pointer-events-none');
        const card = document.getElementById('byb-theme-modal-card');
        if (card) {
          card.classList.remove('scale-100');
          card.classList.add('scale-95');
        }
      }
    },

    toggleModal: function () {
      const modal = document.getElementById('byb-theme-modal');
      if (modal && !modal.classList.contains('pointer-events-none')) {
        this.closeModal();
      } else {
        this.openModal();
      }
    },

    init: function () {
      const config = loadConfig();
      // Ensure #06033A is default if empty
      if (!config.themeId) {
        config.themeId = 'midnight';
        config.customColor = '#06033A';
        config.mode = 'light';
        saveConfig(config);
      }
      applyTheme(config, false);
    }
  };

  // Immediate execution to prevent flash of wrong colors
  window.BYBTheme.init();

  // DOM ready hook to attach trigger handlers
  document.addEventListener('DOMContentLoaded', () => {
    window.BYBTheme.init();

    // Hook any button with data-action="theme-toggle"
    document.querySelectorAll('[data-action="theme-toggle"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.BYBTheme.toggleModal();
      });
    });

    // Keyboard shortcut: Escape closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        window.BYBTheme.closeModal();
      }
    });
  });

})();
