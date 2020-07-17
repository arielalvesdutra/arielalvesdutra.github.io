
import React from 'react'
import { useImage } from 'react-image'
import { BeatLoader } from 'react-spinners'


interface useImageWithLoaderProps {
  url: string
  alt: string
  title?: string
  className?: string
}

export const useImageWithLoader = ({ url, alt, title = '', className = '' }: useImageWithLoaderProps) => {

  const { src, isLoading } = useImage({ srcList: url, useSuspense: false })

  return (
    <>
      {isLoading && (
        <div className={className}>
          <BeatLoader color="#666666" />
        </div>
      )}
      {!isLoading && (
        <img className={className} src={src} alt={alt} title={title} />
      )}
    </>
  )
}
