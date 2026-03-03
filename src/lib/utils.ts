import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BOOKING_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSf1toGLwOt0ZsQzzajdnhGMYI5_S-bbERylF0h0eBbm4vAGKw/viewform'
export const PHONE = '(508)-241-1800'
export const PHONE_HREF = 'tel:+15082411800'
export const EMAIL = 'partybuscapecod@gmail.com'
export const SITE_URL = 'https://partybuscapecod.com'
