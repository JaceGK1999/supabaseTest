const SUPABASE_URL = "https://edmczxuwjcwwnsmabezz.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbWN6eHV3amN3d25zbWFiZXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0MjEsImV4cCI6MTk1OTkxNzQyMX0.HouVg2N-Lni_g52lrL1Jla7gOhh61sUGEGckeyC8hnE";
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
  return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
  const resp = await client.from("movies").select("*");
  console.log(resp);
  return checkError(resp);
}

export async function getMoviesWithDirector() {
  const movies = await client.from("movies").select("*, directors(*)");

  return checkError(movies);

  // return the list of all the movies with their director
}

export async function getDirectorNames() {
  const directors = await client.from("directors").select("name");
  // return the list of the director's names
  return checkError(directors);
}

export async function getMovieById(id) {
  const resp = await client.from("movies").select("*").eq("id", id).single();
  console.log(resp, "test 4");
  // return the movie with the given id
  return checkError(resp);
}

export async function getMovieByTitle(title) {
  const resp = await client
    .from("movies")
    .select("*")
    .eq("title", title)
    .single();
  // return the movie with the given title
  return checkError(resp);
}

export async function getOldestMovie() {
  const resp = await client.from("movies").select("*").eq("year").single();
  // return the oldest movie (assume the database is not sorted)
  return checkError(resp);
}

export async function getMoviesAfter(year) {
  const resp = await client.from("movies").select("*").gte(year, "year");
  return checkError(resp);
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
