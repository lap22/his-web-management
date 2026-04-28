import React from 'react'
import { useLocation } from 'react-router-dom'
import { fallbackPageMeta, pageMeta } from '../../config/pageMeta'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function TopBar() {
  const location = useLocation()
  const meta = pageMeta[location.pathname] ?? fallbackPageMeta

  return (
    <header className="topbar">
      <div className="page-heading">
        <div className="breadcrumb">MediAdmin / {meta.title}</div>
        <h1>{meta.title}</h1>
        <p>{meta.subtitle}</p>
      </div>

      <div className="topbar-actions">
        <label className="search-box">
          <Icon name="search" />
          <input aria-label="Search" placeholder={meta.search} />
        </label>
        <Button icon="filter" variant="secondary">Filter</Button>
        <Button icon="export" variant="outline">Export</Button>
        <Button icon="plus">{meta.action}</Button>
        <button className="bell-button" aria-label="Notifications" type="button">
          <Icon name="bell" />
          <span>4</span>
        </button>
        <div className="time-block">
          <strong>Tue, Apr 28</strong>
          <span>12:50 PM ICT</span>
        </div>
        <button className="profile-menu" type="button">
          
          <div>
            <strong>Staff</strong>
            <small>System Lead</small>
          </div>
          <Icon name="chevron" />
        </button>
      </div>
    </header>
  )
}
