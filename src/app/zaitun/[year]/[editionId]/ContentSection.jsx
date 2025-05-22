import TopCarousell from "./TopCarousell"
import CategorySection from "./CategorySection"
import IklanB from "./IklanB"

const ContentSection = ({openModal, categories, editionId}) => {
  return (
    <>
      <h1 className="text-[2rem] font-ibara font-medium text-xmas-secondary">Artikel Teratas</h1>
      <div className="mt-4 mb-20">
        <TopCarousell editionId={editionId}/>
      </div>
      <div className="w-full flex justify-center">
        <IklanB />
      </div>
      {
        categories.map(category => <CategorySection key={category.id} categoryId={category.id} categoryTitle={category.label}/>)
      }
    </>
  )
}

export default ContentSection