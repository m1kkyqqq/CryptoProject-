import { useEffect, useState } from 'react'

function CryptoMonet({ searchQuery }) {
	const [coins, setCoins] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
		)
			.then(res => res.json())
			.then(data => {
				setCoins(data)
				setLoading(false)
			})
			.catch(err => {
				setError(err.message)
				setLoading(false)
			})
	}, [])

	const filteredCoins = coins.filter(coin =>
		coin?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase() || '')
	)

	if (loading) {
		return (
			<div className="flex items-center justify-center py-20">
				<div className="text-white text-xl">Загрузка монет...</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen ">
			<main className="container mx-auto p-4">
				{filteredCoins.length === 0 ? (
					<div className="text-center text-gray-400 py-5">
						🔍 Ничего не найдено
					</div>
				) : (
					filteredCoins.map(coin => (
						<div
							key={coin.id}
							className="bg-gray-800 rounded-lg p-4 mb-4 flex items-start"
						>
							<img
								src={coin.image}
								alt={coin.name}
								className="w-12 h-12 mr-4"
							/>
							<div>
								<h2 className="text-xs font-bold text-white">{coin.name}</h2>
								<p className="text-gray-400">Price: ${coin.current_price}</p>
								<p className="text-gray-400">Market Cap: ${coin.market_cap}</p>
								<div
									className={`text-sm ${coin.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}
								>
									{coin.price_change_percentage_24h >= 0 ? '▲' : '▼'}
									{Math.abs(coin.price_change_percentage_24h?.toFixed(2))}%
								</div>
							</div>
						</div>
					))
				)}
			</main>
		</div>
	)
}
export default CryptoMonet
