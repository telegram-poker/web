export function ShareScreen({ onToast }: { onToast: (msg: string) => void }) {
  return (
    <div className="flex flex-col pb-16 overflow-y-auto h-full">
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{ background: 'rgba(0, 230, 118, 0.1)' }}
          >
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-(--color-muted)">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <p className="text-sm text-(--color-muted) font-semibold">敬请期待</p>
        </div>
      </div>
    </div>
  )
}