import { ChangeEvent } from 'react'
import { suggestionType } from '../types'
type Props = {
	term: string
	suggestions: []
	updateSearch: (e: ChangeEvent<HTMLInputElement>) => void
	getLocation: (suggestion: suggestionType) => void
	onSearch: () => void
}

function Search({
	term,
	suggestions,
	getLocation,
	onSearch,
	updateSearch,
}: Props) {
	return (
		<main className="flex justify-center items-center bg-gradient-to-br from-red-600 to-green-500 w-full h-[100vh] overflow-hidden">
			<section className="w-full md:max-w-[1100px] p-5 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[700px] bg-slate-700 bg-opacity-25 backdrop-blur-lg drop-shadow-lg rounded-3xl space-y-4 text-zinc-700">
				<h1 className="font-thin text-5xl">
					Weather <span className="font-black">NOW</span>
				</h1>

				<p className="px-4">Please enter a location to view weather forecast</p>

				<div className="relative inline-flex mt-10">
					<input
						type="text"
						value={term}
						className="px-2 py-1 rounded-l-md border-2 border-white w-auto"
						onChange={updateSearch}
					/>

					<ul className="absolute top-9 bg-white m-1 rounded-b-md">
						{suggestions.map((suggestion: suggestionType, index: number) => (
							<li key={suggestion.name + '-' + index}>
								<button
									onClick={() => getLocation(suggestion)}
									className="text-left text-sm min-w-full w-32 hover:text-gray-100 hover:bg-slate-700 px-2 py-1"
								>
									{suggestion.name}, {suggestion.state}, {suggestion.country}
								</button>
							</li>
						))}
					</ul>

					<button
						className="px-2 py-1 rounded-r-md border-2 border-white hover:border-zinc-500 hover:text-white cursor-pointer"
						onClick={onSearch}
					>
						Enter
					</button>
				</div>
			</section>
		</main>
	)
}

export default Search
