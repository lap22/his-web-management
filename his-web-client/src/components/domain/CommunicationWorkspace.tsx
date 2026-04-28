import React from 'react'
import Panel, { PanelHeader } from '../ui/Panel'
import StatusBadge, { type StatusTone } from '../ui/StatusBadge'

type Thread = {
  name: string
  meta: string
  status: string
  tone?: StatusTone
}

type Message = {
  sender: string
  body: string
  time: string
}

type CommunicationWorkspaceProps = {
  title: string
  metric: string
  threads: Thread[]
  messages: Message[]
}

export default function CommunicationWorkspace({ title, metric, threads, messages }: CommunicationWorkspaceProps) {
  return (
    <section className="page-grid communication-grid">
      <Panel span={4}>
        <PanelHeader eyebrow="Inbox" title={title} action={<StatusBadge tone="warning">{metric}</StatusBadge>} />
        <div className="thread-list">
          {threads.map((thread) => (
            <button className="thread-item" key={thread.name} type="button">
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
            <article className="message-bubble" key={`${message.sender}-${message.time}`}>
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
