/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Banner } from "../../../molecules";

export const BannerSection: FC<{}> = ({}) => (
  <>
    <Banner
      title="Hızlı"
      subTitle="Güvenli"
      subTitle2="Tüm İsteklerinizi Karşılayabiliceğiniz Yerdesiniz."
      buttonTitle="Alışverişe Başla"
    />
  </>
);
