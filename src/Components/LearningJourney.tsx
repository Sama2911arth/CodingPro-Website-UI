export default function LearningJourney() {
    const steps = [
        {
            number: 1,
            title: "Custom Specialization",
            description: "We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            )
        },
        {
            number: 2,
            title: "Virtual Labs",
            description: "We provide our students with the convenience of accessing a fully equipped lab from anywhere, just with an internet connection.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            number: 3,
            title: "AI Tests",
            description: "We understand that learning alone isn't enough, so we assist our students with AI-powered tests to assess their progress.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            number: 4,
            title: "Resume Builder",
            description: "We not only support skill development but also leverage AI to highlight those skills effectively on your resume to help you stand out from the crowd.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
            )
        },
        {
            number: 5,
            title: "Placement Preparation",
            description: "We go beyond building skills, taking our students to the next level by preparing them through placement preparation.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            number: 6,
            title: "AI Interviews",
            description: "Interviews can be daunting, so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ]

    const professionals = [
        { title: "QA Tester", image: "https://s3-alpha-sig.figma.com/img/b948/6ef9/a7b1e43c5f5d381b44dbb5f99f0a64df?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5eZwAmOhN-kVx3FO5WkZEuQV~XAbmWzFjjA30bOm7bwgnKgF7wPFE55zQXyTtkA8c-shDXeW5zq2R1zq6NWRbmucxjVtU8tPiZ0JN7XpX4SRtzd0NFaCUBxNRbxnixgVqANdxHLPQP9Uqt34wPc6bzYLv-YFlvnmzgZ3qGweCCVb~-u6TCvVaAnu4H~e1y5ZBt2Hrht1U4omTMOXH3Eo2xeDFwLdVh5FfreqvpvrsfaNTrSvPmCE3qaUfGvmnP6~kpxcrnQQvlfwfzxXGOxrzqDfygBOJUEiRc46lnzq4l0O0NhFXH50zKpVOKzEDuLHOOtPSo1BoVG36pk6KftFQ__" },
        { title: "Software Engineer", image: "https://s3-alpha-sig.figma.com/img/e74b/10ec/e96434783edf5d2d1b220de70162653d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHjBII-2-ltdOatUE1mnc2yl8WYwR0B-CuFVnZ5zQbzTodyFIEoA8OsyUxujOXDSz2zd2J0e5cLZ-jBK~FwKRDg2gYiGFKSxT4C4y~3P5SaWC67fiNWAHtojMdoLKN2P~rdYe-m5VDj~Oiyj0cH7I7wi0UdSgqRptS-WefVM-Y3Zpzh9Jn-AlfzHaP~E1sc-WhQxIOtUziuEMCrfS41pe7H6yewE7namV-~1~tJeo5EvF7b-Id1sV~vSGCYD2Wj8OlQHbYTCeBMX3a84b8WusZonRVYbY2an2kEdCGJg8KRjLJF0DKWuL26x9XD3JYgCbs7e32pckbfJvpSwQ-gBag__" },
        { title: "Data Scientist", image: "https://s3-alpha-sig.figma.com/img/bf94/525e/43dd81c5d4421f4b692ad98cb6a6a9fa?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q0BT8QmLREsTlvuk-9iNdY3Fj4DVpbXq-U5t4YlyqJMNim-fnSqpPUH6bWWyOL~OLQK5SIZwjV7DSnUP6za13PNEs7hRxkMG2vkFQyxM2FnzdZ8oK3YuRKvt01955k4vGBsP~DJkBGllHlHBre4q4kMmjRYptV1Q--1C6R2I-j6YyIfw79VGHLCJT8BwRkKnBgO5H7LpeuuTWYSblXQPc8-s14ggwwJnYOYOiTFkV25SWGO52SVb5Vsp8d5~ppFkUW8rgCRg1PqmvCTaBPoTl-WMT2zyNgx9jseH7OcyydZJy14wAHwY-~RjeK0iZEB7qwDqBzZIWbrr4~f8aDOylw__" },
        { title: "AI Engineer", image: "https://s3-alpha-sig.figma.com/img/8d71/6c61/619c83d1c3c1df8c726acf56cebde3a6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nj1knNCpT1mgHJn0QoP33X8-nETk1na~JMuel2e0bz481YLilc1UvrO2JgDGwT2~1VgnASzkagYYuZNcmH0aCI0AVmwxLVoizJQB4653fhGkHys3oOoxg-tfptJqJIqv1IdaWk4ElpHnptn97eST0inPS8ly68rGka4OY3EGaYvB~k9K2DJr0pu~vQdkEFxoWtzSJp2UyrLksIg6W4imaTj6ClaPMNpLjOI1wDqCYLeMbMmrBeihqKaKJwxk9mKFUxJ5WS4d9oGConwVA~TmcYwfIrD0-ZMdS3VLAYesYGY6hS2CHQXTsFiYIECDbh12hwoVXmtjVuytsYTUHDi2Tg__" }
    ]

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-16 relative">
                <div className="absolute left-0 top-0">
                    <div className="w-16 h-16 border-2 border-teal-400 transform rotate-45" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-3xl mx-auto">
                    Because We Offer What You Need
                    <br />
                    At <span className="text-teal-500">Every Step</span> Of Your
                    <br />
                    <span className="text-teal-500">Transformative Learning Journey</span>
                </h1>
                <div className="absolute right-0 top-0">
                    <div className="w-16 h-16 border-2 border-teal-400 transform rotate-45" />
                </div>
            </div>

            {/* Student Image Section */}
            <div className="relative w-full max-w-xl mx-auto mb-16">
                <div className="rounded-full overflow-hidden aspect-[2/1] bg-gradient-to-b from-teal-400 to-blue-500">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/804c/4706/22c963225417e9812aeffe36e1d6220f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wgf5WlzgtPlYDe5eq78pGJgZFRQKoioi9I24JoGz9pL0EO1PzgpPb2rw8uJuZyOcNLvBd3G1QWw0sgY5Es90CJNU3eBP6YuCRS00J86auG4OYgEj5RTANhmBKNGF48MiBD1Wo50DiUO4KPLa27NGuUtnu9bVEsRG6G3kM03bjq-P7wPUqXE1YwxRmXP6-LvH-itVbEQUx4rb4tuIeRIcv8ic9IuL-Lx2WMKkGr9F2vB~AuQoAKpvR6NpJUcqOB7dsDieFLLHr4M7KzFijP3tsIdMje5EpoZt5bg8ECe1SHyGoL7XXxDb12u3sZLjhdXt-vlvV6GcXtJIJZQuPym0Aw__"
                        alt="Students"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>

            {/* Timeline Section */}
            <div className="relative mb-24">
                {/* Vertical Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-blue-500" />

                {/* Steps */}
                <div className="relative">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''
                                }`}
                        >
                            {/* Content */}
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>

                            {/* Number Circle */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-teal-400 flex items-center justify-center text-teal-600 font-bold">
                                {step.number}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chevron Arrows */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-8 h-8 border-t-4 border-r-4 border-teal-400 transform rotate-135"
                        />
                    ))}
                </div>
            </div>

            {/* Professionals Wave Section */}
            <div className="relative w-full">
                <div className="absolute inset-0">
                    <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 128L48 144C96 160 192 192 288 197.3C384 203 480 181 576 181.3C672 181 768 203 864 208C960 213 1056 203 1152 192C1248 181 1344 171 1392 165.3L1440 160V400H1392C1344 400 1248 400 1152 400C1056 400 960 400 864 400C768 400 672 400 576 400C480 400 384 400 288 400C192 400 96 400 48 400H0V128Z" fill="url(#paint0_linear)" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="720" y1="128" x2="720" y2="400" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#2DD4BF" />
                                <stop offset="1" stopColor="#3B82F6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="relative z-10 flex justify-between items-end px-8 pt-16 pb-8">
                    {professionals.map((professional, index) => (
                        <div key={index} className="text-center">
                            <div className="relative w-48 h-48 mx-auto mb-4">
                                <img
                                    src={professional.image}
                                    alt={professional.title}
                                    className="rounded-lg  w-300 h-full"
                                />
                            </div>
                            <p className="text-white font-medium">{professional.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}