// ─── Site Configuration ─────────────────────────────────────────────
// Alle Texte, Links, Bilder und Codes an EINER Stelle änderbar.
// Kann später durch einen DB/API-Fetch ersetzt werden.
// ────────────────────────────────────────────────────────────────────

export interface LinkItem {
  id: string
  /** i18n key for the card title, e.g. "links.youtube.title" */
  titleKey: string
  /** i18n key for the card description */
  descKey?: string
  url: string
  icon: string
  /** '_blank' for external, '_self' for internal */
  target?: '_blank' | '_self'
  /** Optional discount code (shown + copied on click) */
  discountCode?: string
  /** If set, clicking the card triggers a download confirmation */
  downloadFile?: string
  /** Download file display name */
  downloadName?: string
}

export interface ProfileConfig {
  name: string
  subtitleKey: string
  image: string
}

export interface TwitchConfig {
  channel: string
  chatFallbackUrl: string
  /** ICS calendar URL used to show the next scheduled stream when offline */
  icsUrl: string
}

export interface Link {
  labelKey: string
  url: string
}

export interface DonationTrigger {
  id: string
  price: string
  /**
   * Numeric value for the donation link (e.g. 4.20).
   * If set, a "Donate {price}" button will be shown.
   */
  amountValue?: number
  descKey: string
  textKey?: string // Added textKey to fix TS errors
  audio?: string // Added audio to fix TS errors
}

export interface OnlyBartConfig { // New interface for OnlyBart settings
    title: string;
    logoUrl: string;
}

export interface ImpressumConfig {
  name: string
  company: string
  street: string
  city: string
  email: string
}

export interface StreamplanCategory {
  id: string
  labelKey: string
  url: string
  color: string
}

export interface StreamplanConfig {
  icsUrl: string
  categories: StreamplanCategory[]
}

export interface StreamElementsConfig {
  donationUrl: string
  triggers: DonationTrigger[]
}

export interface SiteConfig {
  profile: ProfileConfig
  twitch: TwitchConfig
  links: LinkItem[]
  games: LinkItem[]
  moderatorLink: Link
  copyrightHolder: string
  onlyBart: OnlyBartConfig  // Should contain the default "OnlyBart" for this project
  redirects: Record<string, string> // Add redirects here
}

const siteConfig: SiteConfig = {
  // ── Profil ──
  profile: {
    name: 'CurlyCeddy',
    subtitleKey: 'hero.subtitle',
    image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/648d9b2c-9ec5-4d90-91b4-8c0ae772a60a-profile_image-70x70.png',
  },

  // ── Twitch ──
  twitch: {
    // Allow overriding the channel via Vite env var VITE_CHANNEL_NAME for different deployments.
    // If not present, fall back to the hardcoded username.
    channel: (import.meta.env.VITE_CHANNEL_NAME as string),

    // Allow overriding the chat fallback URL entirely via VITE_CHAT_FALLBACK_URL.
    // If not set, derive a sensible default from the channel name.
    chatFallbackUrl:
      `https://www.twitch.tv/${(import.meta.env.VITE_CHANNEL_NAME as string)}/chat`,

    icsUrl: '/api/calendar.ics',
  },

  // ── Haupt-Links ──
  links: [
    {
      id: 'clipdesmonats',
      titleKey: 'links.clipdesmonats.title',
      descKey: 'links.clipdesmonats.desc',
      url: '/clipdesmonats',
      icon: '/img/logos/cdm.webp',
      target: '_self',
    },
    {
      id: 'youtube',
      titleKey: 'links.youtube.title',
      descKey: 'links.youtube.desc',
      url: 'https://www.youtube.com/@CurlyCeddy',
      icon: '/img/logos/youtube.svg',
      target: '_blank',
    },
    {
      id: 'onlybart',
      titleKey: 'links.onlybart.title',
      descKey: 'links.onlybart.desc',
      url: '/onlybart',
      icon: '/img/logos/OB.webp',
      target: '_self',
    },
    {
      id: 'discord',
      titleKey: 'links.discord.title',
      descKey: 'links.discord.desc',
      url: 'https://discord.gg/9cgUxM34ym',
      icon: '/img/logos/discord.svg',
      target: '_blank',
    },
    {
      id: 'email',
      titleKey: 'links.email.title',
      descKey: 'links.email.desc',
      url: 'mailto:curlyceddy@gmail.com?subject=Kontaktanfrage',
      icon: '/img/logos/email.svg',
      target: '_self',
    },
  ],

  // ── Games ──
  games: [
    {
      id: 'bartclicker',
      titleKey: 'games.bartclicker.title',
      descKey: 'games.bartclicker.desc',
      url: '/bartclicker',
      icon: '/img/logos/bartclicker.svg',
      target: '_self',
    },
  ],

  moderatorLink: { labelKey: 'profile.moderate', url: '/moderate' },

  copyrightHolder: 'CurlyCeddy',
  
  onlyBart: {
    title: 'OnlyBart',
    logoUrl: '/img/logos/OB.webp'
  },

  // ── Redirects ──
  redirects: {
    "/yt":  "https://www.youtube.com/@CurlyCeddy",
    "/youtube":  "https://www.youtube.com/@CurlyCeddy",
    "/discord":   "https://discord.gg/9cgUxM34ym",
    "/dc":   "https://discord.gg/9cgUxM34ym",
    "/cdm":   "https://www.curlyceddy.de/clipdesmonats",
    "/cdj":   "https://www.curlyceddy.de/clipdesjahres",
    "/twitch":   "https://www.twitch.tv/curlyceddy",
    "/ob":   "https://www.curlyceddy.de/onlybart",
  }
}

export default siteConfig
