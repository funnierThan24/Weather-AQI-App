type info = {
	description: string | JSX.Element | number
	title: string | JSX.Element
}

function Tiles({ description, title }: info) {
	return (
		<div className="h-full lg:max-w-[180px] lg:max-h-[220px] w-full bg-blue-300 opacity-85 rounded-3xl space-y-10 border border-slate-500 pt-3">
			<h1 className="font-black">{title}</h1>
			<p className="flex flex-col justify-center text-center text-2xl">
				{description}
			</p>
		</div>
	)
}

export default Tiles
