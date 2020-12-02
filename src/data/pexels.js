import { createClient } from "pexels";

const client = createClient("mykey");
const query = "mysearch";

client.photos
	.search({ query, per_page: 1 })
	.then((photos) => console.log(photos));
