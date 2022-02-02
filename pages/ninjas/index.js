import style from '../../styles/Ninjas.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const result = await res.json();

  return {
    props: { ninjas: result },
  };
};

// export const handleClick = (id) => {
//   return id;
// };

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All ninjas</h1>
      <ul>
        {ninjas.map((user) => {
          return (
            <Link
              key={user.id}
              href={'/ninjas/' + user.id}
              className={style.single}
            >
              <a className={style.single}>{user.name}</a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Ninjas;
