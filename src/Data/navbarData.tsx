import {BsSearch,BsGlobe} from "react-icons/bs";
import {AiOutlineShoppingCart, AiOutlineBars} from "react-icons/ai";
import {TfiAngleRight, TfiAngleLeft} from "react-icons/tfi";
import {RxCross1} from "react-icons/rx";

export const navbar= {
    bars: <AiOutlineBars />,
    img_url: "./logo-udemy.svg",
    search_icon: <BsSearch />,
    placeholder: "Search for anything",
    cart_icon: <AiOutlineShoppingCart />,
    globe_icon: <BsGlobe />,
    angle_right: <TfiAngleRight />,
    angle_left: <TfiAngleLeft />,
    remove: <RxCross1 />,

    //sidebar
    sidebar_top: [
        "Log in",
        "Sign up"
    ],

    sidebar_middle: {
        heading: "Most popular",
        courses: [
            {
                id: "web",
                name: "Web Development"
            },
            {
                id: "mobile",
                name: "Mobile Development"
            },

            {
                id: "game",
                name: "Game Development"
            },

            {
                id: "entrepreneur",
                name: "Entrepreneurship"
            },

            {
                id: "business",
                name: "Business Analytics & Intelligence"
            },

            {
                id: "digital",
                name: "Digital Marketing"
            },

            {
                id: "graphic",
                name: "Graphic Design & Illustration"
            },

            {
                id: "IT",
                name: "IT Certifications"
            },

            {
                id: "personal",
                name: "Personal Transformation"
            },

            {
                id: "all-cat",
                name: "All categories"
            }
        ],
    },

    sidebar_bottom: {
        heading_sb: "More from Udemy",
        extra: [
            "Udemy Business",
            "Get the app",
            "Invite friends",
            "Help"
        ]
    },

    sub_courses: [
        {
            id: "web",
            sub_courses_arr:[
                "Web Development",
                "JavaScript",
                "React JS",
                "Angular",
                "CSS",
                "Node.Js",
                "ASP.NET Core",
                "Next.js",
                "Typescript"
            ]
        },

        {
            id:"mobile",
            sub_courses_arr:[
                "Google Flutter",
                "Android Development",
                "iOS Development",
                "React Native",
                "Dar (programming language)",
                "Swift",
                "SwiftUI",
                "Kotlin"
            ]
        },

        {
            id:"game",
            sub_courses_arr:[
                "Unity",
                "Unreal Engine",
                "Game Development Fundamentals",
                "C#",
                "3D Game Development",
                "C++",
                "2D Game Development",
                "Godot",
                "Unreal Engine Blueprints"
            ]
        },

        {
            id:"entrepreneur",
            sub_courses_arr:[
                "Business Fundamentals",
                "Entrepreneurship Fundamentals",
                "ChatGPT",
                "Freelancing",
                "Business Strategy",
                "Startup",
                "Online Business",
                "Business Plan",
                "Blogging"
            ]
        },

        {
            id:"business",
            sub_courses_arr:[
                "Microsoft Power BI",
                "SQL",
                "Data Modeling",
                "Business Analysis",
                "Tableau",
                "Data Analysis",
                "Data Warehouse",
                "DAX",
                "Data Visualization"
            ]
        },

        {
            id:"digital",
            sub_courses_arr:[
                "Digital Marketing",
                "ChatGPT",
                "Freelancing",
                "Business Strategy",
                "Startup",
                "Online Business",
                "Business Plan",
                "Blogging"
            ]
        },

        {
            id:"graphic",
            sub_courses_arr:[
                "Graphic Design",
                "Data Modeling",
                "Business Analysis",
                "Tableau",
                "Data Analysis",
                "Data Warehouse",
                "DAX",
                "Data Visualization"
            ]
        },

        {
            id:"IT",
            sub_courses_arr:[
                "AWS Certified Solutions Architect - Associate",
                "Unity",
                "Unreal Engine",
                "Game Development Fundamentals",
                "C#",
                "3D Game Development",
                "C++",
                "2D Game Development",
                "Godot",
                "Unreal Engine Blueprints"
            ]
        },

        {
            id:"personal",
            sub_courses_arr:[
                "Life Coach Training",
                "Personal Development",
                "Neuro-Linguistic Programming",
                "Personal Transformation",
                "Sound Therapy",
                "Mindfulness",
                "Life Purpose",
                "Communication Skills",
                "Counseling"
            ]
        },

        {
            id:"all-cat",
            sub_courses_arr: [
                {
                    id: "development",
                    category:"Development",
                },
                
               { 
                    id: "business",
                    category:"Business",
                },

                {
                    id: "finance",
                    category:"Finance & Accounting"
                },

                {
                    id:"IT",
                    category:"IT & Software"
                },

                {
                    id:"office",
                    category:"Office Productivity"
                },

                {
                    id:"personal",
                    category:"Personal Development"
                },

                {
                    id:"design",
                    category:"Design"
                },

                {
                    id:"marketing",
                    category:"Marketing"
                },

               { 
                    id:"lifestyle",
                    category:"Lifestyle"
                },

                {
                    id:"photography",
                    category:"Photography & Video"
                },

                {
                    id:"health",
                    category:"Health & Fitness"
                },

                {
                    id:"music",
                    category:"Music"
                },

                {
                    id:"teaching",
                    category:"Teaching & Academics"
                }
            ]
        }
    ],

    //courses under all-category sub-course here termed as grand_sub_course
    grand_sub_courses:[
        {
            id: "development",
            courses_arr: [
                "Web Development",
                "Data Science",
                "Mobile Development",
                "Programming Languages",
                "Game Development",
                "Database Design & Development",
                "Software Testing",
                "Software Engineering",
                "Software Development Tools", 
                "No-Code Development"
            ]
        },
        
       { 
            id: "business",
            courses_arr: [
                "Entrepreneurship",
                "Communication",
                "Management",
                "Sales",
                "Business Strategy",
                "Operations",
                "Project Management",
                "Business Law",
                "Business Analytics & Intelligence",
                "Human Resources",
                "Industry",
                "E-Commerce",
                "Media",
                "Real Estate",
                "Other Business"
            ]
        },

        {
            id: "finance",
            courses_arr: [
                "Accounting & Bookkeeping",
                "Compliance",
                "Cryptocurrency & Blockchain",
                "Economics",
                "Finance",
                "Finance Cert & Exam Prep",
                "Financial Modeling & Analysis",
                "Investing & Trading",
                "Money Management Tools",
                "Taxes",
                "Other Finance & Accounting"
            ]
        },

        {
            id:"IT",
            courses_arr: [
                "IT Certifications",
                "Network & Security",
                "Hardware",
                "Operating Systems & Services",
                "Other It & Software"
            ]
        },

        {
            id:"office",
            courses_arr: [
                "Microsoft",
                "Apple",
                "Google",
                "SAP",
                "Oracle",
                "Other Office Productivity"
            ]
        },

        {
            id:"personal",
            courses_arr: [
                "Personal Transformation",
                "Personal Productivity",
                "Leadership",
                "Career Development",
                "Parenting & Relationships",
                "Happiness",
                "Esoteric Practices",
                "Religion & Spirituality",
                "Personal Brand Building",
                "Creativity",
                "Influence",
                "Self Esteem & Confidence",
                "Stress Management",
                "Memory & Study Skills",
                "Motivation",
                "Other Personal Development"
            ]
        },

        {
            id:"design",
            courses_arr: [
                "Web Design",
                "Graphic Design & Illustration",
                "Leadership",
                "Career Development",
                "Parenting & Relationships",
                "Happiness",
                "Esoteric Practices",
                "Religion & Spirituality",
                "Personal Brand Building",
                "Creativity",
                "Influence",
            ]
        },

        {
            id:"marketing",
            courses_arr: [
                "Digital Marketing",
                "Search Engine Optimization",
                "Apple",
                "Google",
                "SAP",
                "Oracle",
                "Other Office Productivity"
            ]
        },

       { 
            id:"lifestyle",
            courses_arr: [
                "Arts & Crafts",
                "Beauty & Makeup",
                "Cryptocurrency & Blockchain",
                "Economics",
                "Finance",
                "Finance Cert & Exam Prep",
                "Financial Modeling & Analysis",
                "Investing & Trading",
                "Money Management Tools",
            ]
        },

        {
            id:"photography",
            courses_arr: [
                "Digital Photography",
                "Photography",
                "Apple",
                "Google",
                "SAP",
                "Oracle",
                "Other Office Productivity"
            ]
        },

        {
            id:"health",
            courses_arr: [
                "Fitness",
                "General Health",
                "Communication",
                "Management",
                "Sales",
                "Business Strategy",
                "Operations",
                "Project Management",
                "Business Law",
                "Business Analytics & Intelligence",
                "Human Resources",
                "Industry",
                "E-Commerce",
            ]
        },

        {
            id:"music",
            courses_arr: [
                "Intruments",
                "Music Production",
                "Cryptocurrency & Blockchain",
                "Economics",
                "Finance",
                "Finance Cert & Exam Prep",
                "Financial Modeling & Analysis",
                "Investing & Trading",
                "Money Management Tools",
            ]
        },

        {
            id:"teaching",
            courses_arr: [
                "Engineering",
                "Humanities",
                "Communication",
                "Management",
                "Sales",
                "Business Strategy",
                "Operations",
                "Project Management",
                "Business Law",
                "Business Analytics & Intelligence",
                "Human Resources",
                "Industry",
                "E-Commerce",
            ]
        }
    ]






}