type ProjectData = {
    id: number;
    title: string;
    desc: string;
    image: string;
    pathGithub: string;
    pathLiveDemo: string;
};

export const projectsData: ProjectData[] = [
    {
        id: 1,
        title: 'Food Order Website',
        desc: 'Food Order là một trang web đặt hàng thực phẩm trực tuyến, cho phép người dùng chọn món, đặt hàng và thanh toán dễ dàng trên cả máy tính và điện thoại nhờ thiết kế responsive. Được xây dựng bằng Vite, ReactJS và Tailwind CSS, dự án tích hợp API để lấy dữ liệu menu động, đảm bảo giao diện thân thiện, tốc độ tải nhanh và trải nghiệm người dùng mượt mà.',
        image: '/images/work-1.png',
        pathGithub: 'https://github.com/HoainamLe42/Ecommerce-food',
        pathLiveDemo: 'https://ecommerce-food-plum.vercel.app',
    },
    {
        id: 2,
        title: 'Restaurant Website',
        desc: 'Restaurant Booking là một trang web nhà hàng cho phép người dùng đặt bàn và đặt hàng thực phẩm trực tuyến với thiết kế responsive, tương thích trên mọi thiết bị. Được xây dựng bằng Next.js và Tailwind CSS, dự án tích hợp API từ JSON Server để quản lý dữ liệu động về thực đơn và đặt bàn, mang lại trải nghiệm người dùng mượt mà và hiệu suất cao.',
        image: '/images/work-2.png',
        pathGithub: 'https://github.com/HoainamLe42/restaurant-web',
        pathLiveDemo: 'restaurant-kf7trvu0x-hoainamle99s-projects.vercel.app',
    },
    {
        id: 3,
        title: 'Blog Website',
        desc: 'Blog Web là một nền tảng blog cho phép người dùng viết bài, thêm hình ảnh qua link và đọc bài từ nhiều tác giả khác, với giao diện responsive trên mọi thiết bị. Được xây dựng bằng Next.js và Tailwind CSS, dự án tích hợp API để quản lý bài viết động, cùng hệ thống admin cho phép duyệt và xóa bài, đảm bảo nội dung chất lượng và trải nghiệm người dùng mượt mà',
        image: '/images/work-3.png',
        pathGithub: 'https://github.com/HoainamLe42/Blog-web',
        pathLiveDemo: 'https://blog-website-three-blond.vercel.app/',
    },
];
