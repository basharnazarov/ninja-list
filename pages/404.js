import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const notFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
    console.log('working');
  }, []);
  return (
    <div className="not-found">
      <h1>OOOOOPS ....</h1>
      <h2>That page can not be found</h2>
      <p>
        Go back to{' '}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default notFound;
