import { samplePosts } from "../samplePosts";

export default function LinkPosted() {
  const posts = samplePosts.map((post) => {
    return (
      <article key={post.id}>
        <a href={`https://${post.link}`} target="_blank" rel="noreferrer">
          {post.link}
        </a>
        <h2>{post.titulo}</h2>
        <p>{post.descripcion}...</p>

        <p>
          Subido por {post.autor} el {post.fecha} a las {post.hora}
        </p>
        <p>{post.voto}</p>
      </article>
    );
  });
  return <li>{posts}</li>;
}
