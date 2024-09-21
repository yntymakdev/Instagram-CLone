namespace Posts {
	type GetPostsResponse = {
		id: number;
		userId: number;
		caption: string;
		mediaUrl: string;
		mediaType: string;
		createdAt: string;
		updatedAt: string;
	}[];

	type GetPostsRequest = void; // Если нет параметров для запроса
}

namespace PostOther {
	type PostOtherResponse = {
		id: string;
		userId: number;
		caption: string;
		mediaUrl: string;
		mediaType: string;
		createdAt: string;
		updatedAt: string;
	}[];

	type PostOtherRequest = void; // Если нет параметров для запроса
}
