// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "../../firebase";

export default function LoginPage() {
    // const loginWithGoogle = async () => {
    //     try {
    //         // Sign in with Google using Firebase authentication
    //         let result = await signInWithPopup(auth, googleProvider);
    //         let user = result.user;
    //         console.log(user);
    //     } catch (error) {
    //         console.error("Error signing in with Google:", error);
    //     }
    // }

    return (
        <div className="min-h-screen min-w-screen bg-[#f5f0e6] flex items-center justify-center p-4 gap-50">
            <img src="/coraline-on-white-background-clear.png" alt="Coraline Logo" className="w-[300px] h-auto object-contain" />
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                        Sign In
                    </button>
                    {/* onClick={loginWithGoogle} */}
                    <button  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                        Sign In With Google
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium"> Sign up</a>
                </div>
            </div>
        </div>
    );
}