/**
 * URL State Encoding System
 *
 * Encodes/decodes design system state to/from URL parameters
 * for shareable links. Uses LZ-String compression to minimize URL length.
 *
 * Features:
 * - Compressed URL encoding (LZ-String)
 * - URL length validation (< 2000 chars)
 * - Fallback to localStorage for large designs
 * - Type-safe encoding/decoding
 */

import LZString from 'lz-string'
import type { DesignSystem } from '@/types/design-system'

/**
 * Maximum URL length before warning/fallback
 * Most browsers support 2000+ characters, but we keep it safe
 */
const MAX_URL_LENGTH = 2000

/**
 * URL parameter key for encoded design system
 */
const URL_PARAM_KEY = 'design'

/**
 * Result of URL encoding operation
 */
export interface EncodeResult {
  success: boolean
  url: string | null
  warning?: 'url-too-long' | 'encoding-failed'
  length?: number
}

/**
 * Result of URL decoding operation
 */
export interface DecodeResult {
  success: boolean
  design: DesignSystem | null
  error?:
    | 'no-param'
    | 'invalid-compression'
    | 'invalid-json'
    | 'decoding-failed'
}

/**
 * Encodes a design system to a shareable URL
 *
 * @param design - Design system to encode
 * @returns Encoding result with URL or warning
 *
 * @example
 * const result = encodeDesignToURL(myDesign);
 * if (result.success && result.url) {
 *   navigator.clipboard.writeText(result.url);
 * } else {
 *   console.warn(result.warning);
 * }
 */
export function encodeDesignToURL(design: DesignSystem): EncodeResult {
  try {
    // Convert to JSON (remove any functions or non-serializable data)
    const json = JSON.stringify(design)

    // Compress using LZ-String (URI-safe encoding)
    const compressed = LZString.compressToEncodedURIComponent(json)

    // Build full URL
    const baseUrl = `${window.location.origin}${window.location.pathname}`
    const url = `${baseUrl}?${URL_PARAM_KEY}=${compressed}`

    // Check length
    if (url.length > MAX_URL_LENGTH) {
      console.warn(
        `⚠️ URL too long (${url.length} chars). Falling back to localStorage.`,
      )
      return {
        success: false,
        url: null,
        warning: 'url-too-long',
        length: url.length,
      }
    }

    console.log(`✅ Design encoded to URL (${url.length} chars)`)
    return {
      success: true,
      url,
      length: url.length,
    }
  } catch (error) {
    console.error('❌ Failed to encode design to URL:', error)
    return {
      success: false,
      url: null,
      warning: 'encoding-failed',
    }
  }
}

/**
 * Decodes a design system from the current URL
 *
 * @returns Decoding result with design system or error
 *
 * @example
 * const result = decodeURLToDesign();
 * if (result.success && result.design) {
 *   loadDesign(result.design);
 * }
 */
export function decodeURLToDesign(): DecodeResult {
  try {
    // Get URL params
    const params = new URLSearchParams(window.location.search)
    const compressed = params.get(URL_PARAM_KEY)

    // No design param in URL
    if (!compressed) {
      return {
        success: false,
        design: null,
        error: 'no-param',
      }
    }

    // Decompress
    const json = LZString.decompressFromEncodedURIComponent(compressed)

    if (!json) {
      console.error('❌ Failed to decompress URL parameter')
      return {
        success: false,
        design: null,
        error: 'invalid-compression',
      }
    }

    // Parse JSON
    const design = JSON.parse(json) as DesignSystem

    console.log('✅ Design decoded from URL')
    return {
      success: true,
      design,
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('❌ Invalid JSON in URL parameter:', error)
      return {
        success: false,
        design: null,
        error: 'invalid-json',
      }
    }

    console.error('❌ Failed to decode URL:', error)
    return {
      success: false,
      design: null,
      error: 'decoding-failed',
    }
  }
}

/**
 * Updates the browser URL with encoded design system
 * Does not reload the page (uses replaceState)
 *
 * @param design - Design system to encode
 * @param replace - Use replaceState instead of pushState (default: true)
 * @returns True if URL updated successfully
 *
 * @example
 * // Update URL without adding to history
 * updateURL(designSystem);
 *
 * // Add to history (back button will work)
 * updateURL(designSystem, false);
 */
export function updateURL(design: DesignSystem, replace = true): boolean {
  const result = encodeDesignToURL(design)

  if (!result.success || !result.url) {
    // Clear design param if encoding failed
    const url = new URL(window.location.href)
    url.searchParams.delete(URL_PARAM_KEY)

    const method = replace ? 'replaceState' : 'pushState'
    window.history[method]({}, '', url.toString())

    return false
  }

  // Update URL without reload
  const method = replace ? 'replaceState' : 'pushState'
  window.history[method]({}, '', result.url)

  return true
}

/**
 * Clears the design parameter from the URL
 *
 * @param replace - Use replaceState instead of pushState (default: true)
 *
 * @example
 * clearURLState(); // Remove ?design=... from URL
 */
export function clearURLState(replace = true): void {
  const url = new URL(window.location.href)
  url.searchParams.delete(URL_PARAM_KEY)

  const method = replace ? 'replaceState' : 'pushState'
  window.history[method]({}, '', url.toString())

  console.log('ℹ️ Cleared design from URL')
}

/**
 * Checks if the current URL contains an encoded design
 *
 * @returns True if URL has design parameter
 */
export function hasDesignInURL(): boolean {
  const params = new URLSearchParams(window.location.search)
  return params.has(URL_PARAM_KEY)
}

/**
 * Estimates the URL length for a given design system
 * Useful for warning users before encoding
 *
 * @param design - Design system to estimate
 * @returns Estimated URL length in characters
 */
export function estimateURLLength(design: DesignSystem): number {
  try {
    const json = JSON.stringify(design)
    const compressed = LZString.compressToEncodedURIComponent(json)
    const baseUrl = `${window.location.origin}${window.location.pathname}`
    const url = `${baseUrl}?${URL_PARAM_KEY}=${compressed}`
    return url.length
  } catch {
    return 0
  }
}

/**
 * Checks if a design system can be encoded to URL
 *
 * @param design - Design system to check
 * @returns True if design can fit in URL
 */
export function canEncodeToURL(design: DesignSystem): boolean {
  const length = estimateURLLength(design)
  return length > 0 && length <= MAX_URL_LENGTH
}

/**
 * Gets a shareable URL for the current design system
 * This is a convenience function that combines encoding and copying
 *
 * @param design - Design system to share
 * @returns Shareable URL or null if too large
 */
export function getShareableURL(design: DesignSystem): string | null {
  const result = encodeDesignToURL(design)
  return result.success ? result.url : null
}

/**
 * Copies the shareable URL to clipboard
 *
 * @param design - Design system to share
 * @returns Promise resolving to true if copied successfully
 *
 * @example
 * const copied = await copyShareableURL(designSystem);
 * if (copied) {
 *   toast.success('Link copied to clipboard!');
 * } else {
 *   toast.error('Design too large for URL sharing');
 * }
 */
export async function copyShareableURL(design: DesignSystem): Promise<boolean> {
  const url = getShareableURL(design)

  if (!url) {
    console.warn('⚠️ Cannot create shareable URL - design too large')
    return false
  }

  try {
    await navigator.clipboard.writeText(url)
    console.log('✅ Shareable URL copied to clipboard')
    return true
  } catch (error) {
    console.error('❌ Failed to copy to clipboard:', error)
    return false
  }
}
