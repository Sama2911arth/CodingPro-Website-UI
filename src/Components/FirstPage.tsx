import React from 'react'

export default function FirstPage() {
    const stats = [
        { image: "https://s3-alpha-sig.figma.com/img/a450/7d8e/c681d13666c4cd13e403567a7e2adf4c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MX1ZQ4F6EXKmsAZNiP7Q7coBC9xWvM07oA2OdjDM52cni08-X86QGBk1pQUFc2BhgMzt9z70O9QUn7oOnr5yHsUDd1afQGD36ScHuY2mO9WXHKuOzvpwK6TG1JKikL3360X3MgyNY4RMW1GBOirdmaVwr8kWj2lY1k7bdDlas8R08p6B7qNqehiU0LAaq2LlVUzGPk1cJgmy2MxwipPtHV5xOfgTFuZi1Ux6NolXUC7Xe8Go0Z4fUl4Ihi17Vfx0Ho5t2XZ7LsDqTjaK-cR4xsip0Juz1gjaGMgInGH0bDRjK6~y1sKGauyhDVv4wh7jjyN3uQ6~SrbMterDxncHeg__", number: "50+", label: "Cities" },
        { image: "https://s3-alpha-sig.figma.com/img/ca75/62dc/f6ab2bda6396c038478bc7e8bac9ff4d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f70Yww90jGEuvRPaq1j10HBMMcrSOB1BSts7ss7~CoFe1azH~CsA9w3dmdStXLuMaufYuosDefPHZWbpy~1eqPKmVIaNJiVWmVMxOsWgKkXrvROCmPkJaht8ZP1TwO8xrtgUp-8pxWfLZvvNu9Cp71P3lzJ9dThYOiUNnZJ4UCTs14MiVEHsqiPy02ZX8GQNa7vYAFn-chEd1VUfouhOMPz~RMZT0KBCvNm07lbHLD6Izp-QL09IctmWKzv21vEDklmNqC2ugzs24r~pM19d4kH5NzVQ5QSZ2th6PG8nHVaY8plB93gXNUG8HrEJ~DZZSlqlDA6ecdyeNqsNH2lKsg__", number: "80+", label: "Modules" },
        { image: "https://s3-alpha-sig.figma.com/img/2626/76a5/be7177d6615a51b866cfbce17d01a3e9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q41cpdwNEQVKYeXfGzNmWEJ2QgoMJ2B37E~NwIuPaeSPIAzZd~DH0PkBbts54It8Vhsiv5yhl~coO1uGyZLtyK2uAJ8F1wlUkkwGU23N-FDfo7YagT8sD3Pc4wuC4Ni~QzdVKxO2r3MB7qq-5SxlBLCbgPdwMQH~SpQZeCwwcJ~ZcsRkqlcdWgolU7DqProDaTin~asAKadRuuNh73vIejL5GvYNK0g99C1rZxSlCMUqt0TkiK~TjnMlH-jxhkWsqk7NqpMUwftcx-2wQbPC~kUk0Y87Rqqpyuq6kmxdU~WljRuOYuie4P6ClUbxOBppK-AU16GpBPsfCBPCiIIjSg__", number: "10K+", label: "Students" },
        { image: "https://s3-alpha-sig.figma.com/img/9ef8/985d/d5d404395c93d8a5b5759b3f527700cc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7xi1A1mCqOjkL8xDc0KGyzBa3iQzwAKjZYpDwrYYFrgk11ysrYQ7plYp3peHhcML2ljoJsU1zHlj5H1I1Lv86r5dmRWon3uJ~Mna5phG5dPohBmpQFTx~Kvj5UNR2LDUCn3s9XnJuWAH3BEz3L-lTarLunSAT-EOqoj38h80HPWxN6-QNmfeIbX0atboPJLfiuu9oXcSg5riVlpNp6Ulv7wRbM24-~sqRP8s3zp7cSeaB9xXShe9M2DqZQTOG~YfZ2E2Ekex55QDrpmPU0D6YNIlV~Vi0iNL4aNpGwMWV-~LcbvPqRC6sG5PIMR7xfiMlfZIgrjdVKOdoJehIhNjg__", number: "100+", label: "Institutes" },
    ]

    return (
        <div className="bg-white">
            {/* Top Banner */}
            <div className="bg-cyan-50 py-2 text-center">
                <p className="text-gray-700">
                    Learn coding at the nearby <span className='text-[#1C408E] font-bold'>Coding Pro</span> Institute.{" "}
                    <a href="#" className="text-[#1C408E] font-bold font-ul">Enquire now</a>
                </p>
            </div>

            {/* Navigation */}
            <nav className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/daf3/3ac5/c39a680299db99f7c4f65635f3c41d9a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hUyPnRqoiNa83WNqTGHlYpJrTdgtC7dnlLsytzTKyiM9jfA-SaQDn7oQ8G0A0AxuXfMIWN2KsL6U4BNagEn1NM3DbO4ii9lGASCI46xm6h4ZZ7wfvRfdGSln7hifG7mORtbz6WU8-fM-78xlC2aLZRPaC4g0uuPFjn1AayYdZhdWndhixaUGu4LSKtawD0cU57X~C8RmqJBzmS8OyflvDEct6k7ki1wT8QtWfgsabu3KUponvM~XXUl66zxTTqzT9QIn0Qme3dSXVhY5qUta6U2MdeLdO5aaI-DqLu7vFKN5I~dqhINWkz-g1BfM8jVWftKa7QcKZQ7RNFbjpM0i-w__"
                                alt="Coding Pro Logo"
                                className="h-10"
                            />
                            <div className="hidden md:flex ml-10 space-x-8">
                                <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Virtual Labs</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">Programs</a>
                                <a href="#" className="text-gray-600 hover:text-gray-900">For Colleges</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-blue-600 hover:text-blue-700">Log in</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Computer Image */}
                    <div className="relative">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/e6e7/2989/38506939c717340be898d2578dbd1a62?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pMJPtYkYoGxYw1-5OmSKZpJDsv6lA5Z0wWR3l6GDxcHpVUkhDSfyM5T93eTJBSdSocib8pBGEukob2xvm-0iShK-E18ZIIZoE8OMFpUc-suZRMS2z4AwVQODG-q3aST9fZ3-LPkfxamONc-KzpuBp3e8dgkUBLwBORHFpRf8mpU6rykoZqLe8OA22o0~q~WNPq4Yuj37qmuz-FwD38TVDhfKaVb0j6EWLkAZVOtfVLHUPnKGTm-29r-OpW8wdzlMzIwVwW4k4LHKqGLRbUxftrEp164s15CWqyTUEwcOpEH~z4PSPZj9xtuSeAR9i6Uby21zlja4ELv972NERRBxYg__"
                            alt="Desktop Computer"
                            className="w-full "
                        />
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#4C5856]">
                            Where The World
                            <br />
                            Learns To Code
                        </h1>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Campus Training Card */}
                            <div className="border-2 rounded-lg p-6 border-[#008D8F] hover:shadow-lg transition-shadow">
                                <div className="text-blue-600 mb-4">
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#1C408E]">Campus Training</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Designed for college students with a focus on xyz, xyz. Lorem ipsum dolor
                                </p>
                                <button className="bg-[#2B95ED] text-white px-6 py-2 rounded-md hover:bg-blue-600 inline-flex items-center">
                                    Explore
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Professional Training Card */}
                            <div className="border-2 rounded-lg border-[#008D8F] p-6 hover:shadow-lg transition-shadow ">
                                <div className="text-blue-600 mb-4">
                                    <svg className="w-12 h-12 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#1C408E]">Professional Training</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Designed for college students with a focus on xyz, xyz. Lorem ipsum dolor
                                </p>
                                <button className="bg-[#2B95ED] text-white px-6 py-2 rounded-md hover:bg-blue-600 inline-flex items-center">
                                    Explore
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="border-2 rounded-lg p-4 border-[#2B95ED] flex items-center space-x-4">
                            <span className="text-2xl"><img src={stat.image} className='h-20' /></span>
                            <div>
                                <div className="text-xl font-bold text-[#2B95ED] flex items-center">{stat.number}</div>
                                <div className="text-xl font-bold text-[#2B95ED]">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recognition Section */}
                <div className="mt-16 border-t pt-8">
                    <p className="text-center text-gray-600 mb-6">RECOGNISED BY</p>
                    <div className="flex justify-center items-center space-x-12">
                        <img src="https://s3-alpha-sig.figma.com/img/a234/52c8/cce5f0cb80a82f17d5604bc3db906bcc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecSzCWuKYoF6vGF-Jr1cqZ29BQxglmER0-~UJiFeI3XzW8vIzkG-N4~Pgc5pPHqCQtOKf~yoXyOzzRyxYVycc6RzJW~CiA6ntUEhxSRpZFRXddxUhe-LfEPcqXPI5JCscaaiAK147Ei7gIM9b8XiUBbFZXfc-qrg3ksUKv0muSnxZiJjBu19xB2Yn-zkRItUK-Jvee8-VWttc3oIcTmfB56JoZYFg4ofREoGVSKDp4YgeClYvHaryCBBoGjC3dSXM4Ew5vkWneld2AUuGI34NDwpUj71XDK40gDm5jm8rvQ8FP9iKZDs70vdaGQOf-fa-CSh6fpfhORkO-qPB69wlQ__" alt="Government of India" className="h-20 opacity-75" />
                        <img src="https://s3-alpha-sig.figma.com/img/db8f/8eea/2f78e02fc175395eb8601bb264e73f89?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2O-eRqHoYNBDrGJCskL40hPQ1SUK2LQbTh8hDz~th2~i6FkSBJlOvxT3S-60X2oAjoh8TwLWl8qWwSYWj~xSs8MsW8GSIEhUp68cpm7aKQtYFSLz~~Kz2BIJczKWqHbsejK-~Ra9x5AlJXUaxtrbfkfXq08KkIE-Osi605x-90ntPUX4o-EMq34WGD6G2PwSut3LaVuhV9qpgDjhWPLkiTwRG-5c~kh-RNwbFbr3IQhn~E3kgxt9masVQDMPqjceckOeyz2oqbrK5rUWM8DUTWM1qIS4i5yn~JwKEMRHfZf6mOJEIXl-1ANtuWZbmtqUrMmV2NAkBFrsac2aZ-iQw__" alt="NSDC" className="h-40 opacity-75" />
                        <img src="https://s3-alpha-sig.figma.com/img/04aa/cb84/7189343a85161128d28adebaeae502c0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YR~hHYwIP1umrJze9Kf0EYbsV5~P7u-5NK1LlbSOpfkizTRxN2CQQJPL62p8p-9b0C54DdgsW8b6lqb-qlNQpWp3CVYUAiKYMkc50F~bMRfKiMOSZonO52vLyHUbVj8mhJ8cnqcnBw2TEuoDtvhb1b4rx8e6ihaWWHldJulYaKq0TDyMfWRN6f2e4krOTLZE58IexNuTD0ArW7Y-mVtb7~MN67qZntm8GehPCepg-0E614ymDxk4lrKWm6YtPRGCuqqCZ9tTBbLKTUP38L2hO33rT15zcsL7ubvgAO2NjN~tMqMYLGgmALSxaggYbEJy9gJ0MkozjGfuRfEQdP0v1A__" alt="Startup India" className="h-40  opacity-75" />
                    </div>
                </div>
            </div>
        </div>
    )
}