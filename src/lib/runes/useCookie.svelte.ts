interface CookieOptions {
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'Strict' | 'Lax' | 'None';
}

const defaultCookieOptions: CookieOptions = {
  path: '/'
};

/**
 * Read a cookie value by name
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : null;
}

/**
 * Write a cookie with options
 */
function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  if (typeof document === 'undefined') return;

  const config: CookieOptions = {
    ...defaultCookieOptions,
    ...options
  };

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  for (const [key, val] of Object.entries(config)) {
    if (val === undefined) continue;
    updatedCookie += '; ' + key;
    if (val !== true) {
      updatedCookie += '=' + val;
    }
  }

  document.cookie = updatedCookie;
}

/**
 * Delete a cookie by name
 */
function deleteCookie(name: string, options: Pick<CookieOptions, 'path' | 'domain'> = {}): void {
  setCookie(name, '', { ...options, maxAge: -1 });
}

/**
 * A Svelte rune for reading and writing cookies with reactive state
 */
export function useCookie(
  key: string,
  defaultValue: string = '',
  options: CookieOptions = {}
) {
  // Initialize state with cookie value or default
  const initialValue = getCookie(key) ?? defaultValue;
  let value = $state(initialValue);

  return {
    get value() {
      return value;
    },
    set value(newValue: string) {
      value = newValue;
      setCookie(key, newValue, options);
    },
  };
}
