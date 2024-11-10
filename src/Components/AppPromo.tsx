import React from 'react'

export default function CodingProLanding() {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/4 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwbDIwMCAyMDBNMjAgMGwxODAgMjAwTTQwIDBsMTYwIDIwME02MCAwbDE0MCAyMDBNODAgMGwxMjAgMjAwTTEwMCAwbDEwMCAyMDBNMTIwIDBsODAgMjAwTTE0MCAwbDYwIDIwME0xNjAgMGw0MCAyMDBNMTgwIDBsMjAgMjAwIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] opacity-20" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwbDIwMCAyMDBNMjAgMGwxODAgMjAwTTQwIDBsMTYwIDIwME02MCAwbDE0MCAyMDBNODAgMGwxMjAgMjAwTTEwMCAwbDEwMCAyMDBNMTIwIDBsODAgMjAwTTE0MCAwbDYwIDIwME0xNjAgMGw0MCAyMDBNMTgwIDBsMjAgMjAwIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] opacity-20" />

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative w-[320px] h-[640px]">
                        <img
                            src="/placeholder.svg?height=640&width=320"
                            alt="Coding Pro App"
                            className="w-full h-full object-cover rounded-[40px] border-8 border-gray-900"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-cyan-600 opacity-90 rounded-[32px] border-8 border-black " />
                        <div className="absolute top-12 left-0 right-0 flex justify-center">
                            <img
                                src="https://s3-alpha-sig.figma.com/img/daf3/3ac5/c39a680299db99f7c4f65635f3c41d9a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hUyPnRqoiNa83WNqTGHlYpJrTdgtC7dnlLsytzTKyiM9jfA-SaQDn7oQ8G0A0AxuXfMIWN2KsL6U4BNagEn1NM3DbO4ii9lGASCI46xm6h4ZZ7wfvRfdGSln7hifG7mORtbz6WU8-fM-78xlC2aLZRPaC4g0uuPFjn1AayYdZhdWndhixaUGu4LSKtawD0cU57X~C8RmqJBzmS8OyflvDEct6k7ki1wT8QtWfgsabu3KUponvM~XXUl66zxTTqzT9QIn0Qme3dSXVhY5qUta6U2MdeLdO5aaI-DqLu7vFKN5I~dqhINWkz-g1BfM8jVWftKa7QcKZQ7RNFbjpM0i-w__"
                                alt="Coding Pro App"
                                className="w-full h-full object-cover rounded-[40px]  filter grayscale brightness-0 invert mt-40"
                            />

                        </div>

                    </div>
                </div>

                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold text-gray-800 text-center lg:text-left">
                        Wanna See More?
                        <br />
                        Join Us !
                    </h1>
                    <div className="grid grid-cols-2 gap-4 text-[#00BCBF]">
                        {[
                            { icon: '🎥', text: 'Recorded Lectures' },
                            { icon: '⌨️', text: 'Language-specific keyboard' },
                            { icon: '📝', text: 'Online Quizzes' },
                            { icon: '∞', text: 'Infinite Project Size' },
                            { icon: '💻', text: 'In-app Coding' },
                            { icon: '☁️', text: 'Cloud Computation' },
                            { icon: '📊', text: 'Evaluation Reports' },
                            { icon: '📰', text: 'Coding Magazine' },
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-2  p-2 rounded-lg">
                                <span className="text-2xl">{feature.icon}</span>
                                <span className="text-sm text-gray-700">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center lg:text-left text-gray-600 font-semibold">50k+ Active Users</p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <a
                            href="#"
                            className="bg-[#1a73e8] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1557b0] transition-colors"
                        >
                            <img src="data:image/png;base64,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" alt="Google Play" className="w-6 h-6" />
                            <span className="text-xs">
                                GET IT ON
                                <br />
                                <span className="text-sm font-semibold">Google Play</span>
                            </span>
                        </a>
                        <a
                            href="#"
                            className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                        >
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEUAAAD///9DQ0P7/PvKzMnZ3d6tsKzz9PKLjYrX2db4+fh7fnrm5+Wkp6PHycYVGRTR09Cvs7UOEA1KTUqQk4+4ureqrKoeIR03OjYcHhwYGRducGycn5t1eHQ8PjuRkpAoKyZXWlcHDgNiZWAuMC1RUlASFhBYVk/i4d63trFkYl0sKiQXFQseHBZ1cmzt6+c5MiwXDQB/eXhoYGEfGBgVDQ6hm5tWUlJEPz+PiYmDf36ppqkiHyM5Njl4dHjHxMcdIyUTGBo0PD9DS00mZxnlAAAEiUlEQVR4nO3c21raQBQF4IwBE0KEpArSAirVWmw9tNV6rDXa93+nCjF8CTOgldnsbbr+67nYi2SOJHEcAAAAAAAAAAAAAAAAAAAAAAAAAPifvFvfaLW5i6CzWa8ESqngHXchRDqrnkq95y6FRLOlJja5i6HgK1XqhJ1aPqD7gbse67pBPqA64a7Hug1VVOMuyLbeVEDV4q7IMi2g6nOXZFddC6i2uGuyal0PWLJuGOoJt7lrsmpND+jucBdlU0cPWLKRtGJI2OEuyqZB6S9hw5CwyV2UTVuGgD53UVbpqxkVcddk11AL6O1x12TVjn4JB9w12dXXAna5S7JsdTpgyfYU2lwRlO0KOk7hbEYNy7VnGitsK9a4q6GQSxi9/cVos6mf1EdP8dzG9CSxv9n8uJy6bNjs9irD8OQkDGstvxBlPNJ4kZ+/flv9cWvPC4e1tf5buLJ+rXgU6lX8ydXZ7fndlfxfFIN26BZau8MN2cffnZYyierGxm3P2LqyvuyyX2zPnG+ssVv8e2nHr81uHAnN2HNn15zerp/SO3D/kx/Nb6tWBW4aV/R9gyHl43BSC80351TLXe5A0wzHvAvqcUcq0tbUFlS4Q+WZjl8WV5MzcZiOCG0I97mTPaG5giND7mipA7KAQs6ppv/PtWuVO575FNuexgp3PuOfZdaIOOag7IQiZovPhAFl/GPzksXoKx1wZxs7pgvY4M6WmrPHW5CQuZ6uFwZfubOl6AbSY+5oqcOXbGVfRUgndL5QBVRC7lG6m1TGROEQLtgOuZM9OaIKKKUX0k33X7iTZdpEAb0j7mQZqsMLOWdsJ0QJ5TyLSRRQTjekSuhecgfLfCVKKGeguSRKKOftkhWihCF3sAkkfK3y36WelHU3WcJAzMNgpiearRAz43+jSnjNnSzznSqhmO0h2bpUznRBdtIm5nmh6PlaX0fMFxbIjto87mSZc6qE6gd3tCenZAmljDVnZAnFTIlkg6nyfnJnS1E9CqXEnOvTDTVSBpsLwoQyzqPO6DriY1c84443QraqGQklRLyiTKg8ATcq1TY/85s7IOkDQ2MH7PMi5Xwx5nGvbqjOvXNC5pmR+jYdcS84E9KOpinm7eISEp7zJpzzMpctvAGXMNbcMCekXbmN/OJOSHeWkYq5AzpOlTSge8udz3F+kyYUcAlpL2LA3gtHKHsi81yYobuIUk6/6ebEU+5omZgo4B13sAmiIykZw0zqmiThFXesPIq1m4j3RyduCRIKWM3k2f/igLivZNm+T+U8kZFJguer/gfePXcg3a7VhCK/xXdjMaCcp9kL7P1jKuMVYANbL0JVuYPMlNhZvYUCR5nMg40B1Uu4Y8zzsPhVDBPuEPPtze6LbhjF2/617/fi6uwfoppwR3iWeUR17+r5j3jcD3rmkwE5W8I5tg133naitxvc6Q3fyIehk6n39qqzPlGSTB0O3CXLLHMhD/Gko3nxn3kt/WowafiwrPLsGNTX4rjXnxtvbK/rt+P2tciFKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBn9BcakTE8Z0+SZAAAAAElFTkSuQmCC" alt="App Store" className="w-6 h-6" />
                            <span className="text-xs">
                                Download on the
                                <br />
                                <span className="text-sm font-semibold">App Store</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}