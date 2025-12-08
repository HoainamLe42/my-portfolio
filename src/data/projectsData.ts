type Skill = {
    id: number;
    name: string;
    image: string;
};

type ProjectData = {
    id: number;
    title: string;
    skills: Skill[];
    desc: string;
    image: string;
    pathGithub: string;
    pathLiveDemo: string;
};

export const projectsData: ProjectData[] = [
    {
        id: 1,
        title: 'Food Order Website',
        skills: [
            { id: 1, name: 'React', image: '/images/skills/react.svg' },
            {
                id: 2,
                name: 'Tailwind CSS',
                image: '/images/skills/tailwind-css.svg',
            },
            { id: 3, name: 'Vite', image: '/images/skills/vite.svg' },
        ],
        desc: 'Food Order là một trang web đặt hàng thực phẩm trực tuyến, cho phép người dùng chọn món, đặt hàng và thanh toán dễ dàng trên cả máy tính và điện thoại nhờ thiết kế responsive. Được xây dựng bằng Vite, ReactJS và Tailwind CSS, dự án tích hợp API để lấy dữ liệu menu động, đảm bảo giao diện thân thiện, tốc độ tải nhanh và trải nghiệm người dùng mượt mà.',
        image: '/images/work-1.png',
        pathGithub: 'https://github.com/HoainamLe42/Ecommerce-food',
        pathLiveDemo: 'https://ecommerce-food-plum.vercel.app',
    },
    {
        id: 2,
        title: 'Restaurant Website',
        skills: [
            { id: 1, name: 'NextJS', image: '/images/skills/next.svg' },
            {
                id: 2,
                name: 'Tailwind CSS',
                image: '/images/skills/tailwind-css.svg',
            },
            { id: 3, name: 'Vite', image: '/images/skills/vite.svg' },
        ],
        desc: 'Restaurant Booking là một trang web nhà hàng cho phép người dùng đặt bàn và đặt hàng thực phẩm trực tuyến với thiết kế responsive, tương thích trên mọi thiết bị. Được xây dựng bằng Next.js và Tailwind CSS, dự án tích hợp API từ JSON Server để quản lý dữ liệu động về thực đơn và đặt bàn, mang lại trải nghiệm người dùng mượt mà và hiệu suất cao.',
        image: '/images/work-2.png',
        pathGithub: 'https://github.com/HoainamLe42/restaurant-web',
        // pathLiveDemo:
        //     'https://restaurant-web-git-main-hoainamle99s-projects.vercel.app',
        pathLiveDemo: 'https://jzfzs9cq-3000.asse.devtunnels.ms/',
    },
    {
        id: 3,
        title: 'Phones Store Website',
        skills: [
            { id: 1, name: 'HTML', image: '/images/skills/html.svg' },
            { id: 2, name: 'SASS', image: '/images/skills/sass.svg' },
            {
                id: 3,
                name: 'Javascript',
                image: '/images/skills/javascript.svg',
            },
        ],
        desc: 'Phones Clone  Website bán điện thoại giống 95% CellphoneS.vn thật, code 100% bằng HTML, CSS và JavaScript thuần. Giao diện responsive desktop-first, mega menu đa cấp, sticky header/sidebar, danh sách & chi tiết sản phẩm động, giỏ hàng, định dạng giá Việt Nam và mock API. Code sạch, tái sử dụng component, sẵn sàng mở rộng.',
        image: '/images/work-3.png',
        pathGithub: 'https://github.com/HoainamLe42/cellphones-clone.git',
        pathLiveDemo: 'https://cellphones-clone.vercel.app/',
    },
];
