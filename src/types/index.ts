export type apiResponse<T> = Array<T>;

export type apiResponsePostItem = {
	userId: number;
	id: number;
	title: string;
	body: string;
};
