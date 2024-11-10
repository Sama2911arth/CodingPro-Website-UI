
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
    id: number
    name: string
    role: string
    content: string
    image: string
}

export default function StudentReviews() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Saanvi Patel",
            role: "Executive Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            image: "https://s3-alpha-sig.figma.com/img/e80d/9c67/fccb13c456c8d714e0edc5a28991e7fa?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z8Vi6r5S7pzzFEPOMwkvMnrGmav55S-0Pm6K65Ho~Qy0k5tpBqTglXbi2d-TQlCtYu4TOLLHBfG5b0TWZswsiKAHSouelxFGJEh6irUQ4oNUy5mSOmWLMLzL03IU3SEas1SDtCqdW2mNgK3~lCVFFx6Pg60-o-0HNX-4do5AWOl2oatOPggd8Fj0q95WeKt-exIvx6wCJHVCcLrMVMyh~oW-VKJQBs7bTGALgSogE-ZZ7Cm1NEx~O6g8owHe-~t~5SqMtF1ZnWOxkorBukyMYD66j-QtXyyZKhRUdeuQq1~KnD5UK69OArmCJcyGM4jE4ItkiuO9rpzbzfBEeBkh7w__"
        },
        {
            id: 2,
            name: "Saanvi Patel",
            role: "Executive Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            image: "https://s3-alpha-sig.figma.com/img/e80d/9c67/fccb13c456c8d714e0edc5a28991e7fa?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z8Vi6r5S7pzzFEPOMwkvMnrGmav55S-0Pm6K65Ho~Qy0k5tpBqTglXbi2d-TQlCtYu4TOLLHBfG5b0TWZswsiKAHSouelxFGJEh6irUQ4oNUy5mSOmWLMLzL03IU3SEas1SDtCqdW2mNgK3~lCVFFx6Pg60-o-0HNX-4do5AWOl2oatOPggd8Fj0q95WeKt-exIvx6wCJHVCcLrMVMyh~oW-VKJQBs7bTGALgSogE-ZZ7Cm1NEx~O6g8owHe-~t~5SqMtF1ZnWOxkorBukyMYD66j-QtXyyZKhRUdeuQq1~KnD5UK69OArmCJcyGM4jE4ItkiuO9rpzbzfBEeBkh7w__"
        },
        {
            id: 3,
            name: "Saanvi Patel",
            role: "Executive Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            image: "https://s3-alpha-sig.figma.com/img/e80d/9c67/fccb13c456c8d714e0edc5a28991e7fa?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z8Vi6r5S7pzzFEPOMwkvMnrGmav55S-0Pm6K65Ho~Qy0k5tpBqTglXbi2d-TQlCtYu4TOLLHBfG5b0TWZswsiKAHSouelxFGJEh6irUQ4oNUy5mSOmWLMLzL03IU3SEas1SDtCqdW2mNgK3~lCVFFx6Pg60-o-0HNX-4do5AWOl2oatOPggd8Fj0q95WeKt-exIvx6wCJHVCcLrMVMyh~oW-VKJQBs7bTGALgSogE-ZZ7Cm1NEx~O6g8owHe-~t~5SqMtF1ZnWOxkorBukyMYD66j-QtXyyZKhRUdeuQq1~KnD5UK69OArmCJcyGM4jE4ItkiuO9rpzbzfBEeBkh7w__"
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-blue-500 to-cyan-400 px-4 py-16">
            {/* Technology Icons */}
            <div className="absolute top-4 left-4">
                <img
                    src="https://s3-alpha-sig.figma.com/img/bbe5/e196/94cf4fcde7b659fa5892283e1e21b314?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Drs1LkLaCMfPTUCYbtc0ajSvgTW6QGlB9m68NlmCZENfD21zjHa0r0fUnhm5C86ng3LnFwBz1tTs54SixetCJjqolAQqXqtgsdM4cCi0oadQU1y12HOnKZVRDwe42y9QwfTwPW7RiirblMdOfd6~cSh5CAHN4OvorBCWxIej0LAYdwjomDbKlt18cfEq9z~L2fFRjlGrgqMS3OGWwtB-gHgDhg~YmiHyH1es8h~HhB5HFeooXWza9DB7h2~0Vna0~DOCVfICZdNWbX3ThzlRzO7V7xK4PnephaqqfP2tDhz0U~GQJSyAvi4cukf7BSbhvNFygxdt-S6Vb~FFp8ZcQQ__"
                    alt="Java Logo"
                    className="w-16 h-16 rounded-lg bg-white p-2 shadow-lg"
                />
            </div>
            <div className="absolute bottom-4 left-4">
                <img
                    src="https://s3-alpha-sig.figma.com/img/7d30/f85d/9d4a8d66d586ccd3e0be5956d62c9ae3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FYwvhQ~uLTn89bEVRvTtBX8rX2an05cf57f7Ed7sLMdrm25UoKXAT-W4PMfDlsQ-5PEkjxDuUorAUKYNDsXsA0gqy-mE4huQTjOyQCR7sSpwl2bk4AvEfNcxBUtWHxDnZslv7vp5~X95UOGlzFQ0POFsp4tonygVnTTuw23b62roceyFyorMk2xEFqG0BSq-xlsO3G1yzQpeLrJq7t34VFQ64GctNYNFwbou0FAANbOjqoiPbhPiJ3qcn6W7F4SYh6h305pU0wgq1Mvhzeap7roCCf5UfRxwn1Y40kqwTYLAPTTQ6KKsbsOiFnt2glpSFOxPz-FPUyp~ztVY0Vt3lw__"
                    alt="Node.js Logo"
                    className="w-16 h-16 rounded-lg bg-white p-2 shadow-lg"
                />
            </div>
            <div className="absolute top-1/3 right-4">
                <img
                    src="https://s3-alpha-sig.figma.com/img/d2bc/05e5/43f612eac8f6f73fd5cc2e73ce1dcc1b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HsBuwxQQM3yLZ~DuwYI8u2IPLcyr71-qdciSOVAgaWuRytNto4m~HKuw5FVXu7~oczW9T-eyLCeG~miY8KcjjDkUG~a~qb9A4m~qsLBfRGCu72pV7OkT7FA~ZKfDGlqKatsDVPoVEWWEl33vdzdumRCEHY2iYq5em41owYTqJzf-V-a9Nx6m~f~RuMN9YiIzC1sGsUeHl-o4iR5o1tcPdSC7YkpL9nkO7p9zrpqQoct--vehlnCTYLSyptiaZBoM6tFEaF-7PQdDKc35LNIXD7jJaMZKA0a6HnN5ZMGIRD-2J22g~Htn~bqSaJiYSXokWsBbon-FPL9UKLMoC-y6Tw__"
                    alt="Angular Logo"
                    className="w-16 h-16 rounded-lg bg-white p-2 shadow-lg"
                />
            </div>
            <div className="absolute bottom-4 right-4">
                <img
                    src="https://s3-alpha-sig.figma.com/img/786c/1676/9fb5e201f6d414c01dff2cd8ec30861f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E0pYlA3g5oQ4URyddXGodbR-9jYZBy4--h~a8aHdLmREmF0GuuqtPeg8weVSdtpT-IN0q0t--FVIYnnzs5VcX7FsSaZvRoVq2Wz2TixCMHZ3bbzUARDogp1vXccZhAWI7WRWtuOGkhw0aF1mkPaHkYBear1UUVdyp0OdnNjYfqgPH55b-EfZ61N4mli1lonr5srDQcH~OVGFYFIE0GTcgKJQnoH8ach1WifHXt3M0WlQESKioLtN4A-f2-fZHdyqMTIjMSjBIPYT6YmJsjQMcis7lpk17mALBMgbz8LxlmGv9~mD42s6ORiRmZmxOEjq-6WHHzhZ~YIpoeVv8cvxGA__"
                    alt="Flutter Logo"
                    className="w-16 h-16 rounded-lg bg-white p-2 shadow-lg"
                />
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                    And Our Students Agree . . .
                </h1>

                {/* Testimonials Slider */}
                <div className="flex justify-center gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-lg w-[500px] text-center flex flex-col items-center">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full object-cover mb-4"
                            />
                            <p className="text-3xl text-blue-600">“</p>
                            <p className="text-gray-700 mb-4 px-2">{testimonial.content}</p>
                            <p className="text-3xl text-blue-600 mb-4">”</p>
                            <h3 className="text-blue-600 font-semibold text-lg">{testimonial.name}</h3>
                            <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}