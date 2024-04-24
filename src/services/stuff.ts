export type TStuffs = Array<any>

import { useStorage } from '@vueuse/core'

export const stuff = useStorage<TStuffs>('stuff-data', [])