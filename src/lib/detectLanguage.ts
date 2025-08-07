export function detectLanguage(headers: Headers) {
  const acceptLang = headers.get('accept-language');
  const language = acceptLang?.split(',')[0]?.split('-')[0]; // "en-US" → "en"
  return language || 'en';
}
