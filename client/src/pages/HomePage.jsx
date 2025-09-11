import * as Motion from "motion/react-client"
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/formatDate";

export default function HomePage() {

    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    }

    return (
        <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='max-w-md w-full mx-auto mt-10 p-8 bg-zinc-950 bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-zinc-800'
        >
            <h2 className='text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-teal-400 via-sky-500 to-indigo-600 text-transparent bg-clip-text'
            >
                🚀 Cyber-Dashboard
            </h2>

            <div className='space-y-6'>
                <Motion.div
                    className='p-6 bg-zinc-900 bg-opacity-60 rounded-xl border border-zinc-800 transform hover:scale-[1.02] transition-transform duration-300'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <h3 className='text-2xl font-bold text-teal-400 mb-4'>Profile Matrix</h3>
                    <div className='space-y-2'>
                        <p className='text-zinc-300'><span className='font-semibold text-zinc-100'>User:</span> {user.name}</p>
                        <p className='text-zinc-300'><span className='font-semibold text-zinc-100'>Access ID:</span> {user.email}</p>
                    </div>
                </Motion.div>

                <Motion.div
                    className='p-6 bg-zinc-900 bg-opacity-60 rounded-xl border border-zinc-800 transform hover:scale-[1.02] transition-transform duration-300'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <h3 className='text-2xl font-bold text-teal-400 mb-4'>Activity Log</h3>
                    <div className='space-y-2'>
                        <p className='text-zinc-300'>
                            <span className='font-semibold text-zinc-100'>Initiated:</span> {new Date(user.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </p>
                        <p className='text-zinc-300'>
                            <span className='font-semibold text-zinc-100'>Last Ping:</span> {formatDate(user.lastLogin)}
                        </p>
                    </div>
                </Motion.div>
            </div>

            <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='mt-8'
            >
                <Motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className='w-full py-4 px-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-extrabold rounded-full shadow-[0_10px_30px_rgba(30,144,255,0.4)] hover:from-sky-600 hover:to-indigo-700 transition-all duration-300'
                >
                    End Session
                </Motion.button>
            </Motion.div>
        </Motion.div>
    );
};