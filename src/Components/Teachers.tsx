import React from 'react'

export default function MentorsSection() {
    const mentors = [
        {
            name: "Vikas",
            surname: "Shukla",
            image: "https://s3-alpha-sig.figma.com/img/decc/39cd/3e5eee3872f62c1b24e6840bbb8388a9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o~aBhsULRsP-ICqu7bjTXdC-4yhgtdfVQwjrZj5X5USir3pNKqDtpZQ4-~6~gcN-52BF5KkgF0-Ir0v4mOTseveV~x9jb4JvgHtgGY1IbUM8Bf8v~yO673DEoruEl6SMY6myUKSsvulWDEdk4tzP7X8brR-OsTr4SZgyo0J5SDzSfKcQQ~51JoODPAB3WntOiP8Byp2HCjYt1QknwlQtGJB17T5y98HzYAokviHrihjEaGGmsfbzSwLFHE9HrNG3GINuD~MDghPNCjJvui2y79fMcf7xTcPDyNTknsGEDB7XR~wob7G~PzqqzoubwLMmEc15~8UChdxKPnMOOsVhcQ__",
            designation: "Software Engineering",
            institute: "IIT- BHU",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            bgColor: "bg-cyan-400",
        },
        {
            name: "Sumit",
            surname: "Bhatt",
            image: "https://s3-alpha-sig.figma.com/img/8ac5/1121/0b0179671f8c06dc90abeb6567fce098?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtJZtVJrpR583bJEVdfHbb9ToTsQxtXGSZxELt7o6kJCPEi8pAoL0XwXugfoLt2ajtGzCUtA17gL8ykYzPjGbHGkw3ZviWkb8GGTwAvnNKhbrM-4GO0Nka4zmjPXfjSOQG1gp3vIEqhhR4ThoCBH51KGWo-prShhnLJnbscpVf-T35V998HJ~or~Cog37Px3LAzoPL5hVhv2Rjj4JLsQtuG71QXe0XAfjrkqDInAv38bcDA8dYTyI~GcQqKzo~r4dp8P-vedeLBFzn~Sbp6Mceu5IDyRLu-cccCpuH6FZuavqSjfu~xBJcNfAzIR~UbYXymvMjqKh~lKMIgExP3oSg__",
            designation: "Software Engineering",
            institute: "IIT- BHU",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            bgColor: "bg-blue-500",
        },
        {
            name: "Neelu",
            surname: "Verma",
            image: "https://s3-alpha-sig.figma.com/img/0e12/5853/c1d38c59c5fb280c4db346fd0c93b6ec?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JpgOTHATnZxNuvzpiZ0Z6EkYt0Ih5ABieGLz4-r3sAd1eh7W2SQ2cL0WxcSaSMnna7gT0QamSNoTs~SenG9Fsv37yW2OwNcRT1aUGITy8g1R7Day~XoSRFZzAHff6RBvbqXlJ3SBWkftptAEWyEHOACJY8LNQDsuRJTha5FdDUvIWjMKQgHwObGV5x7pNdvtTMDrA1RH6olfUN5U2w58JviNePFWYgnsi1AcQ9IX9OGth0FW45ctSycF0mVcNlt8y68wo2TR3pVhqbxuK5NiwgRzxl62d8o4Jr8kggsNt5KqzDseWEX2OXsKDw4~Bh9zJHDsRVHMAUgtS53viasPvQ__",
            designation: "Software Engineering",
            institute: "IIT- BHU",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            bgColor: "bg-cyan-400",
        },
    ]

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 relative">
                    {/* Decorative pentagon */}
                    <div className="absolute -top-8 left-20">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0L38.5 13.5L31.5 35H8.5L1.5 13.5L20 0Z" stroke="#CBD5E1" strokeWidth="2" />
                        </svg>
                    </div>

                    {/* Dotted line decoration */}
                    <div className="absolute -top-4 left-32">
                        <svg width="80" height="2" viewBox="0 0 80 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H80" stroke="#06B6D4" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-medium text-gray-900 mb-4">
                        We Know Just Education Is Not Enough Anymore
                    </h2>
                    <h3 className="text-4xl sm:text-5xl font-bold">
                        So We've Got The <span className="text-cyan-500">Best Mentors</span> For You.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mentors.map((mentor, index) => (
                        <div key={index} className="relative group">
                            {/* Dotted line decorations */}
                            <div className="absolute -top-4 -right-4">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0L60 60M0 30L30 60M30 0L60 30" stroke="#06B6D4" strokeWidth="2" strokeDasharray="4 4" />
                                </svg>
                            </div>

                            <div className={`relative h-[480px] rounded-lg overflow-hidden ${mentor.bgColor}`}>
                                <img
                                    src={mentor.image}
                                    alt={`${mentor.name} ${mentor.surname}`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h4 className="text-2xl font-bold">
                                        {mentor.name}<br />{mentor.surname}
                                    </h4>
                                    <p className="text-sm mt-2 text-gray-200">
                                        {mentor.designation}<br />{mentor.institute}
                                    </p>
                                    <p className="text-sm mt-4 text-gray-300">
                                        "{mentor.description}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}