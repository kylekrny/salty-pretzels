import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { Button } from './Button'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="mailto:hello@fixmyschitt.com"
              className="group"
              aria-label="Fix My Schitt email"
            >
              hello@ineedpretzels.com
            </Link>
            <Link
              href="tel:7206757448"
              className="group"
              aria-label="Fix My Schitt phone number"
            >
              (720) 675-7448
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} salty. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
