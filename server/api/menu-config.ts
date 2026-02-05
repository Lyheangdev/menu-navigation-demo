import { MenuItem } from "~/types/menu"

interface MenuResponse {
    topMenu: MenuItem[];
    bottomMenu: MenuItem[];
    profile: MenuItem[];
    quickMenu: MenuItem[];
}

const data: { topMenu: MenuItem[], bottomMenu: MenuItem[], profile: MenuItem[], quickMenu: MenuItem[] } = {
    topMenu: [
        {
            id: 1,
            label: "lịch trực tiếp",
            href: "lịch trực tiếp",
            icon: null,
            children: [
                { id: 11, label: "BÓNG ĐÁ", href: "#", icon: "soccer" },
                { id: 21, label: "Đua bi", href: "#", icon: "world-cup" },
                { id: 31, label: "BÓNG rổ", href: "#", icon: "basket-ball" },
                { id: 41, label: "e-sports", href: "#", icon: "esport" },
                { id: 51, label: "Casino", href: "#", icon: "cassino" }
            ]
        },
        {
            id: 2,
            label: "lịch thi đấu",
            href: "lịch thi đấu",
            icon: null,
            children: [
                { id: 12, label: "BÓNG ĐÁ", href: "#", icon: "soccer" },
                { id: 22, label: "Đua bi", href: "#", icon: "world-cup" },
                { id: 32, label: "BÓNG rổ", href: "#", icon: "basket-ball" },
                { id: 42, label: "e-sports", href: "#", icon: "esport" },
                { id: 52, label: "Casino", href: "#", icon: "cassino" }
            ]
        },
        {
            id: 3,
            label: "tỷ lệ kèo",
            href: "tỷ lệ kèo",
            icon: null,
            children: [
                { id: 13, label: "BÓNG ĐÁ", href: "#", icon: "soccer" },
                { id: 23, label: "Đua bi", href: "#", icon: "world-cup" },
                { id: 33, label: "BÓNG rổ", href: "#", icon: "basket-ball" },
                { id: 43, label: "e-sports", href: "#", icon: "esport" },
                { id: 53, label: "Casino", href: "#", icon: "cassino" }
            ]
        },
        {
            id: 4,
            label: "kết quả",
            href: "kết quả",
            icon: null,
            children: [
                { id: 14, label: "BÓNG ĐÁ", href: "#", icon: "soccer" },
                { id: 24, label: "Đua bi", href: "#", icon: "world-cup" },
                { id: 34, label: "BÓNG rổ", href: "#", icon: "basket-ball" },
                { id: 44, label: "e-sports", href: "#", icon: "esport" },
                { id: 54, label: "Casino", href: "#", icon: "cassino" }
            ]
        },
        {
            id: 5,
            label: "phòng chat",
            href: "phòng chat",
            icon: null,
            children: [
                { id: 15, label: "BÓNG ĐÁ", href: "#", icon: "soccer" },
                { id: 25, label: "Đua bi", href: "#", icon: "world-cup" },
                { id: 35, label: "BÓNG rổ", href: "#", icon: "basket-ball" },
                { id: 45, label: "e-sports", href: "#", icon: "esport" },
                { id: 55, label: "Casino", href: "#", icon: "cassino" }
            ]
        },
        {
            id: 6,
            label: "tin tức",
            href: "tin tức",
            icon: null,
            children: [
                { id: 16, label: "BÓNG ĐÁ", href: "#", icon: "soccer" },
                { id: 26, label: "Đua bi", href: "#", icon: "world-cup" },
                { id: 36, label: "BÓNG rổ", href: "#", icon: "basket-ball" },
                { id: 46, label: "e-sports", href: "#", icon: "esport" },
                { id: 56, label: "Casino", href: "#", icon: "cassino" }
            ]
        }
    ],
    bottomMenu: [
        {
            id: 1,
            label: "Bảng Tin",
            icon: "message",
            href: '#'
        },
        {
            id: 2,
            label: "Reels",
            icon: "reels",
            href: '#'
        },
        {
            id: 3,
            label: "Highlight",
            icon: "highligh",
            href: '#'
        },
        {
            id: 4,
            label: "Kèo",
            icon: "feedback",
            href: "#"
        },
        {
            id: 5,
            label: "Phim Ảnh",
            icon: "film",
            href: "#"
        },
        {
            id: 6,
            label: "Truyện Tranh",
            icon: "book",
            href: "#"
        }
    ],
    profile: [{
        id: 1,
        label: "Trung tâm Tài khoản",
        icon: "user",
        href: '#'
    }, {
        id: 2,
        label: "Trang cá nhân",
        icon: "home",
        href: '#'
    }, {
        id: 3,
        label: "Nhiệm vụ",
        icon: "target",
        href: '#'
    }, {
        id: 4,
        label: "Ví của bạn",
        icon: "wallet",
        href: '#'
    }, {
        id: 5,
        label: "lịch sử giao dịch",
        icon: "stats",
        href: '#'
    }, {
        id: 6,
        label: "Thoát tài khoản",
        icon: "exit",
        href: '#'
    }],
    quickMenu: [{
        id: 1,
        label: "Soccer",
        href: "#",
        icon: "soccer"
    }, {
        id: 2,
        label: "Basket ball",
        href: "#",
        icon: "basket-ball"
    }, {
        id: 3,
        label: "Esport",
        href: "#",
        icon: "esport"
    }]
}



export default defineEventHandler(async () => {
    return new Promise<MenuResponse>((resolve) => {
        resolve(data)
    })
})