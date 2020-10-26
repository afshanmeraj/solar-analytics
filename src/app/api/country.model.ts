export interface Country {
    readonly name: string;
    readonly topLevelDomain: Array<string>;
    readonly alpha2Code: string;
    readonly alpha3Code: string;
    readonly callingCodes: Array<string>;
    readonly capital: string;
    readonly altSpellings: Array<string>;

    readonly region: string;
    readonly subregion: string;
    readonly population: number;
    readonly latlng: Array<number>;
    readonly demonym: string;

    readonly area: number;
    readonly gini: number;
    readonly timezones: Array<string>;
    readonly borders: ReadonlyArray<string>;
    
    readonly native_name: string;
    readonly numeric_code: string;
    readonly currencies: Array<Currency>;
    readonly languages: Array<Language>;
    readonly flag: string;
    readonly regionalBlocs: Array<Bloc>;
    readonly afg: string;
}

interface Currency {
    readonly code: string;
    readonly name: string;
    readonly symbol: string;
}
  
interface Language {
    readonly iso639_1: string;
    readonly iso639_2: string;
    readonly name: string;
    readonly nativeName: string;
}

interface Bloc {
    readonly acronym: string;
    readonly name: string;
    readonly otherAcronyms: Array<string>;
    readonly otherNames: Array<string>;
}


