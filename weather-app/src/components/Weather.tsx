import { forecastType, airType } from '../types'
import Tiles from './Tiles'
import { airQualityIndex } from '../helpers/helper'
import DegreeSymbol from './DegreeSymbol'

type Props = {
	airQData: airType
	data: forecastType
}
function Weather({ data, airQData }: Props) {
	let today = data.list[0]
	const air = airQData.list[0]

	return (
		<div className="w-full md:max-w-[1100px] p-5 flex flex-row text-center items-center  justify-center h-full lg:h-[700px] bg-slate-200 bg-opacity-25 backdrop-blur-lg drop-shadow-lg rounded-3xl space-x-4 text-zinc-700">
			<section className="h-full lg:max-w-[650px] w-full bg-blue-300 opacity-85 rounded-3xl justify-center border border-slate-500">
				<section className="space-y-3 pb-3">
					<span className="font-black text-3xl">{data.name}</span>,{' '}
					{data.country}
					<h1 className="text-4xl">
						<DegreeSymbol temp={today.main.temp} />
					</h1>
					<p className="text-xs">feels like: {today.main.feels_like}</p>
					<p>{today.weather[0].description}</p>
				</section>

				<section className="flex overflow-x-scroll pb-10 pt-5">
					{data.list.map((item, i) => (
						<div
							key={i}
							className="inline-block text-center w-[100px] flex-shrink-0"
						>
							<p className="text-xs">
								{i === 0 ? (
									<span className="font-black">now</span>
								) : (
									new Date(item.dt * 1000).getMonth() +
									'/' +
									new Date(item.dt * 1000).getDate() +
									' ' +
									new Date(item.dt * 1000).toLocaleTimeString('en-US', {
										hour: 'numeric',
										hour12: true,
										minute: 'numeric',
									})
								)}
							</p>
							<img
								alt={`weather-icon-${item.weather[0].description}`}
								src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
							/>
							<p className="text-sm">
								<DegreeSymbol temp={data.list[i].main.temp} />
							</p>
						</div>
					))}
				</section>
				<section className="flex flex-col justify-center items-center">
					<h1 className="font-black">AIR QUALITY:</h1>
					<h2 className="pb-5 text-xl font-bold">
						{airQualityIndex(air.main.aqi)}
					</h2>
					<div className="grid grid-cols-2 bg-slate-200 rounded-3xl opacity-85 w-[600px] h-[200px] pt-3 font-bold border border-slate-500">
						<p>Carbon Monoxide: {air.components.co}</p>
						<p>Ammonia: {air.components.nh3}</p>
						<p>Nitrogen Monoxide: {air.components.no}</p>
						<p>Nitrogen Dioxide: {air.components.no2}</p>
						<p>Ozone: {air.components.o3}</p>
						<p>Coarse Particles: {air.components.pm10}</p>
						<p>Fine Particles: {air.components.pm2_5}</p>
						<p>Sulphur Dioxide: {air.components.so2}</p>
					</div>
				</section>
			</section>

			<div className="h-full lg:max-w-[400px] lg:max-h-[700px] w-full grid grid-cols-2 gap-y-2">
				<div className="h-full lg:max-w-[180px] lg:max-h-[220px] w-full bg-blue-300 opacity-85 rounded-3xl space-y-7 pt-3 border border-slate-500">
					<p className="font-black">Sunrise / Sunset EST</p>
					<p>
						<span className="font-black">Sunrise: </span>
						{new Date(data.sunrise * 1000).toLocaleTimeString('en-US', {
							hour: 'numeric',
							hour12: true,
							minute: 'numeric',
						})}
					</p>
					<p>
						<span className="font-black">Sunrise: </span>
						{new Date(data.sunset * 1000).toLocaleTimeString('en-US', {
							hour: 'numeric',
							hour12: true,
							minute: 'numeric',
						})}
					</p>
				</div>
				<div className="h-full lg:max-w-[180px] lg:max-h-[220px] w-full bg-blue-300 opacity-85 rounded-3xl space-y-7 pt-3 border border-slate-500">
					<p className="font-black">Wind</p>

					<p>
						<span className="font-black">Gust:</span> {today.wind.gust}mph
					</p>
					<p>
						<span className="font-black">Speed:</span> {today.wind.speed}mph
					</p>
				</div>
				<Tiles
					description={(today.pop * 100).toString() + '%'}
					title={'Chance of Rain'}
				/>
				<Tiles
					description={today.clouds.all.toString() + '%'}
					title={'Percent Cloudiness'}
				/>
				<Tiles
					description={(today.visibility * 0.000621).toString() + ' Miles'}
					title={'Visibility'}
				/>

				<Tiles
					description={today.main.humidity.toString() + '%'}
					title={'Humidity'}
				/>
			</div>
		</div>
	)
}

export default Weather
