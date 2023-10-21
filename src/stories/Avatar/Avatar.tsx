import { BorderRadius } from '../../types/types'
import styles from './Avatar.module.css'

interface AvatarProps {
  src: string
  alt: string
  onErrorImg: string
  bRad?: BorderRadius
  isOnline?: boolean
}

export const Avatar = ({
  src,
  alt,
  bRad,
  onErrorImg,
  isOnline
}: AvatarProps) => {
  const handleOnError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imageElement = e.currentTarget as HTMLImageElement
    imageElement.src = onErrorImg
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <img
        src={src}
        alt={alt}
        className={`${styles.avatarXs} ${bRad}`}
        onError={handleOnError}
        onLoad={(e) => {
          const imageElement = e.currentTarget as HTMLImageElement
          const container = imageElement.parentElement
          if (container) {
            container.style.width = `${imageElement.width}px`
            container.style.height = `${imageElement.height}px`
          }
        }}
      />
      {isOnline && (
        <span
          style={{
            position: 'absolute',
            bottom: '13px',
            right: '13px',
            width: '20px',
            height: '20px',
            backgroundColor: 'green',
            borderRadius: '50%',
            border: '2px solid white'
          }}
        ></span>
      )}
    </div>
  )
}
