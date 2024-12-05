import Logo from '../../Assests/images/Group5.png'

const About = () => {
    const aboutItems = [
        {
            label: 'Project done',
            number: 45
        },
        {
            label: 'Years of experience',
            number: 10
        }
    ];
    return (
        <section id="#about" className="section">
            <div className="container">
                <div className="bg-zinc-800/50 p-77 rounded-2xl md:p-16 p-8">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
        Welcome! I&apos;m Henry, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.

        </p>
        <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
                aboutItems.map(({label, number}, key)=>(<div key={key}>
                    <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-bold md:text-3xl">+</span>
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