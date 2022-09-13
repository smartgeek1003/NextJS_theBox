import Link from 'next/link'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'
import axios from 'axios'

const Projects = () => {    
    // const local_datas = [
    //     {type: "1", title: "Wild Stone Infra Hotel", desc: "2715 Ash Dr. San Jose, South Dakota", img: "images/portfolio/gallery_01.jpg", url: ""},
    //     {type: "2", title: "Wish Stone Building", desc: "2972 Westheimer Rd. Santa Ana, Illinois", img: "images/portfolio/gallery_02.jpg", url: ""},
    //     {type: "3", title: "Mr. Parkinston’s House", desc: "3517 W. Gray St. Utica, Pennsylvania", img: "images/portfolio/gallery_03.jpg", url: ""},
    //     {type: "1", title: "Oregano Height", desc: "2464 Royal Ln. Mesa, New Jersey", img: "images/portfolio/gallery_01.jpg", url: ""},
    //     {type: "2", title: "Wild Stone Infra Hotel", desc: "2972 Westheimer Rd. Santa Ana, Illinois", img: "images/portfolio/gallery_02.jpg", url: ""},
    //     {type: "3", title: "Oregano Height", desc: "2464 Royal Ln. Mesa, New Jersey", img: "images/portfolio/gallery_02.jpg", url: ""},
    //     {type: "1", title: "Oregano Height", desc: "2464 Royal Ln. Mesa, New Jersey", img: "images/portfolio/gallery_03.jpg", url: ""},
    // ];
    const [local_datas, setLocalDatas]=useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedPage, setSelectedPage] = useState(0);
    const [selectedDataByCateogry, setSelectedDataByCateogry] = useState([]);
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    
    const limit = 4;
    const categories = [
        {title: "All", type: 0},
        {title: "Commercial", type: 1},
        {title: "Residential", type: 2},
        {title: "Other", type: 3},
    ];

    
    useEffect(async ()=>{
        const result = await axios.get("http://localhost:3001/projects");
        console.log(result.data);
        setLocalDatas(result.data);
    },[])

    useEffect(()=>{
        setSelectedDataByCateogry(local_datas);
        console.log("asdfafsd")
    },[local_datas])

    const drawGallery = () => {
        let result = [];
        for (var i = 0; i < 4; i++) {
            if (!selectedDataByCateogry[selectedPage * limit + i]) break;
            let { type, title, description, author, url } = selectedDataByCateogry[selectedPage * limit + i];
            result.push(
                <div>
                    <iframe src={ url } className="w-full mt-5"/>
                    <div className='p-3 bg-blue-800'>
                        <p className='mb-3 text-white'>{ title }</p>
                        <span>{ description }</span>
                        <p className='text-white mb-c'>{ author }</p>
                    </div>
                </div>
            );
        }
        return result;
    }

    const onPageChangeListener = (page) => {
        page >= 0 && selectedDataByCateogry.length / 4 > page && setSelectedPage(page);
    }

    const onCategoryChangeListener = (type) => {
        setSelectedCategory(type);
        if (type == 0) {
            setSelectedDataByCateogry(local_datas);
            return;
        }
        let datas = [];
        for(let i = 0; i < local_datas.length; i++) {
            local_datas[i].type == type && datas.push(local_datas[i]);
        }
        setSelectedPage(0);
        setSelectedDataByCateogry(datas);
    }

    const drawPageNavigation = () => {
        let result = [];
        for (let i = 0; i < selectedDataByCateogry.length / limit; i++) {
            result.push(
                <a onClick={() => onPageChangeListener(i)}>
                    <svg viewBox="0, 0, 10, 10" className= { i == selectedPage ? "h-10 fill-current text-blue-500 hover:text-blue-400" : "h-10 fill-current text-gray-300 hover:text-blue-400" } 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M2,5a3,3 0 1,0 6,0a3,3 0 1,0 -6,0">
                        </path>
                    </svg>
                </a>
            );
        }
        return result;
    }
    
    return (
        <section className="p-5 lg:flex lg:flex-row lg:p-40 md:flex md:flex-col md:p-20 sm:flex sm:flex-col sm:p-20" id="projects" data-scroll-section>
            <div className="lg:w-4/12 md:w-full">
                <p className='mx-5 mb-10 text-5xl font-bold text-black' data-scroll data-scroll-sticky data-scroll-target="#projects">Projects</p>
                <ul className="" >
                { 
                    categories.map(({ type, title }, key) => (
                        <li className='mt-6 md:mt-0 md:ml-6 hover:border-l-4 ' onClick={() => onCategoryChangeListener(type)} key={ key }>
                            <a className={ type == selectedCategory ? "px-5 py-2 my-2 mr-16 text-3xl font-bold text-blue-800 md:block hover:text-blue-800 border-l-4 border-blue-800" : "px-5 py-2 my-2 mr-16 text-3xl font-bold text-black md:block hover:text-blue-800" } >{ title }</a>
                        </li>
                    )) 
                }
                </ul>
            </div>
            <div className="flex flex-col lg:w-8/12 md:w-full">
                <div className="grid grid-cols-2 gap-2 gap-x-8 gap-y-4">
                    { drawGallery() }
                </div>
                <div className='grid grid-cols-3 gap-2 my-7 gap-x-8 gap-y-4'>
                    <button style={{ color: "white", background: "black", padding: "0.5vw 1.5vw", fontSize: "1.5vw" }} onClick={() => onPageChangeListener(selectedPage - 1)}>
                         <Image
                        className='items-center p-0 m-0 '
                        src='/leftVector.svg'
                        width={34}
                        height={18}
                        priority
                        alt='logo'/>
                        Back
                    </button>
                    <div className="flex flex-row flex-wrap items-center justify-center">
                        { drawPageNavigation() }
                    </div>
                    <button style={{ color: "white", background: "black", padding: "0.5vw 1.5vw", fontSize: "1.5vw" }} onClick={() => onPageChangeListener(selectedPage + 1)}> Next
                        <Image
                        className='items-center p-0 m-0 '
                        src='/rightVector.svg'
                        width={34}
                        height={18}
                        priority
                        alt='logo'/>
                    </button>
                </div>
            </div>
        </section>
    )

}
export default Projects