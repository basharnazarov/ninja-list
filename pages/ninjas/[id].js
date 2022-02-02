import Ninjas from '.';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context);
  const id = context.params.id;
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const singleUser = await result.json();

  return {
    props: { each: singleUser },
  };
};

const Detail = ({ each }) => {
  return (
    <div>
      <h1>Ninja Details Page</h1>
      <p>{each.name}</p>
      <hr />
      <p>{each.email}</p>
      <hr />
      <p>{each.phone}</p>
      <hr />
    </div>
  );
};

export default Detail;
