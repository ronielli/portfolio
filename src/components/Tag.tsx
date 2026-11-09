type TagProps = {
  children: string
}

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-line bg-panel-2/80 px-3 py-1 text-xs font-medium text-mint">
      {children}
    </span>
  )
}
