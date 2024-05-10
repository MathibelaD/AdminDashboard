

export default function Page() {
    return (
        <div className="flex flex-col h-screen w-full">
            <div className="flex-shrink-0 bg-white shadow">
                <div className="max-w-7xl mx-auto py-4">
                    <h2 className="text-2xl font-bold">Admin Profile</h2>
                </div>
            </div>
            <div className="flex-1 z-0 py-6 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className=" flex px-4 py-5 sm:px-6">
                        <img src="https://avatars.githubusercontent.com/u/92311415?v=4" alt="User Avatar" className="w-20 h-20 border rounded-full mr-2" />
                        <div className="jsutify-center items-center">
                            <h3 className="text-lg font-semibold">John Doe</h3>
                            <p className="text-sm text-gray-500">Admin</p></div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="flex flex-wrap justify-between">
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2">

                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                    <dd className="mt-1 text-sm text-gray-900">admin@example.com</dd>
                                </div>
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2">
                                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                                    <dd className="mt-1 text-sm text-gray-900">+1234567890</dd>
                                </div>
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2">
                                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                                    <dd className="mt-1 text-sm text-gray-900">123 Admin Street</dd>
                                    <dd className="mt-1 text-sm text-gray-900">Admin City</dd>
                                    <dd className="mt-1 text-sm text-gray-900">Admin Country</dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}