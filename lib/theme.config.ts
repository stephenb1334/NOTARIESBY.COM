/**
 * Notaries By - Comprehensive Theme Configuration
 *
 * This file provides type-safe access to the complete design system
 * with Mirage (#1F2238) as the signature accent color.
 */

export const theme = {
  colors: {
    primary: {
      darkest: "#1B1C1D", // Eerie Black
      dark: "#1F2238", // Mirage ⭐ PRIMARY ACCENT
      base: "#2C3036", // Shark
      mid: "#4C5870", // Fiord
      light: "#A9A9A9", // Silver Chalice
      lightest: "#FFFFFF", // White
    },
    neutral: {
      900: "#1B1C1D", // Eerie Black
      700: "#4D4D4F", // Ship Gray
      500: "#808082", // Gray
      300: "#B3B3B3", // Magnesium
      100: "#F2F2F2", // Concrete
      50: "#FFFFFF", // White
    },
    semantic: {
      success: "#10B981", // Emerald
      warning: "#F59E0B", // Amber
      error: "#EF4444", // Red
      info: "#3B82F6", // Blue
    },
    syntax: {
      keyword: "#3B82F6", // Blue
      string: "#10B981", // Green
      number: "#F59E0B", // Orange
      function: "#8B5CF6", // Purple
      comment: "#808082", // Gray
      variable: "#FFFFFF", // White
      operator: "#A9A9A9", // Silver Chalice
      type: "#06B6D4", // Cyan
    },
    ui: {
      background: {
        primary: "#2C3036", // Shark
        secondary: "#1F2238", // Mirage ⭐
        tertiary: "#1B1C1D", // Eerie Black
      },
      text: {
        primary: "#FFFFFF", // White
        secondary: "#A9A9A9", // Silver Chalice
        tertiary: "#808082", // Gray
      },
      border: {
        default: "#4C5870", // Fiord
        subtle: "#4D4D4F", // Ship Gray
      },
      accent: {
        default: "#1F2238", // Mirage ⭐
        hover: "#2A2F4A", // Mirage +10%
        active: "#161A2C", // Mirage -10%
      },
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
  },
  borderRadius: {
    sm: "4px",
    md: "7px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.25)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.20)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.18)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.15)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    glow: "0 0 0 3px rgba(76, 88, 112, 0.30)",
    solid: "0 0 0 1px #4C5870",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    hover: "150ms ease-in-out",
    modal: "200ms ease-out",
    slide: "300ms cubic-bezier(0.87, 0, 0.13, 1)",
  },
  typography: {
    code: {
      family: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
      sizes: {
        code: "14px",
        terminal: "13px",
        lineNumbers: "12px",
      },
      lineHeight: 1.6,
      letterSpacing: "0.5px",
    },
    ui: {
      family: "'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif",
      weights: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      sizes: {
        xs: "11px",
        sm: "13px",
        base: "14px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "56px",
      },
      lineHeights: {
        tight: 1.4,
        base: 1.6,
        relaxed: 1.8,
      },
    },
  },
  components: {
    editorPanel: {
      background: "#2C3036",
      border: "#4C5870",
      padding: "24px",
      borderRadius: "12px",
    },
    codeBlock: {
      background: "#1F2238", // Mirage ⭐
      border: "#4C5870",
      padding: "16px",
      borderRadius: "8px",
    },
    terminal: {
      background: "#1F2238", // Mirage ⭐
      border: "#4C5870",
      padding: "16px",
      borderRadius: "8px",
      fontSize: "13px",
    },
    nlpInput: {
      background: "#1F2238", // Mirage ⭐
      border: "#4C5870",
      padding: "16px",
      borderRadius: "8px",
      focusRing: "0 0 0 3px rgba(76, 88, 112, 0.30)",
    },
    modal: {
      background: "#1F2238", // Mirage ⭐
      border: "#4C5870",
      padding: "24px",
      borderRadius: "12px",
      overlay: "rgba(27, 28, 29, 0.80)",
    },
    button: {
      primary: {
        background: "#4C5870",
        color: "#FFFFFF",
        hover: "#5A6782",
        active: "#3E4A60",
      },
      secondary: {
        background: "#1F2238", // Mirage ⭐
        color: "#FFFFFF",
        hover: "#2A2F4A",
        active: "#161A2C",
      },
    },
  },
  accessibility: {
    contrast: {
      minimum: 4.5,
      enhanced: 7,
    },
    focusRing: {
      width: "2px",
      color: "#4C5870",
      offset: "2px",
    },
  },
} as const

export type Theme = typeof theme

/**
 * Helper function to get color with opacity
 */
export function withOpacity(color: string, opacity: number): string {
  const hex = color.replace("#", "")
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

/**
 * Helper function to get CSS variable
 */
export function cssVar(variable: string): string {
  return `var(--${variable})`
}

/**
 * Predefined component styles for common patterns
 */
export const componentStyles = {
  editorPanel: "bg-shark border border-fiord rounded-lg p-6 shadow-md transition-all duration-200",
  codeBlock: "bg-mirage border border-fiord rounded-lg p-4 shadow-md font-mono text-sm",
  terminal: "bg-mirage border border-fiord rounded-lg p-4 font-mono text-sm leading-relaxed",
  nlpInput:
    "bg-mirage border border-fiord rounded-lg p-4 transition-all duration-200 focus-within:ring-2 focus-within:ring-fiord",
  modalOverlay: "bg-mirage border border-fiord rounded-xl p-6 shadow-lg",
  btnPrimary:
    "bg-[#4C5870] text-white border border-[#4C5870] rounded-lg px-4 py-2 hover:bg-[#5A6782] transition-all duration-150",
  btnSecondary:
    "bg-mirage text-white border border-fiord rounded-lg px-4 py-2 hover:bg-[#2A2F4A] transition-all duration-150",
  focusRing: "outline-none ring-2 ring-fiord ring-offset-2",
} as const

export default theme
