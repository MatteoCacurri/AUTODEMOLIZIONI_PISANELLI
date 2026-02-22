export type VehicleType = 'auto' | 'moto'

export interface PartsCategory {
  id: string
  label: string
  vehicleType: VehicleType
  iconName: string
  subcategories: string[]
}

export const PARTS_CATEGORIES: PartsCategory[] = [
  {
    id: 'motore-auto',
    label: 'Motori e Componenti',
    vehicleType: 'auto',
    iconName: 'Cog',
    subcategories: ['Motore completo', 'Testata', 'Carter', 'Albero motore', 'Turbocompressore'],
  },
  {
    id: 'trasmissione-auto',
    label: 'Trasmissione',
    vehicleType: 'auto',
    iconName: 'RefreshCw',
    subcategories: ['Cambio manuale', 'Cambio automatico', 'Frizione', 'Alberi di trasmissione'],
  },
  {
    id: 'carrozzeria-auto',
    label: 'Carrozzeria',
    vehicleType: 'auto',
    iconName: 'Shield',
    subcategories: ['Portiere', 'Paraurti', 'Cofani', 'Parafanghi', 'Retrovisori'],
  },
  {
    id: 'elettronica-auto',
    label: 'Elettronica e Impianti',
    vehicleType: 'auto',
    iconName: 'Zap',
    subcategories: ['Centraline', 'Alternatori', 'Motorini di avviamento', 'Far e luci'],
  },
  {
    id: 'sospensioni-auto',
    label: 'Sospensioni e Sterzo',
    vehicleType: 'auto',
    iconName: 'GitBranch',
    subcategories: ['Ammortizzatori', 'Molle', 'Bracci', 'Scatola sterzo', 'Cerchi e pneumatici'],
  },
  {
    id: 'moto-ricambi',
    label: 'Ricambi Moto e Scooter',
    vehicleType: 'moto',
    iconName: 'Bike',
    subcategories: ['Motori', 'Carrozzeria', 'Scarichi', 'Forcelle', 'Serbatoi'],
  },
]
