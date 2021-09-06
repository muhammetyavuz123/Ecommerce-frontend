import { FC } from "react";
import { Hero, HeroKategoryCard } from "../../../molecules";

export const HeroSection: FC<{}> = ({}) => (
  <Hero
    title="Güvenli Alışverişin"
    subtitle="Tek Adresi"
    subtitle2="Görerek "
    subtitle3="Beğenerek "
    subtitle4="Tüm yeni Ürünleri buradan takip edip sipariş verebilirsiniz."
    subtitle5="Sizin memnuniyetiniz için çalışıyoruz."
  >
    <HeroKategoryCard
      categoryCardList={[
        {
          image: "/png/logo.png",
          title: "Kırtasiye",
          subTitle: "Kırtasiye",
        },
        {
          image: "/png/logo.png",
          title: "Kırtasiye",
          subTitle: "Kırtasiye",
        },
        {
          image: "/png/logo.png",
          title: "Kırtasiye",
          subTitle: "Kırtasiye",
        },
        {
          image: "/png/logo.png",
          title: "Kırtasiye",
          subTitle: "Kırtasiye",
        },
      ]}
    />
  </Hero>
);
