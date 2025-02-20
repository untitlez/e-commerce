import { API_URL } from "@/app/api/apiConfig";
import Link from "next/link";

export default async function ProductPageId({ params }) {
  const res = await fetch(`${API_URL}/${params.id}`);
  if (!res.ok) throw new Error("Fail to fetch id");
  const data = await res.json();

  return (
    <>
      <div className="fill py-8">
        <Link href="/page/product">
          <button className="btn btn-outline btn-accent ">Back</button>
        </Link>

        {data.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 border border-base-content my-8 p-8"
          >
            <h2>{item.name}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img src={item.image_url} width={750} />

              <ul className="list-none flex flex-col gap-2 justify-center">
                <li className="mb-4">{item.description}</li>
                <li>Favor : {item.flavor_profile}</li>
                <li>region : {item.region}</li>
                <li>weight : {item.weight} g.</li>
                <li className="font-bold text-2xl text-accent py-8 border-b-2 border-base-content">
                  $ {item.price}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
