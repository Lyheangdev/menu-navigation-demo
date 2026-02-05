export interface MenuItem {
    id: number
    label: string
    href: string
    icon: string | null
    children?: MenuItem[]
}