import { FC } from "react";
import { Slider, InfoCard } from "../../molecules";
export const ProductDetail: FC<{}> = () => {
  return (
    <>
      <div className="container mx-auto mt-14 ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 ">
          <div>
            <Slider />
          </div>
          <div>
            <InfoCard
              ProductTitle="Çatal Kaşık Takımları"
              ProductPrice="188.00"
              ProductSales="12"
              ProductDescription="Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı bloğunu doldurmak için kullanılır."
              ProductCount="188"
              ProductCountKind="Koli"
            />
          </div>
        </div>
      </div>
    </>
  );
};
