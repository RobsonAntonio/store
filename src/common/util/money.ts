
const formatMoneyLocale =(input: any) =>
input
		.toFixed(2)
		.replace(".", ",")
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

export {formatMoneyLocale };
