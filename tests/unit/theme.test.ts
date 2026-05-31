import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getStoredTheme, getActiveTheme, applyTheme, setTheme, toggleTheme } from '~/lib/theme';

const setMatch = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi
      .fn()
      .mockImplementation(() => ({
        matches,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
  });
};

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

describe('theme library', () => {
  it('returns null when nothing stored', () => {
    expect(getStoredTheme()).toBeNull();
  });

  it('returns stored theme', () => {
    localStorage.setItem('theme', 'light');
    expect(getStoredTheme()).toBe('light');
  });

  it('falls back to system preference when nothing stored', () => {
    setMatch(true);
    expect(getActiveTheme()).toBe('dark');
    setMatch(false);
    expect(getActiveTheme()).toBe('light');
  });

  it('applyTheme sets data-theme attribute', () => {
    applyTheme('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('setTheme persists and applies', () => {
    setTheme('light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('toggleTheme flips and returns new value', () => {
    setMatch(true);
    expect(toggleTheme()).toBe('light');
    expect(toggleTheme()).toBe('dark');
  });
});
