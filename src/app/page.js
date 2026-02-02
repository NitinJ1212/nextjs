'use client';
import Link from "next/link";
import styles from "./page.module.css";
import { useUser } from "@/hooks/useUser";

export default function Home() {

  const { data, isLoading, refetch, isFetching, isStale, dataUpdatedAt } = useUser();

  if (isLoading) return <p>Loading...</p>;


  if (isLoading) return <p>Loading...</p>;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        This is Landing page.
        <p>Fetching: {isFetching ? 'Yes' : 'No'}</p>
        <p>Stale: {isStale ? 'Yes' : 'No'}</p>
        <Link href="/about">
          <button>Go to About Page</button>
        </Link>
        <button onClick={() => refetch()}>
          get data
        </button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </div>
  );
}

// 'use client';

// import styles from "./page.module.css";
// import { useUser } from "@/hooks/useUser";

// export default function Home() {
//   const { data: user, isLoading, refetch } = useUser();

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <p>This is Landing page.</p>

//         <pre>{JSON.stringify(user, null, 2)}</pre>

//         <button onClick={() => refetch()}>
//           Refetch user
//         </button>
//       </main>
//     </div>
//   );
// }
