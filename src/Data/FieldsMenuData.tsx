import {BsStarFill, BsStarHalf,BsInfinity, BsBraces} from "react-icons/bs";
import {MdOndemandVideo} from "react-icons/md";
import { ImMobile2} from "react-icons/im"
import { BiFileBlank} from "react-icons/bi"
import { SlTrophy} from "react-icons/sl"
import { TfiAngleDown, TfiAngleLeft, TfiAngleRight} from "react-icons/tfi"
import {FiThumbsUp, FiThumbsDown } from "react-icons/fi"
import { IoIosHeartEmpty} from "react-icons/io";
import {AiOutlinePlus} from "react-icons/ai"
import {} from "react-icons/"
import {} from "react-icons/"
import {} from "react-icons/"
import {} from "react-icons/"
import {} from "react-icons/";

export interface resources_type{
    img_url?: string,
    topic?: string, 
    short_desc?: string,
    instructor?: string,
    ratings?: number,
    raters_quantity?: string,
    stars?: string[],
    students_enrolled?: string,
    price?: number,
    original_price?: number,
    last_updated?: string,
    lang?: string,
    subtitles?: string,
    loading: boolean
};

export interface loading_resource_type{
    loading: boolean
};

export interface single_course_type{
    id: string,
    course_title: string,
    course_desc: string,
    explore_btn: string,
    available_resources: resources_type[]
};

