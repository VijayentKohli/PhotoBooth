import { useState, useEffect } from 'react'
import { ApiService } from '../services'
import { Photo } from '../models'

export const usePhotoList = function (): Photo[] {
  const [items, setItems] = useState([] as Photo[])

  useEffect(function (): any {
    ApiService.getPhotos().then(setItems)
    items.splice(4)
  }, [])

  return items
}
