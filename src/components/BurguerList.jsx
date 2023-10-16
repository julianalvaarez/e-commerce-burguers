import { BurguerCard } from "./"

export const BurguerList = ({burguers}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-10">
        {burguers.map((burguer) => (
            <BurguerCard burguer={burguer} key={burguer.id} />
        ))}
      </div>
    </>
  )
}
