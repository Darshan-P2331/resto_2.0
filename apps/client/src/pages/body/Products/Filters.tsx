type Props = {};

export default function Filters({}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between w-full gap-4 mx-0 my-4 overflow-hidden min-h-10 md:flex-nowrap">
      <div className="my-[0.7rem] mx-0 rounded-lg py-4 px-[1.2rem] text-[1.6rem] bg-[#f7f7f7] normal-case text-(--primary-text) dark:text-white dark:bg-gray-900">
        <span>Filters: </span>
        <select name="category">
          <option value="" className="dark:bg-gray-900">All Products</option>
        </select>
      </div>
      <div className="flex-1 my-[0.7rem] mx-0 rounded-lg py-4 px-[1.2rem] text-[1.6rem] bg-[#f7f7f7] normal-case text-(--primary-text) dark:text-white dark:bg-gray-900">
        <input
          type="text"
          placeholder="Enter your search!"
          className="w-full h-full placeholder:text-gray-900 dark:placeholder:text-gray-300"
        />
      </div>

      <div className="my-[0.7rem] mx-0 rounded-lg py-4 px-[1.2rem] text-[1.6rem] bg-[#f7f7f7] normal-case text-(--primary-text) dark:text-white dark:bg-gray-900">
        <span>Sort By: </span>
        <select>
          <option className="dark:bg-gray-900 hover:bg-(--background-hover)" value="">Newest</option>
          <option className="dark:bg-gray-900 hover:bg-(--background-hover)" value="sort=oldest">Oldest</option>
          <option className="dark:bg-gray-900 hover:bg-(--background-hover)" value="sort=-sold">Best sales</option>
          <option className="dark:bg-gray-900 hover:bg-(--background-hover)" value="sort=-price">Price: High-Low</option>
          <option className="dark:bg-gray-900 hover:bg-(--background-hover)" value="sort=price">Price: Low-High</option>
        </select>
      </div>
    </div>
  );
}
