import React from 'react';

const Awards: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-12 relative">
            {/* Header Section */}
            <div className="flex justify-center items-center mb-16">
                <div className="absolute left-0 top-12">
                    <div className="w-20 h-20 border-2 border-teal-400 rotate-45" />
                </div>
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl">
                    Our Efforts To{" "}
                    <span className="text-teal-500">Innovate</span> Have Been{" "}
                    <span className="text-teal-500">Recognized</span> And{" "}
                    <span className="text-teal-500">Appreciated</span>
                </h1>
                <div className="absolute right-0 top-12">
                    <div className="w-20 h-20 border-2 border-teal-400 rotate-45" />
                </div>
            </div>


            <div className="relative bg-gradient-to-r from-teal-300 via-blue-200 to-blue-400 p-12 rounded-3xl shadow-lg flex flex-col items-center">

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">

                    <div className="rounded-3xl overflow-hidden border-4 border-blue-400 shadow-md h-[400px] w-[400px]">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/c95b/8366/a45aa52809af9b8c37ed017c32130048?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NaMeN-uTPd7sYA112J1aM-gEq1dNEdNgys6XhdFIKgluvkX3NAQ7Q9WzmDuWSkhe2I561VVW3fDAMyLoGHZB1CV2~JhuWUFKoIUD3olqdYkxNi1v1RxSwPosZRvEMxAlbo1wcmWB1eBDbJf1xrlo6meLcy-yPbMSyzWKOCxr5ygc0RJXUuqx7gg6CcM2o~5xDpFXZdaZg42AsWugbw0qktAnzB8xWtLWAmw19HKQ-mTqC8WEZHPb8NvhHduzEMJ-ayF7A~IfTRDT9T1DQ7AaXCmw4C~dyimSpRH9a1kxDEr7IS38wY7j5Pnr3N8DZ3jtFvPjuDGmcIgQk4Py36OQ1g__"
                            alt="Award ceremony"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="bg-gradient-to-br from-blue-500 to-teal-400 p-6 rounded-3xl text-white max-w-md text-center shadow-md">
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
                        </p>
                    </div>
                </div>


                <div className="h-8"></div>


                <div className="flex flex-col md:flex-row gap-8 items-center justify-center ">

                    <div className="bg-gradient-to-br from-blue-500 to-teal-400 p-6 rounded-3xl text-white max-w-md text-center shadow-md">
                        <p className="text-lg font-semibold">Honored by Shri Dharmendra Pradhan ji</p>
                        <p>Union Minister for Education</p>
                        <p>Govt. of India - 2023</p>
                    </div>

                    <div className="rounded-3xl overflow-hidden border-4 border-teal-400 shadow-md h-[400px] w-[500px]">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/c819/a9ec/0047ccef78c392245908f6922b8e2cfb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AZvQdPxIpBk7ASu0UJZeoc6XHbIP66j7i9p04-JFok1Lc1qCJV2qA3I-9m5U1Vxc5g4b4dr47cNhOvr6D1ygjyMOEUNah8frYbaROKkDnQoLBl16ObO7Qc9xFG039UR-YWejS0d4FKS1bf6QIukkNatl-USuEkT8kv~mNYChOzt0cwkWyD4IsT4ksFftFnpSZAZ1NQSUJioy4umfIA5bGwZsoaHKepMxb3MW5k~6WHPCURXYOk66NDoVr2qsH8PQEaNqox5itFKlaJfg-12-43DgmrcgES0~y1qVzM3LQFRtiHAoawtikyoB5bfi1JtUGtcVhfglgUpwSRCaoUcOZw__"
                            alt="Recognition event"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>


            <div className="absolute right-4 top-1/2">
                <div className="w-6 h-6 rounded-full bg-blue-500" />
            </div>
            <div className="absolute left-4 bottom-1/4">
                <div className="w-6 h-6 rounded-full bg-teal-500" />
            </div>
        </div>
    );
};

export default Awards;
