import { getAllIds, getData, getData2 } from '../lib/data';

export async function getStaticProps( { params } ) {
    const personData = await getData(params.id);
    const boatData = await getData2(params.id);
    return {
        props: {
            personData,
            boatData
        }
    };
}

export async function getStaticPaths() {
    const paths = getAllIds();
    return {
        paths,
        fallback: false
    };
}

export default function Entry( { personData, boatData } ) {
    return (
        <>
            <article className="card text-center mt-5">
                <div className="card-body">
                    <h2 className="card-title m-4">{personData.name}</h2>
                    <h6 className="card-subtitle mb-2 text-body-secondary m-4">Age: {personData.age}</h6>
                    <p className="card-text m-4 font-italic">{personData.bio}</p>
                    <h6 className="mt-5 mb-4">He will be captaining the</h6>
                    <h2 className="card-title mb-5">{boatData.name}</h2>
                    <h6 className="card-subtitle m-5 text-body-secondary">{boatData.type}</h6>
                    <pre className="m-5">{boatData.art}</pre>

                </div>
            </article>
        </>
    );
}