export const fields_menu = {
    star_full_icon: <BsStarFill />,
    star_half_icon: <BsStarHalf />,
    angle_right_icon: <TfiAngleRight />,
    angle_left_icon: <TfiAngleLeft />,
    angle_down_icon: <TfiAngleDown />,
    section_head: "A broad selection of courses",
    section_desc: "Choose from over 210,000 online video courses with new additions published every month",
    single_courses: [
            {
            id: "python",
            course_title: "Expand your career opportunities with Python",
            course_desc: "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to",
            explore_btn: "explore python",

            //this are to be displayed in carousel
            available_resources: [
                {
                    img_url: "./python-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./python-2.jpg",
                    topic: "Automate the Boring Stuff with Python Programming", 
                    short_desc: "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
                    instructor: "Ai Sweigart",
                    ratings: 4.7,
                    raters_quantity: "107,394",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "2/2023",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./python-3.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./python-4.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./python-5.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./python-6.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./python-7.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./python-8.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./python-9.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },
                {
                    loading: true
                },
                // {
                //     loading: true
                // },
                // {
                //     loading: true
                // },
                // {
                //     loading: true
                // },
                // {
                //     loading: true
                // },
                // {
                //     loading: true
                // }
            ]
        },

        {
            id: "excel",
            course_title: "Analyze and visualize data with Excel",
            course_desc: "Take a Microsoft Excel course from Udemy, and learn how to use this industry-standard software. Real-world experts will show you the basics like how to organize data into sheets, rows and columns, and advanced techniques like creating complex dynamic",
            explore_btn: "explore excel",

            //this are to be displayed in carousel
            available_resources: [
                {
                    img_url: "./excel-1.jpg",
                    topic: "The Complete excel Bootcamp From Zero to Hero in excel", 
                    short_desc: "Learn excel like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./excel-2.jpg",
                    topic: "Automate the Boring Stuff with excel Programming", 
                    short_desc: "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
                    instructor: "Ai Sweigart",
                    ratings: 4.7,
                    raters_quantity: "107,394",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "2/2023",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./excel-3.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./excel-4.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./excel-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./excel-2.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
            ]
        },

        {
            id: "web development",
            course_title: "Build websites and applications with Web Development",
            course_desc: "The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.",
            explore_btn: "explore web development",

            //this are to be displayed in carousel
            available_resources: [
                {
                    img_url: "./web-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./web-2.jpg",
                    topic: "Automate the Boring Stuff with Python Programming", 
                    short_desc: "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
                    instructor: "Ai Sweigart",
                    ratings: 4.7,
                    raters_quantity: "107,394",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "2/2023",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./web-3.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./web-4.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./web-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./web-2.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
            ]
        },

        {
            id: "javascript",
            course_title: "Expand your career opportunities with Python",
            course_desc: "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to",
            explore_btn: "explore python",

            //this are to be displayed in carousel
            available_resources: [
                {
                    img_url: "./js-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./js-2.jpg",
                    topic: "Automate the Boring Stuff with Python Programming", 
                    short_desc: "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
                    instructor: "Ai Sweigart",
                    ratings: 4.7,
                    raters_quantity: "107,394",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "2/2023",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./js-3.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./js-4.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./js-5.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./js-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                }
            ]
        },

        {
            id: "data science",
            course_title: "Expand your career opportunities with Python",
            course_desc: "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to",
            explore_btn: "explore python",

            //this are to be displayed in carousel
            available_resources: [
                {
                    img_url: "./data-sc-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },

                {
                    img_url: "./data-sc-2.jpg",
                    topic: "Automate the Boring Stuff with Python Programming", 
                    short_desc: "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
                    instructor: "Ai Sweigart",
                    ratings: 4.7,
                    raters_quantity: "107,394",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "2/2023",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },

                {
                    img_url: "./data-sc-3.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },

                {
                    img_url: "./data-sc-4.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },

                {
                    img_url: "./data-sc-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },

                {
                    img_url: "./data-sc-2.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },
            ]
        },

        {
            id: "amazon aws",
            course_title: "Expand your career opportunities with Python",
            course_desc: "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to",
            explore_btn: "explore python",

            //this are to be displayed in carousel
            available_resources: [
                {
                    img_url: "./aws-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
    
                },

                {
                    img_url: "./aws-2.jpg",
                    topic: "Automate the Boring Stuff with Python Programming", 
                    short_desc: "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
                    instructor: "Ai Sweigart",
                    ratings: 4.7,
                    raters_quantity: "107,394",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "2/2023",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },

                {
                    img_url: "./aws-3.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },

                {
                    img_url: "./aws-4.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },

                {
                    img_url: "./aws-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },

                {
                    img_url: "./aws-2.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
        
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
            ]
        },

        {
            id: "drawing",
            course_title: "Expand your career opportunities with Python",
            course_desc: "Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to",
            explore_btn: "explore python",

            //this are to be displayed in carousel
            available_resources: [
                {
                    img_url: "./drawing-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./drawing-2.jpg",
                    topic: "Automate the Boring Stuff with Python Programming", 
                    short_desc: "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
                    instructor: "Ai Sweigart",
                    ratings: 4.7,
                    raters_quantity: "107,394",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "2/2023",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./drawing-3.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./drawing-4.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./drawing-1.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },

                {
                    img_url: "./drawing-2.jpg",
                    topic: "The Complete Python Bootcamp From Zero to Hero in Python", 
                    short_desc: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
                    instructor: "Jose Portilla",
                    ratings: 4.6,
                    raters_quantity: "463,961",
                    stars: ["*","*","*", "*","X"],
                    students_enrolled: "1,726,278",
                    price: 9.99,
                    original_price: 74.99,
                    last_updated: "3/2021",
                    lang: "English",
                    subtitles: "English[Auto], Arabic[Auto],",
                    loading: false
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
                {
                    loading: true
                },
            ]
        },
    ],
}


//global for all single course page details
export const single_page_details= {
    star_full_icon: <BsStarFill />,
    star_half_icon: <BsStarHalf />,
    plus_icon: <AiOutlinePlus />,
    heart_icon: <IoIosHeartEmpty />,

    what_u_ll_learn_section:[
        "You will learn how to leverage the power of Python to solve tasks.",
        "You will be able to use Python for your own work problems or personal projects.",
        "Learn to use Python professionally, learning both Python 2 and Python 3!",
        "Learn advanced Python features, like the collections module and how to work with timestamps!",
        "Understand complex topics, like decorators.",
        "Get an understanding of how to create GUIs in the Jupyter Notebook system!",
        "You will build games and programs that use Python libraries.",
        "You will create a portfolio of Python based projects you can share.",
        "Create games with Python, like Tic Tac Toe and Blackjack!",
        "Learn to use Object Oriented Programming with classes!",
        "Understand how to use both the Jupyter Notebook and create .py files",
        "Build a complete understanding of Python from the ground up!"
    ],

    includes_section: [
        {
            icon: <MdOndemandVideo />,
            what: "22 hours on-demand video"
        },
        {
            icon: <ImMobile2 />,
            what: "Access on mobile and TV"
        },
        {
            icon: <BsBraces />,
            what: "19 coding exercises"
        },
        {
            icon: <BsInfinity />,
            what: "Full lifetime access"
        },
        {
            icon: <BiFileBlank />,
            what: "14 articles"
        },
        {
            icon: <SlTrophy />,
            what: "Certificate of completion"
        }
    ], 

    companies_logo_section: [
        "./box-dark.svg",
        "./eventbrite-dark.svg",
        "./nasdaq-dark.svg",
        "./netapp-dark.svg",
        "./volkswagen-dark.svg",
        "./box-dark.svg"
    ],

    course_content_section:{
        section_quantity: 23,
        lecture_quantity: 155,
        time_to_complete: "22h 13m",
        down_angle_icon: <TfiAngleDown />,
        blank_icon: <BiFileBlank />,
        video_icon:<MdOndemandVideo />,
        course_sections:[
            {
                chapter_name: "Course Overview",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Python Setup",
                lecture_quantity: 5,
                time: "54min",
                sub_sections: [
                    {
                        title: "Command Line Basics",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Installing Python (Step by Step)",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Running Python Code",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Getting the Notebooks and the Course Material",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Git and Github Overview (Optional)",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Python Object and Data Structure Basics",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Python Comparision Operators",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Python Statements",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Methods and Functions",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Milestone Project-1",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Object Oriented Programming",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Modules and Packages",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Errors and Exceptions Handling",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Milestone Project-2",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Python Decorators",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Python Genrators",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Advanced Python Modules",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Web Scraping with Python",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Workin with Images with Python",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },

            {
                chapter_name: "Working with PDFs and Spreadsheet CSV Files",
                lecture_quantity: 5,
                time: "19min",
                sub_sections: [
                    {
                        title: "Auto-Welcome-Message",
                        sub_desc: "Welcome to the Complete Python Bootcamp"                                        
                    },
                    {
                        title: "Course Introduction",
                        sub_desc: "The Complete Python Bootcamp."
                    },
                    {
                        title: "Course Curriculum Overview",
                        sub_desc: "Learn about all the content in the course!"
                    },
                    {
                        title: "Course FAQs",
                        sub_desc: "Continually updated Text Document with Course FAQs"
                    },
                    {
                        title: "Why Python",
                        sub_desc: "Learn why you should learn Python and what you can use it for"
                    },
                ]
            },
        ]
    },

    requirements_section: "Access to computer with an internet connection",

    description_section: {
        arr_paras:[
        "Become a Python Programmer and learn one of employer's most requested skills of 2023!",
        "This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.",
        "With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!",
        "Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!",
        "This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!",
        "We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.",
        ],
        list: {
            title: "We cover a wide variety of topics, including:",
            items: [
                "Command Line Basics",
                "Installing Python",
                "Running Python Code",
                "Strings",
                "Lists",
                "Dictionaries",
                "Tuples",
                "Sets",
                "Number Data Types",
                "Pring Formatting",
                "Functions",
                "Scope",
                "args/kwargs",
                "Built-in-functions",
                "Debugging and Error Handling",
                "Modules",
                "External Modules",
                "Object Oriented Programming",
                "Inheritance",
                "Polymorphism",
                "File I/O",
                "Advanced Methods",
                "Unit Tests",
                "and much more!"
            ]
        },
        foot_desc: [
            "You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!",
            "This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you'll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!",
            "So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!",
        ],
        foot_list: {
            title: "Who this course is for",
            list_items: [
                "Beginners who have never programmed before.",
                "Programmers switching languages to Python.",
                "Intermediate Python programmers who want to level up their skills!"
            ]
        }
    },

    featured_review_section:{
        title: "Featured review",
        reviewer: "Ken K.",
        num_of_courses: 9,
        reviews: 2,
        ratings: ["*","*","*","*","*"],
        when: "2 years ago",
        review: "Everything on this course is a goldmine except for the GUI since it's specific for Jupyter Notebooks and it's missing the video for GUI Events. Still it was a nice introduction to GUI. Don't let that disappoint you though. THIS IS A MUST HAVE COURSE. I have already recommended it to few people and always will. Do yourself a favor and do this course if you want to learn Python 3. Thank you so much for this course, Jose-sensei!!",
        was_helpful: "Was this review helpful?",
        thumbs_up: <FiThumbsUp />,
        thumbs_down: <FiThumbsDown />
    },

    students_bought_section: {
        title: "Students also bought",
        course_bought: [
            {
                img_url: "./python-1.jpg",
                course_title: "100 Days of Code: The Complete Python Programming",
                extra: "bestseller",
                time: "58 total hours",
                updated: "5/2023",
                rating: 4.7,
                students_num: '882,783',
                price: 74.99
            },

            {
                img_url: "./python-2.jpg",
                course_title: "100 Days of Code: The Complete Python Programming",
                time: "58 total hours",
                updated: "5/2023",
                rating: 4.7,
                students_num: '882,783',
                price: 74.99
            },

            {
                img_url: "./python-3.jpg",
                course_title: "100 Days of Code: The Complete Python Programming",
                time: "58 total hours",
                updated: "5/2023",
                rating: 4.7,
                students_num: '882,783',
                price: 74.99
            },

            {
                img_url: "./python-4.jpg",
                course_title: "100 Days of Code: The Complete Python Programming",
                time: "58 total hours",
                updated: "5/2023",
                rating: 4.6,
                students_num: '882,783',
                price: 74.99
            },

            {
                img_url: "./python-5.jpg",
                course_title: "100 Days of Code: The Complete Python Programming",
                time: "58 total hours",
                updated: "5/2023",
                rating: 4.5,
                students_num: '882,783',
                price: 74.99
            },

            {
                img_url: "./python-9.jpg",
                course_title: "100 Days of Code: The Complete Python Programming",
                time: "58 total hours",
                updated: "5/2023",
                rating: 4.6,
                students_num: '882,783',
                price: 74.99
            },

            {
                img_url: "./python-2.jpg",
                course_title: "100 Days of Code: The Complete Python Programming",
                time: "58 total hours",
                updated: "5/2023",
                rating: 4.7,
                students_num: '882,783',
                price: 74.99
            },
        ]
    },

    bought_together_section:{
        //reuse main carousel items here OK!!!
    },

    instructor_details: {
        name: "Jose Portilla",
        post: "Head of Data Science at Pierian Training",
        rating: 4.6,
        reviews_num: "1,042,704",
        students_teached: "3,366,075",
        courses_num: 65,
        info: "Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science, Machine Learning and Python Programming. He has publications and patents in various fields such as microfluidics, materials science, and data science. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming, the ability to analyze data, and the skills needed to present the data in clear and beautiful visualizations. Currently he works as the Head of Data Science for Pierian Training and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, SalesForce, Starbucks, McKinsey and many more. Feel free to check out the website link to find out more information about training offerings."
    },

    intructor_ratings_section: [
        {
            id: 1,
            name: "Mohit R.",
            ratings: ["*","*",'*',"*","*"],
            when: "3 weeks ago",
            review: "I have learned a lot from this course and even after completing it I'm still look for multiple solutions here in the lectures in my other python related works."
        },

        {
            id: 2,
            name: "Ozcan C.",
            ratings: ["*","*",'*',"*","*"],
            when: "3 weeks ago",
            review: "I have learned a lot from this course and even after completing it I'm still look for multiple solutions here in the lectures in my other python related works."
        },

        {
            id: 3,
            name: "Bibhuprasad S.",
            ratings: ["*","*",'*',"*","*"],
            when: "3 weeks ago",
            review: "I have learned a lot from this course and even after completing it I'm still look for multiple solutions here in the lectures in my other python related works."
        },

        {
            id: 4,
            name: "Leo C.",
            ratings: ["*","*",'*',"*","*"],
            when: "3 weeks ago",
            review: "I have learned a lot from this course and even after completing it I'm still look for multiple solutions here in the lectures in my other python related works."
        },

        {
            id: 5,
            name: "Joshua",
            ratings: ["*","*",'*',"*","*"],
            when: "3 weeks ago",
            review: "I have learned a lot from this course and even after completing it I'm still look for multiple solutions here in the lectures in my other python related works."
        },

        {
            id: 6,
            name: "Bhavikkumar",
            ratings: ["*","*",'*',"*","*"],
            when: "3 weeks ago",
            review: "I have learned a lot from this course and even after completing it I'm still look for multiple solutions here in the lectures in my other python related works."
        },
    ],

    more_courses_by_instructor:{
        title: "More Courses by ",
        //here to reuse carousel item components
    },

    bottom_of_page: {
        title: [
            "Top companies choose",
            "Udemy Business",
            "to build in-demand career skills."
        ],
        //utilize above includes_section for logos here
    },

    bottom_sticky_bar:{
        //use currently opened course info here to create this sticky bar
    }
}