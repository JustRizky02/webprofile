export const PROJECTS = [
    {
        index: "01",
        title: "Monclair Infrastructure",
        description: "A single-page, interactive, and responsive website for a dummy company profile, built using Tailwind and HTML.",
        tags: ["Tailwind", "HTML"],
        media: [
            { type: "video", src: "./monclair/2mon.mp4" },
            { type: "video", src: "./monclair/3mon.mp4" },
            { type: "video", src: "./monclair/4mon.mp4" },
        ],
    },
    {
        index: "02",
        title: "Just-Weather",
        description: "A website for monitoring temperature, weather, wind direction, and wind speed that connects to IoT devices in real time using MQTT, an ExpressJS for backend, and MySQL as the database",
        tags: ["Flutter", "express", "OOP", "IOT", "MQTT", "MYSQL"],
        media: [
            { type: "image", src: "./weather/img.png" },
            { type: "image", src: "./weather/img_1.png" },
            { type: "image", src: "./weather/img_2.png" },
            { type: "video", src: "./weather/video_iot.mp4" },
        ],
    },
    {
        index: "03",
        title: "Academic Assessment and Monitoring System (PKM)",
        description: "A school exam management platform for teachers to create, schedule, and grade quizzes, and for students to take exams with a live countdown timer and auto-submit on timeout. Built with role-based access control (admin/teacher/student), scheduled exam windows, and a layered backend architecture (routes → validation → ownership checks → repository).",
        tags: ["React", "Express", "PostgreSQL", "JWT Auth", "RESTfulAPI", "Role-Based Access Control (RBAC)", "Cloudinary"],
        media: [
            { type: "video", "src": "./Capaian/1.mp4" },
            { type: "video", "src": "./Capaian/2.mp4" },
            { type: "video", "src": "./Capaian/3.mp4" },
            { type: "video", "src": "./Capaian/4.mp4" },
            { type: "video", "src": "./Capaian/5.mp4" },

        ]
    },
    {
        index: "04",
        title: "Staycationer",
        description: "Staycationer is a full-stack villa reservation platform. Users can search and filter villas, then make a reservation, while admins get an analytics dashboard and a full CRUD panel to manage villas, reservations, and user roles. Built with React, Tailwind CSS, and Firebase.",
        tags: ["React", "Tailwind CSS", "Firebase", "CRUD", "Role-Based Access", "Responsive Design"],
        media: [
            { type: "video", "src": "./villa/1.mp4" },
            { type: "video", "src": "./villa/2.mp4" }
        ]
    },
    {
        index: "05",
        title: "JobTracker",
        description: "A website for making a CV and tracking job applications, allowing users to add, edit, and delete job applications. It uses Next.js for the frontend, Supabase for the backend, and PostgreSQL as the database.",
        tags: ["Typescript", "NextJs", "OOP", "Tailwind", "Supabase", "Prisma","PostgreSQL","Supabase Auth"],
        media: [
            { type: "video", src: "./jobtracker/1.mp4" },
            { type: "video", src: "./jobtracker/2.mp4" },
            
        ],
    },
];