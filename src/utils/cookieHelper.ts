export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  
  const cookies = document.cookie.split(';');
  
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) {
      return decodeURIComponent(value);
    }
  }
  
  return undefined;
}

export function getMockDataSetting(): boolean {
  const cookieValue = getCookie("useMockData");
  return cookieValue === "true";
}

export function setCookie(name: string, value: string, days: number = 7): void {
  if (typeof document === "undefined") return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

export function setMockDataSetting(useMock: boolean): void {
  setCookie("useMockData", useMock.toString());
}
