
export const below_carousel_data = {
    //top categories section data
    top_categories:{
        title: "Top categories",
        categories: [
            {
                img_url: "./category-1.jpg",
                id: 1,
                field: "Design"
            },
            {
                img_url: "./category-2.jpg",
                id: 2,
                field: "Development"
            },
            {
                img_url: "./category-3.jpg",
                id: 3,
                field: "Marketing"
            },
            {
                img_url: "./category-4.jpg",
                id: 4,
                field: "IT and Software"
            },
            {
                img_url: "./category-5.jpg",
                id: 5,
                field: "Personal Development"
            },
            {
                img_url: "./category-6.jpg",
                id: 6,
                field: "Business"
            },
            {
                img_url: "./category-7.jpg",
                id: 6,
                field: "Photography"
            },
            {
                img_url: "./category-8.jpg",
                id: 6,
                field: "Music"
            },
        ]
    },
    
    //featured topics section data
    featured_topics:{
        title: "Featured topics by category",
        topics:[
            {
                id: 1,
                topic: "Development",
                sub_topics: [
                    {
                        id: 1,
                        sub_topic: "Python",
                        students_num: "36,354,994"
                    },
                    {
                        id: 2,
                        sub_topic: "Web Development",
                        students_num: "11,415,615"
                    },
                    {
                        id: 3,
                        sub_topic: "Machine Learning",
                        students_num: "7,070,015"
                    }
                ]

            },

            {
                id: 2,
                topic: "Development",
                sub_topics: [
                    {
                        id: 1,
                        sub_topic: "Ginancial Analysis",
                        students_num: "36,354,994"
                    },
                    {
                        id: 2,
                        sub_topic: "SQL",
                        students_num: "11,415,615"
                    },
                    {
                        id: 3,
                        sub_topic: "PMP",
                        students_num: "7,070,015"
                    }
                ]

            },

            {
                id: 3,
                topic: "Development",
                sub_topics: [
                    {
                        id: 1,
                        sub_topic: "Amazon AWS",
                        students_num: "36,354,994"
                    },
                    {
                        id: 2,
                        sub_topic: "Ethical Hacking",
                        students_num: "11,415,615"
                    },
                    {
                        id: 3,
                        sub_topic: "Cyber Security",
                        students_num: "7,070,015"
                    }
                ]

            },

            {
                id: 4,
                topic: "Development",
                sub_topics: [
                    {
                        id: 1,
                        sub_topic: "Photoshop",
                        students_num: "36,354,994"
                    },
                    {
                        id: 2,
                        sub_topic: "Graphic Design",
                        students_num: "11,415,615"
                    },
                    {
                        id: 3,
                        sub_topic: "Drawing",
                        students_num: "7,070,015"
                    }
                ]
            },
        ]
    },
    
    //company members carousel section
     company_members:{
        img_url:"./quote.svg",
        members:[
            {
                few_words: "has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
                name:"Jim Hemgen",
                post: "Principal",
                img_person: "./person-1.jpeg",
                place: "Booz Allen Hamilton",
                alt: "person-1"
            },
            {
                few_words: "With Udemy Business employees were able to marry the two together, technology and consultant soft skills. We're thankful that once they got in and took their key IT courses on AWS, Azure, Google Cloud, Big Data, and DevOps that they efficiently moved over to Consulting courses to help drive their career forward.",
                name:"Ian Stevens",
                post: "Global Head of Capability Development North America",
                img_person: "./img-17.jpg",
                alt: "img-17",
                place: "Publicis Sapient"
            },
            {
                few_words: "has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
                name:"Jim Hemgen",
                post: "Principal",
                img_person: "./person-1.jpeg",
                place: "Robert Walters",
                alt: "person-3"
            },
            {
                few_words: "has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.",
                name:"Jim Hemgen",
                post: "Principal",
                img_person: "./jose_portilla.jpg",
                alt: "person-4",
                place: "Booz Allen Hamilton"
            },
     ]},

     //business related links
     business:{
        img_url: "./img-16.jpg",
        alt:"business_img",
        logo_url: './logo-ub.svg',
        logo_alt: "business_logo",
        title: "Upskill your team with Udemy Business",
        list:[
            "Unlimited access to 22,000+ top Udemy courses, anytime, anywhere",
            "International course collection in 14 languages",
            "Top certifications in tech and business"
        ],
        btn1_content: "Get Udemy Business",
        btn2_content: "Learn more"
     },

     //become an instructor guidelines links
     be_instructor: {
        img_url: "./img-17.jpg",
        alt:"instructor_img",
        title: "Become an instructor",
        desc: "Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.",
        btn1_content: "Start teaching today",
     },
     footer:{
        lists:[
            [
                "Udemy Business",
                "Teach on Udemy",
                "Get the app",
                "About us",
                "Contact us"
            ],
            [
                "Careers",
                "Blog",
                "Help and Support",
                "Affiliate",
                "Investors"
            ],
            [
                "Terms",
                "Privacy policy",
                "Cookie settings",
                "Sitemap",
                "Accessibility statement"
            ]
        ],
        //button with globe and content "English" utitlize it from preivious components
        // copyright: "" //type statically
     }

}