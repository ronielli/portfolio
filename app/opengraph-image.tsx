import { ImageResponse } from 'next/og'

export const alt = 'Ronielli — Engenheiro de Software Full Stack'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(900px 500px at 12% -10%, rgba(34,211,238,0.22), transparent 55%), radial-gradient(800px 480px at 95% 15%, rgba(16,185,129,0.20), transparent 50%), linear-gradient(135deg, #07101c 0%, #0b1120 55%, #081018 100%)',
          color: '#e8eef7',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '36px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #22d3ee, #10b981)',
              color: '#07101c',
              fontSize: '32px',
              fontWeight: 700,
            }}
          >
            RJ
          </div>
          <div style={{ fontSize: '26px', color: '#a7b4c7', letterSpacing: '2px' }}>
            ronielli.com
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: '104px', fontWeight: 800, letterSpacing: '-3px', color: '#5eead4' }}>
          Ronielli
        </div>

        <div style={{ display: 'flex', fontSize: '46px', fontWeight: 700, marginTop: '8px', color: '#ffffff' }}>
          Engenheiro de Software Full Stack
        </div>

        <div style={{ display: 'flex', fontSize: '28px', marginTop: '28px', color: '#a7b4c7', maxWidth: '900px' }}>
          Da placa embarcada ao app — produtos completos para a indústria e o varejo.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            height: '6px',
            width: '160px',
            borderRadius: '999px',
            background: 'linear-gradient(90deg, #22d3ee, #10b981)',
          }}
        />
      </div>
    ),
    size,
  )
}
