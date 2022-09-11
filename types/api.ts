export interface HomeLink {
  status: number
  data: getHomeLinkDatum[]
}

interface getHomeLinkDatum {
  id: number
  url: string
  name: string
  desc: string
  icon: string
  user_id: number
  date: string
  status: number
  view_in_home: number
}