import { getAllIds, getData } from '../lib/data-firebase';
export async function getStaticProps( { params } ) {
    const personData = await getData(params.id);

    return {
        props: {
            personData

        }
    };
}


export async function getStaticPaths() {
    const paths = await getAllIds();
    return {
        paths,
        fallback: false
    };
}



export default function Entry( { personData }  ) {
    return (
        <>
            <article className="card text-center mt-5">
                <div className="card-body">
                    <h2 className="card-title m-4">{personData.name}</h2>
                    <h6 className="card-subtitle mb-2 text-body-secondary m-4">Age: {personData.age}</h6>
                    <p className="card-text m-4 font-italic">{personData.bio}</p>




                </div>
            </article>
        </>
    );
}