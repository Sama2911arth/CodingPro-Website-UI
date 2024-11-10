import React from "react";

const EnquiryForm: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-8 py-16">
            <div className="bg-white shadow-lg rounded-3xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/8c24/83db/e79f2bfe6b104a28539394f367c88f0c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y2uB6FB6cr63rTLx6GdDllZX4Hz08M0fcraRkVmqK4Chg5FCxvzzc5LSjV~Xk1nf8u0txuhDIG7bSk8XbnzsIq~yBv-lhhNzsLBb1L~F3dcZUpjFKpDj4oCug~~i02H9uGWlB4TWaB6g9gGVuXKhAYhjFBe4JZWx0ffTQ2iAexEnurWSLHsggEvs1ihFocJ90K6d76izXQAAmntrE9xTz5deaDXQcKaSNs4HYiR3EO8ZdLlBxYCnw2fBJLvCPFYFrEu3Y~ayNqh1yxlo0QBILjhm~DzMJlsaJ2HamKsjlEFJDhOkvrtBEJZG5Ksk83IXI1yOWJZzNPrOkRklXZqzUA__"
                        alt="Person coding"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-6">Find Out More Reasons To Stay</h2>

                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-5 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Mobile no."
                            className="w-full px-5 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            className="w-full px-5 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <div className="flex items-start space-x-3">
                            <input type="checkbox" className="w-6 h-6 rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
                            <p className="text-gray-600 text-sm">Creating an account means you’re okay with our Terms of Service, Privacy Policy, and default Notification Settings</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                        >
                            Enquire Now
                        </button>
                    </form>

                    <p className="text-gray-600 text-sm mt-6 text-center">
                        Already Have An Account? <a href="#" className="text-blue-500 hover:underline">Sign In</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EnquiryForm;
