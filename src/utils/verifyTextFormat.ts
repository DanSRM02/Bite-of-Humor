export function formatText(
  isTextRaw: boolean,
  key: string,
  t: (key: string, config?: { value?: number }) => string,
  config?: { value?: number | string | bigint }
) {
  if (!key) return null;
  if (isTextRaw) return key;
  if (config?.value != null) {
    return t(key, { value: Number(config.value) });
  }

  return t(key);
}
