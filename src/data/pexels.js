import { createClient } from "pexels";

const client = createClient(
	"563492ad6f917000010000017bcf558a7a4544e9b41af89f788ed08c"
);
const query = "Men";

client.photos
	.search({ query, per_page: 1 })
	.then((photos) => console.log(photos));
