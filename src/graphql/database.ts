interface Movie {
  id: number;
  imdb_id: string | null;
  poster_path: string | null;
  title: string;
  runtime: number | null;
  vote_average: number;
}

interface Company {
  id: number;
  name: string;
  logo_path: string | null;
}
