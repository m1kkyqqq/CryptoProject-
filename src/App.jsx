import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import CryptoMonet from './components/CryptoMonet'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
	const [searchQuery, setSearchQuery] = useState('')
	const [showIntro, setShowIntro] = useState(true)
	const [showCrypto, setShowCrypto] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowIntro(false)
		}, 2500)
		return () => clearTimeout(timer)
	}, [])
	return (
		<>
			<AnimatePresence>
				{showIntro && (
					<motion.div
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.8 }}
						className="fixed inset-0 bg-black z-50 flex items-center justify-center"
					>
						<motion.h1
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 1.2, opacity: 0 }}
							transition={{ duration: 0.5 }}
							className="text-5xl md:text-7xl font-bold"
						>
							<span className="text-blue-500">Crypto</span>
							<span className="text-red-500">Phoenix</span>
							<div className="text-blue-500 text-center mt-2">
								by <span className="text-yellow-400">Winx</span>
							</div>
						</motion.h1>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: showIntro ? 0 : 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				<div className="min-h-screen bg-black">
					<Header onSearch={setSearchQuery} />

					{!showCrypto ? (
						// 📢 БАННЕР (показываем, если криптовалюты НЕ показаны)
						<Hero onGetStarted={() => setShowCrypto(true)} />
					) : (
						// 💰 КРИПТОВАЛЮТЫ (показываем после нажатия кнопки)
						<CryptoMonet searchQuery={searchQuery} />
					)}
				</div>
			</motion.div>
		</>
	)
}

export default App
