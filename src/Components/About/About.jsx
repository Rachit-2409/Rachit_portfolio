import Logo from '../../Assests/images/Group5.png'

const About = () => {
    const aboutItems = [
        {
            label: 'Enthusiasm for Learning',
            number: '8/10'
        },
        {
            label: 'Attention to Detail',
            number: "7/10"
        }
    ];
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-77 rounded-2xl md:p-16 p-8">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
                Hello! I'm Rachit, a passionate frontend developer with a B.Tech degree and a knack for creating dynamic, user-friendly web experiences. I specialize in modern web technologies, including HTML, CSS, JavaScript, React, Tailwind CSS, and Node.js, to deliver responsive and scalable applications. With expertise in WordPress development and Figma for design and prototyping, I excel at transforming creative ideas into functional, visually appealing solutions. Driven by innovation and attention to detail, I thrive on building intuitive, pixel-perfect products that exceed user expectations. Let’s craft something extraordinary together!

        </p>
        <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
                aboutItems.map(({label, number}, key)=>(<div key={key}>
                    <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                    {/* <span className="text-sky-400 font-bold md:text-3xl">+</span> */}
                    </div>

                    <p className="text-sm text-zinc-400">{label}</p>

                </div>))
            }

            <img src={Logo}
            alt="Logo"
            className="ml-auto md:w-[50px] md:h-[50px]"
            width={40}
            height={40}
            
             />
        </div>
                </div>
       


   
            </div>
        </section>
    )
}

export default About