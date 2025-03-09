let projectListingHeightSvelte = $state(0);

export const projectListingInformation = {
	get height() {
		return projectListingHeightSvelte;
	},
	set height(v: number) {
		projectListingHeightSvelte = v;
	},
};
