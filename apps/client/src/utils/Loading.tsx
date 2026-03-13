
type Props = {}

export default function Loading({}: Props) {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full overflow-hidden bg-white dark:bg-black">
      <img src="./loader.gif" alt="Loading..." className="dark:invert dark:hue-rotate-150" />
    </div>
  )
}