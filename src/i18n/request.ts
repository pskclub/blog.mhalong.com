import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import messages from '../../messages.json'
export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that the incoming `locale` is valid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    // @ts-ignore
    messages: messages[locale] ,
  }
})
