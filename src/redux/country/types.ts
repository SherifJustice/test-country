// export type CountryType = {
// 	name: { common: string }
// 	flags: { svg: string; alt: string }
// 	region: string
// 	capital: Array<string>
// }
export type CountryType = {
	altSpellings?: Array<string>
	area?: number
	borders?: Array<string>
	capital: Array<string>
	capitalInfo?: { latlng: Array<number> }
	car?: { signs: Array<string>; side: string }
	cca2?: string
	cca3?: string
	ccn3?: string
	cioc?: string
	coatOfArms?: { png: string; svg: string }
	continents?: Array<string>
	currencies?: { EUR: { name: string; symbol: string } }
	demonyms?: { eng: { f: string; m: string }; fra: { f: string; m: string } }
	fifa?: string
	flag?: string
	flags: { png: string; svg: string; alt: string }
	gini?: { 2016: number }
	idd?: { root: string; suffixes: Array<string> }
	independent?: boolean
	landlocked?: boolean
	languages?: { deu: string }
	latlng?: Array<number>
	maps?: { googleMaps: string; openStreetMaps: string }
	name: {
		common: string
		official: string
	}
	population?: number
	postalCode?: { format: string; regex: string }
	region?: string
	startOfWeek?: string
	status?: string
	subregion?: string
	timezones?: Array<string>
	tld?: Array<string>
	translations?: unknown
	unMember?: boolean
}

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export interface CountryState {
	countries: CountryType[]
	countryPage: CountryType
	status: Status
	statusCountryPage: Status
}
