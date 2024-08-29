type prop = {
	temp: number
}
function DegreeSymbol({ temp }: prop) {
	return (
		<span>
			{Math.round(temp)}
			<sup className="text-sm">o</sup>
		</span>
	)
}

export default DegreeSymbol
