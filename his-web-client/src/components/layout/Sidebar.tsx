import React from 'react'
import { NavLink } from 'react-router-dom'
import { navigation, utilities } from '../../config/navigation'
import Icon from '../ui/Icon'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">HIS</div>
        <div>
          <strong>HIS</strong>
          <span>Hospital Information System</span>
        </div>
      </div>

      <div className="live-chip">
        <span />
        Live system
      </div>

      <nav className="nav-section" aria-label="Primary">
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-spacer" />

      <nav className="nav-section utility" aria-label="Utilities">
        {utilities.map((item) => (
          <NavLink key={item.to} to={item.to} className="nav-item">
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="site-selector" type="button">
        <span>
          <small>Hospital site</small>
          Central Hospital
        </span>
        <Icon name="chevron" />
      </button>
    </aside>
  )
}
