import { createClient } from "pexels";

async function getPhotos() {
  const query = "Nature";

  const promise = await client.photos.search({
    query,
    landscape,
    page: 1,
    per_page: 4,
  });
  const processedResponse = await promise.json();
}
