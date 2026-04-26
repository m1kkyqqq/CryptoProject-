import { useState } from 'react'
function Header({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState('')

	const handleSearchChange = e => {
		const value = e.target.value
		setSearchTerm(value)
		onSearch(value)
	}

	return (
		<header className="bg-black flex items-center justify-between px-6 py-4">
			<div className="flex items-center gap-4">
				<h1 className="text-2xl font-bold text-yellow-500">CryptoPhoenix</h1>
				<nav className="text-white flex gap-9 ">
					<a href="#">Купить криптовалюту</a>
					<a href="#">Рынки</a>
					<a href="#">Торговля</a>
					<a href="#">Фьючерсы</a>
					<a href="#">Earn</a>
					<a href="#">Square</a>
					<a href="#">Подробнее</a>
				</nav>
				<input
					type="search"
					placeholder="Search..."
					className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
					value={searchTerm}
					onChange={handleSearchChange}
				/>
				<button className="bg-gray-700 px-6 py-3 rounded-lg text-white">
					Войти
				</button>
				<button className="text-white px-6 py-3 bg-amber-500 rounded-lg">
					Регистрация
				</button>
			</div>
		</header>
	)
}
export default Header
