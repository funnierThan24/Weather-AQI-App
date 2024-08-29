import Search from './components/Search'
import Weather from './components/Weather'
import getForecast from './hooks/getForecast'

function App() {
	const {
		term,
		suggestions,
		forecast,
		airQ,
		onSearch,
		getLocation,
		updateSearch,
	} = getForecast()

	return (
		<main className="flex justify-center items-center bg-gradient-to-br from-red-600 to-green-500 w-full h-[100vh] overflow-hidden">
			{airQ != null && forecast != null ? (
				<Weather airQData={airQ} data={forecast} />
			) : (
				<Search
					term={term}
					suggestions={suggestions}
					updateSearch={updateSearch}
					getLocation={getLocation}
					onSearch={onSearch}
				/>
			)}
		</main>
	)
}

export default App
