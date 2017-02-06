export class incidencia {
	constructor(
		public ID:number,
		public Nom:string,
		public Cognom:string,
		public DNI:string,
		public Telefon:string,
		public Data:string,
        public Queixa:string,
        public busRetard:boolean,
        public busNoPassa:boolean,
        public busDret:boolean,
        public busPle:boolean,
        public linia:number,
		public politicaPrivadesa:boolean,
		public estacio:number,
		public data:string,
		public hora:string
       
	){}
}