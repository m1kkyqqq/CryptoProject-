import { motion } from 'framer-motion'

function Hero({ onGetStarted }) {
	return (
		<div className="relative overflow-hidden">
			{/* Фоновый градиент */}
			<div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-black to-red-900/20" />

			{/* Контент */}
			<div className="relative container mx-auto px-6 py-32 text-start">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-5xl md:text-7xl font-bold mb-6"
				>
					<div className="text-8xl text-white font-bold grid grid-cols-2">
						<div>
							Покупайте крипту<br></br> с низкими<br></br> комиссиями на
							<br></br> <span className="text-amber-500">CryptoPhoenix</span>
						</div>
						<div className="border border-gray-500 rounded-lg ">
							<h1 className="text-2xl px-4 py-5 text-amber-400">
								Поддержать разработчика
							</h1>
							<nav className="gap-3 text-2xl">
								<a href="#">[TRC20]TYtt2hU6yA6vGAxff4Yr5ztsPmdDpPjokh</a>
							</nav>
						</div>
					</div>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="text-gray-400 text-xl mb-8 max-w-2xl "
				>
					Отслеживай криптовалюты в реальном времени. Цены, графики и анализ —
					мы всегда рядом!
				</motion.p>

				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					onClick={onGetStarted}
					className="bg-linear-to-r from-yellow-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
				>
					Showcrypto
				</motion.button>
			</div>
		</div>
	)
}

export default Hero
