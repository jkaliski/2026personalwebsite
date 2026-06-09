'use client'

import {useEffect, useState} from 'react'
import type {MouseEvent} from 'react'

import type {LinkItem, SiteSettings} from '@/types/site'

export function Header({settings, nav}: {settings: SiteSettings; nav: LinkItem[]}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>) {
    const href = event.currentTarget.getAttribute('href') || ''
    setOpen(false)

    if (!href.startsWith('#') || href.length < 2) {
      return
    }

    const target = document.querySelector(href)
    if (!target) {
      return
    }

    event.preventDefault()
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 72,
      behavior: 'smooth',
    })
  }

  return (
    <header className="masthead">
      <div className="wrap masthead-inner">
        <a className="logo" href="#top" onClick={handleAnchorClick}>
          {settings.logoText} <em>{settings.logoSuffix}</em>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="lbl-open">Menu</span>
          <span className="bars" aria-hidden="true" />
        </button>
        <nav className="primary" id="primary-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={`${item.label}-${item.href}`} href={item.href} onClick={handleAnchorClick}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
