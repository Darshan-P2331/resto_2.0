import Filters from "./Filters"
import ProductItem from "./ProductItem"

type Props = {}

export default function Products({}: Props) {
  return (
    <section className='products_admin'>
      <Filters />
        <div className="m-5 text-right">
          <span className="uppercase tracking-[1.3px] text-(--background-hover)">Select all</span>
          <input type="checkbox" checked={true} className="w-5 h-5 my-0 mx-3.75 translate-y-1.25 accent-(--background-hover)" />
          <button className="border border-red-500 py-2.5 px-3.75 text-red-500 uppercase rounded-sm">Delete All</button>
        </div>
      <div className="grid grid-cols-[repeat(auto-fit, minmax(25rem, 1fr))] gap-6">
            <ProductItem
              key="{product._id}"
              product={Object}
              isAdmin={false}
            />
      </div>
    </section>
  )
}