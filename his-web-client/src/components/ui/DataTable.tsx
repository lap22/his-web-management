import React from 'react'

type DataTableProps = {
  columns: string[]
  rows: React.ReactNode[][]
}

export default function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="data-table" style={{ '--column-count': columns.length } as React.CSSProperties}>
      <div className="table-head">
        {columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      {rows.map((row, index) => (
        <div className="table-row" key={index}>
          {row.map((cell, cellIndex) => (
            <span key={cellIndex}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
