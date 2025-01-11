export default function Page() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h2 className="text-3xl font-bold text-gray-900">Profile Overview</h2>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Profile Card */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Profile Header */}
                    <div className="relative h-32 bg-gradient-to-r from-blue-600 to-blue-800">
                        <div className="absolute -bottom-12 left-8 flex items-end space-x-6">
                            <img
                                src="/restaurant-manager-avatar.jpg"
                                alt="Manager Avatar"
                                className="w-24 h-24 rounded-full border-4 border-white object-cover"
                            />
                            <div className="pb-4">
                                <h3 className="text-2xl font-bold text-white">Sarah Johnson</h3>
                                <p className="text-blue-100">Regional Operations Manager</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="mt-16 px-8 py-4 border-b bg-gray-50">
                        <div className="flex space-x-8">
                            <div>
                                <p className="text-sm font-medium text-gray-500">Locations</p>
                                <p className="mt-1 text-xl font-semibold text-gray-900">12</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Total Staff</p>
                                <p className="mt-1 text-xl font-semibold text-gray-900">248</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Avg. Rating</p>
                                <p className="mt-1 text-xl font-semibold text-emerald-600">4.8</p>
                            </div>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Contact Information */}
                            <div className="bg-white rounded-lg border p-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Details</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <p className="mt-1 text-gray-900">s.johnson@foodchain.com</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Phone</p>
                                        <p className="mt-1 text-gray-900">+1 (555) 234-5678</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Emergency</p>
                                        <p className="mt-1 text-gray-900">+1 (555) 876-5432</p>
                                    </div>
                                </div>
                            </div>

                            {/* Region Information */}
                            <div className="bg-white rounded-lg border p-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Region Details</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Territory</p>
                                        <p className="mt-1 text-gray-900">Northeast Region</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Main Office</p>
                                        <p className="mt-1 text-gray-900">Boston, MA</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Coverage</p>
                                        <p className="mt-1 text-gray-900">12 Active Locations</p>
                                    </div>
                                </div>
                            </div>

                            {/* Performance Metrics */}
                            <div className="bg-white rounded-lg border p-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Experience</p>
                                        <p className="mt-1 text-gray-900">8 Years</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Store Rating</p>
                                        <div className="mt-1 flex items-center">
                                            <span className="text-emerald-600 font-semibold">4.8</span>
                                            <span className="text-gray-600 ml-1">/5.0</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Team Size</p>
                                        <p className="mt-1 text-gray-900">248 Employees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}