import React from 'react'
import type { CommunicationMessage, CommunicationThread } from '../../types/his'
import Panel, { PanelHeader } from '../ui/Panel'
import StatusBadge from '../ui/StatusBadge'

type CommunicationWorkspaceProps = {
  title: string
  metric: string
  threads: CommunicationThread[]
  messages: CommunicationMessage[]
}

export default function CommunicationWorkspace({ title, metric, threads, messages }: CommunicationWorkspaceProps) {
  return (
    <section className="page-grid communication-grid">
      <Panel span={4}>
        <PanelHeader eyebrow="Inbox" title={title} action={<StatusBadge tone="warning">{metric}</StatusBadge>} />
        <div className="thread-list">
          {threads.map((thread) => (
            <button className="thread-item" key={thread.id} type="button">
              <div>
                <strong>{thread.name}</strong>
                <p>{thread.meta}</p>
              </div>
              <StatusBadge tone={thread.tone}>{thread.status}</StatusBadge>
            </button>
          ))}
        </div>
      </Panel>

      <Panel span={8}>
        <PanelHeader eyebrow="Conversation" title="Active Thread" action={<StatusBadge>Live</StatusBadge>} />
        <div className="message-list">
          {messages.map((message) => (
            <article className="message-bubble" key={message.id}>
              <div>
                <strong>{message.sender}</strong>
                <time>{message.time}</time>
              </div>
              <p>{message.body}</p>
            </article>
          ))}
        </div>
      </Panel>
    </section>
  )
}
