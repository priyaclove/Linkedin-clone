// Lightweight client-side auth state, persisted in localStorage.
// The backend does not issue JWTs, so we simply remember the logged-in user
// in the browser and use its presence to gate protected pages.

export type AuthUser = {
  id: number;
  username: string;
  email: string;
};

const STORAGE_KEY = "linkedin_user";

export function getUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

export function setUser(user: AuthUser): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function logout(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function isAuthenticated(): boolean {
  return getUser() !== null;
}
