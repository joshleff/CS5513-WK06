
import Link from 'next/link';
import { getSortedList } from '../lib/data-firebase';
export async function getStaticProps() {
    const allData = await getSortedList();
    return {
        props: {
            allData
        }
    };
}

export default function Home ( { allData } ) {
    return (
            <main className="container-fluid">
                <h1 className="text-center m-5 ">Meet Your Captains</h1>

                <div className="list-group mt-4 text-center w-50 m-auto">
                    {allData && allData.map(
                        ({id, name}) => (
                            <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action text-center p-4">
                                {name}
                            </Link>
                        )
                    )
                    }
                </div>




            </main>
    )

}